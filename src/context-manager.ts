import * as vscode from 'vscode';

const contextMap = new Map<string, string[]>();

function getKey(document: vscode.TextDocument): string {
    return document.uri.toString();
}

export const contextManager = {
    add(document: vscode.TextDocument, lines: string[]) {
        const key = getKey(document);
        const current = contextMap.get(key) || [];
        contextMap.set(key, [...current, ...lines]);
    },

    get(document: vscode.TextDocument): string[] {
        return contextMap.get(getKey(document)) || [];
    },

    removeFirst(document: vscode.TextDocument) {
        const key = getKey(document);
        const current = contextMap.get(key) || [];
        contextMap.set(key, current.slice(1));
    },

    removeLast(document: vscode.TextDocument) {
        const key = getKey(document);
        const current = contextMap.get(key) || [];
        contextMap.set(key, current.slice(0, -1));
    },

    clear(document: vscode.TextDocument) {
        contextMap.delete(getKey(document));
    }
};
