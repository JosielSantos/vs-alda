import * as vscode from 'vscode';
import { exec } from 'child_process';
import { contextManager } from '../context-manager';

export async function exportSelectionToMidi() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const document = editor.document;
    const contextLines = contextManager.get(document);
    const selection = editor.selection;
    const selectedText = selection.isEmpty
        ? [document.lineAt(selection.active.line).text]
        : document.getText(selection).split('\n');
    const finalText = [...contextLines, ...selectedText].join('\n');
    const defaultUri = document.uri.with({
        path: document.uri.path.replace(/\.alda$/, '.mid'),
    });
    const uri = await vscode.window.showSaveDialog({
        defaultUri,
        filters: {
            'MIDI files': ['mid'],
        },
        saveLabel: "Export selection as MIDI"
    });
    if (!uri) {
        return;
    }
    const outputPath = uri.fsPath;
    const exportCmd = `alda export --output-format midi --output "${outputPath}"`;
    const child = exec(exportCmd, (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`'alda export' error: ${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`MIDI file created: ${outputPath}`);
    });
    child.stdin?.write(finalText);
    child.stdin?.end();
}
