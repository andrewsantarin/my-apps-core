import queryString from 'query-string';

export default function getQueryString(...args) {
  const values = queryString.parse(window.location.search) || {};

  switch (args.length) {
    case 0:
      return values;
    case 1:
      return values[args[0]];
    default:
      return args.reduce((obj, arg) => ({
        ...obj,
        [arg]: values[arg]
      }), {});
  }
}
