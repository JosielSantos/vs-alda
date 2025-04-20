import * as vscode from 'vscode';
import { playSelection } from './commands/play-selection';
import { exportSelectionToMidi } from './commands/export-selection-to-midi';
import { stop } from './commands/stop';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('vs-alda.playSelection', playSelection),
        vscode.commands.registerCommand('vs-alda.exportSelectionToMidi', exportSelectionToMidi),
        vscode.commands.registerCommand('vs-alda.stop', stop),
    );
}

export function deactivate() { }
