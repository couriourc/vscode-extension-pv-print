export function loggerCopyImplement(config: any, cache: any): void {
  let document = config.document;
  let editor = config.editor;
  let properties = config.properties;
  config = config.config;
  const documentCountOfLine = document.lineCount;
  console.log(properties);
  let current = `${documentCountOfLine}`;
  console.log(current);
  cache.current = cache.current
    ? (cache.prev.push(cache.current), current)
    : current;
}
