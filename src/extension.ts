import * as vscode from 'vscode';
import { insertLogWithText, insertBaseLog } from './helpers';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "Universal Console Utils" is now active!');

	const insertLogStatement = vscode.commands.registerCommand('universal-console-utils.insertLogStatement', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		const selection = editor.selection;
		const text = editor.document.getText(selection);

		vscode.commands.executeCommand('editor.action.insertLineAfter')
			.then(() => {
				text ? insertLogWithText(text) : insertBaseLog();
			});

	});

	context.subscriptions.push(insertLogStatement);
}

// this method is called when your extension is deactivated
export function deactivate() { }
