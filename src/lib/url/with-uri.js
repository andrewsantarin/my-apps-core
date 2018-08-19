import pathToRegexp from 'path-to-regexp';

/**
 * Enhances a given path by mapping a JSON object to URI parameters in the path.
 * The URI parameters are defined by a colon, followed by a parameter name.
 *
 * @example
 * const params = { id: 2, name: 'Andrew' };
 * const path = withUri(params)('/path/:id/anotherpath/:name');
 *
 * // returns '/path/2/anotherpath/Andrew'
 *
 * `:id` implies `params.id`.
 * `:name` implies `params.name`.
 */
export default function withUri(params) {
  return function enhanceUrl(path) {
    if (!params) {
      return path;
    }

    const compiledPath = pathToRegexp.compile(path);
    const resultantPath = compiledPath(params);

    return resultantPath;
  }
}
