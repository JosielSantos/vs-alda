import * as vscode from 'vscode';
import { contextManager } from '../../context-manager';

export async function clearContext() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    contextManager.clear(editor.document);
    vscode.window.setStatusBarMessage("Context cleared", 2000);
}
