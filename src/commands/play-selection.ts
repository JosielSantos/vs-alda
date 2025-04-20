import * as vscode from 'vscode';
import { exec } from 'child_process';

export async function playSelection() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
        const selection = editor.selection;
    const text = selection.isEmpty
        ? editor.document.lineAt(selection.active.line).text
        : editor.document.getText(selection);
    const child = exec("alda play", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Failed to play: ${stderr}`);
            return;
        }
        vscode.window.setStatusBarMessage("Alda is playing...", 2000);
    });
    child.stdin?.write(text);
    child.stdin?.end();
}
