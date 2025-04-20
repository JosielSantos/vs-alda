import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vs-alda.playSelection', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage("No active editor");
			return;
		}
		const selection = editor.selection;
		const text = selection.isEmpty
			? editor.document.lineAt(selection.active.line).text
			: editor.document.getText(selection);
		const child = exec("alda play", (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`Erro ao tocar Alda: ${stderr}`);
				return;
			}
			vscode.window.setStatusBarMessage("🎵 Alda tocando...", 2000);
		});
		child.stdin?.write(text);
		child.stdin?.end();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
