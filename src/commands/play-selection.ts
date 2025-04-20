import * as vscode from 'vscode';
import { exec } from 'child_process';
import { contextManager } from '../context-manager';

export async function playSelection() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const contextLines = contextManager.get(editor.document);
    const selection = editor.selection;
    const selectedText = selection.isEmpty
        ? [editor.document.lineAt(selection.active.line).text]
        : editor.document.getText(selection).split('\n');
    const finalText = [...contextLines, ...selectedText].join('\n');
    const child = exec("alda play", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Failed to play: ${stderr}`);
            return;
        }
        vscode.window.setStatusBarMessage("Alda is playing...", 2000);
    });
    child.stdin?.write(finalText);
    child.stdin?.end();
}
