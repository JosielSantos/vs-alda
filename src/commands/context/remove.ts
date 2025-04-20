import * as vscode from 'vscode';
import { contextManager } from '../../context-manager';

export async function removeFirstLineFromContext() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    contextManager.removeFirst(editor.document);
    vscode.window.setStatusBarMessage("Removed first line from context", 2000);
}

export async function removeLastLineFromContext() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    contextManager.removeLast(editor.document);
    vscode.window.setStatusBarMessage("Removed last line from context", 2000);
}
