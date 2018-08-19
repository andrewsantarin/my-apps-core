export default function withMatchUrl(match) {
  return function enhancePath(path) {
    return [match.url, path].join('');
  }
}
