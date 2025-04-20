# vs-alda

A basic, experimental, toy extension to use [Alda Music](https://github.com/alda-lang/alda) program inside VS Code.

Alda is a text based language to write music scores.

This extension works when a **.alda** file is open.

## Features / using

* Play selected text (alt+p)
* Stop playback (alt+s)
* Export selected text to MIDI (alt+shift+e)

### Context Management

Sometimes a selection is not enough to make an Alda snippet playable — for example, when an instrument declaration is needed (piano:, violin:, etc.). To solve this, the extension allows you to build a reusable context, isolated per editor.

You can compose a context incrementally and then play or export it together with your current selection.

* Add current selection to context: alt+a
* Remove first line from context: alt+1
* Remove last line from context: alt+0
* Clear context: alt+c

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
* Keyboard shortcuts can conflict with VS Code natives
* Extension commands need more feedback (loading, done, etc)
