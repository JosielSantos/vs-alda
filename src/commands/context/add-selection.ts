import * as vscode from 'vscode';
import { contextManager } from '../../context-manager';

export async function addSelectionToContext() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const selection = editor.selection;
    const lines = selection.isEmpty
        ? [editor.document.lineAt(selection.active.line).text]
        : editor.document.getText(selection).split('\n');
    contextManager.add(editor.document, lines);
    vscode.window.setStatusBarMessage("Selection added to context", 2000);
}
