import * as vscode from 'vscode';
import { playSelection } from './commands/play-selection';
import { exportSelectionToMidi } from './commands/export-selection-to-midi';
import { stop } from './commands/stop';
import {
    addSelectionToContext,
    clearContext,
    removeFirstLineFromContext,
    removeLastLineFromContext
} from './commands/context';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('vs-alda.playSelection', playSelection),
        vscode.commands.registerCommand('vs-alda.exportSelectionToMidi', exportSelectionToMidi),
        vscode.commands.registerCommand('vs-alda.stop', stop),
        vscode.commands.registerCommand('vs-alda.context.add-selection', addSelectionToContext),
        vscode.commands.registerCommand('vs-alda.context.clear', clearContext),
        vscode.commands.registerCommand('vs-alda.context.remove-first-line', removeFirstLineFromContext),
        vscode.commands.registerCommand('vs-alda.context.remove-last-line', removeLastLineFromContext),
    );
}

export function deactivate() { }
