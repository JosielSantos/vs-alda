import * as vscode from 'vscode';
import { exec } from 'child_process';

export async function stop() {
    const child = exec("alda stop", (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Failed to stop Alda: ${stderr}`);
            return;
        }
        vscode.window.setStatusBarMessage("Alda stopped", 2000);
    });
}
