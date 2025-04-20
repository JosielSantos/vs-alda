import * as vscode from 'vscode';
import { playSelection } from './commands/play-selection';
import { exportSelectionToMidi } from './commands/export-selection-to-midi';

export function activate(context: vscode.ExtensionContext) {
    let playSelectionCommand = vscode.commands.registerCommand('vs-alda.playSelection', playSelection);
    let exportSelectionToMidiCommand = vscode.commands.registerCommand('vs-alda.exportSelectionToMidi', exportSelectionToMidi);

    context.subscriptions.push(playSelectionCommand);
    context.subscriptions.push(exportSelectionToMidiCommand);
}

export function deactivate() { }
