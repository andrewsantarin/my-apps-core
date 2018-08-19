export default function withBaseUrl(baseUrl) {
  return function enhancePath(enhanceablePath = '') {
    return baseUrl && baseUrl !== '/'
      ? `${baseUrl}${enhanceablePath}`
      : enhanceablePath;
  }
}
