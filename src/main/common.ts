import * as vscode from "vscode";
import { ExtensionProperties } from "../entity/extensionProperties";

export function getExtensionProperties(
  workspaceConfig: vscode.WorkspaceConfiguration
) {
  const wrapLogMessage = workspaceConfig.wrapLogMessage || false;
  const logMessagePrefix = workspaceConfig.logMessagePrefix
    ? workspaceConfig.logMessagePrefix
    : "";
  const addSemicolonInTheEnd = workspaceConfig.addSemicolonInTheEnd || false;
  const insertEnclosingClass = workspaceConfig.insertEnclosingClass;
  const insertEnclosingFunction = workspaceConfig.insertEnclosingFunction;
  const quote = workspaceConfig.quote || '"';
  const delimiterInsideMessage = workspaceConfig.delimiterInsideMessage || "~";
  const includeFileNameAndLineNum =
    workspaceConfig.includeFileNameAndLineNum || false;
  const extensionProperties: ExtensionProperties = {
    wrapLogMessage,
    logMessagePrefix,
    addSemicolonInTheEnd,
    insertEnclosingClass,
    insertEnclosingFunction,
    quote,
    delimiterInsideMessage,
    includeFileNameAndLineNum,
  };
  return extensionProperties;
}
