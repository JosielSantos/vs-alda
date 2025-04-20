# vs-alda

A basic, experimental, toy extension to use [Alda Music](https://github.com/alda-lang/alda) program inside VS Code.

Alda is a text based language to write music scores.

This extension works when a **.alda** file is open.

## Features / using

* Play selected text: alt+l p
* Stop playback: alt+l s
* Export selected text to MIDI: alt+l e

### Context Management

Sometimes a selection is not enough to make an Alda snippet playable — for example, when an instrument declaration is needed (piano:, violin:, etc.). To solve this, the extension allows you to build a reusable context, isolated per editor.

You can compose a context incrementally and then play or export it together with your current selection.

* Add current selection to context: alt+l a
* Remove first line from context: alt+l 1
* Remove last line from context: alt+l 0
* Clear context: alt+l c

#### Behavior

* Context is stored per open document.
* When you run **Play Selection** or **Export to MIDI**, the extension will prepend the accumulated context before the selected lines.
* This allows you to separate instrument/tempo declarations from melody or rhythm sections and reuse them quickly.

## Requirements

The alda and alda-player properly installed and configured on your PATH variable.

See how to install it [here](https://alda.io/install).

## Extension Settings

**N/A**

## Known Issues

* Do not check for alda installation
* Extension commands need more feedback (loading, done, etc)
