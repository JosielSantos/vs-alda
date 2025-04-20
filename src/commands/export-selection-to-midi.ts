import * as vscode from 'vscode';
import { exec } from 'child_process';

export async function exportSelectionToMidi() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const document = editor.document;
    const selection = editor.selection;
    const text = selection.isEmpty
        ? document.lineAt(selection.active.line).text
        : document.getText(selection);
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
    child.stdin?.write(text);
    child.stdin?.end();
}
