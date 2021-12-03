import * as vscode from "vscode";
import { ExtensionProperties } from "../entity/extensionProperties";
import { getExtensionProperties } from "./common";
import { loggerCopyImplement } from "./loggerCopy";
const cache = {
  prev: [],
  current: undefined,
};

function getEditor() {
  const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const document: vscode.TextDocument = editor.document;
  const config: vscode.WorkspaceConfiguration =
    vscode.workspace.getConfiguration("print");
  const properties: ExtensionProperties = getExtensionProperties(config);

  return {
    editor,
    document,
    config,
    properties
  };
}
export function loggerCopy() {
  let localConfig = getEditor();
  let config = { ...{}, ...localConfig };
  loggerCopyImplement(config, cache);
}
export function loggerPaste() {
  let localConfig = getEditor();
}
export function loggerHighlight() {
  let localConfig = getEditor();
}

