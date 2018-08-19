import queryString from 'query-string';

/**
 * Enhances a given path with by mapping a JSON object to query string parameters in the path.
 * The mapping will occur at the JSON's top level only.
 *
 * @example
 * const params = { year: '2017', categories: ['Car', 'House'] };
 * const path = withQueryString(params)('/path/searchby');
 *
 * // returns '/path/searchby?year=2017&categories=Car&categories=House'
 *
 * `year=` implies `params.year`.
 * `categories=` implies `params.categories`.
 */
export default function withQueryString(params) {
  return function enhanceUrl(path) {
    const resultantPath = params ? `${path}?${queryString.stringify(params)}` : path;

    return resultantPath;
  }
}
