import * as vscode from 'vscode';
import { getLogStatementWithText } from './helpers';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "Universal Console Utils" is now active!'
  );

  const insertLogStatement = vscode.commands.registerCommand(
    'universal-console-utils.insertLogStatement',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const text = editor.selections.map((sel: vscode.Selection) =>
        editor.document.getText(sel)
      );
      vscode.commands
        .executeCommand('editor.action.insertLineAfter')
        .then<void>(() => {
          text.reduce((acc: Promise<any>, _text: string, index: number) => {
            return acc.then((res) => {
              return new Promise<void>((resolve) => {
                const logToInsert = getLogStatementWithText(
                  _text,
                  editor.document.languageId
                );
                const range = new vscode.Range(
                  editor.selections[index].start,
                  editor.selections[index].end
                );
                editor
                  .edit((editBuilder: vscode.TextEditorEdit) => {
                    editBuilder.replace(range, logToInsert);
                  })
                  .then(() => resolve());
              });
            });
          }, Promise.resolve());
        })
        .then(() => cursorPlacement());
      return;
    }
  );
  context.subscriptions.push(insertLogStatement);
}

function cursorPlacement() {
  // release the selection caused by inserting
  vscode.commands.executeCommand('cursorMove', {
    to: 'right',
    by: 'line',
    value: 1,
  });
  // position the cursor inside the parenthesis
  vscode.commands.executeCommand('cursorMove', {
    to: 'left',
    by: 'line',
    value: 1,
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
