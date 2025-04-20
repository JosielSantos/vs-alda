import * as vscode from 'vscode';
import { playSelection } from './commands/play-selection';
import { exportSelectionToMidi } from './commands/export-selection-to-midi';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('vs-alda.playSelection', playSelection),
        vscode.commands.registerCommand('vs-alda.exportSelectionToMidi', exportSelectionToMidi),
    );
}

export function deactivate() { }
