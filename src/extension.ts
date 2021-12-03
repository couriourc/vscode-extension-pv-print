// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { loggerCopy, loggerPaste, loggerHighlight } from "./main";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "print" is now active!');

  // 获取当前光标的类容复制加工
  let loggerCopyDipose = vscode.commands.registerTextEditorCommand(
    "print.loggerCopy",
    loggerCopy
  );
  // 粘贴
  let loggerPasteDipose = vscode.commands.registerTextEditorCommand(
    "print.loggerPaste",
    loggerPaste
  );
  let loggerHighlightDipose = vscode.commands.registerTextEditorCommand(
    "print.loggerHighlight",
    loggerHighlight
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
