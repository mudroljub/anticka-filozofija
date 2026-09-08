const attributes = tag => Object.fromEntries(
  [...tag.matchAll(/([:\w-]+)="([^"]*)"/gu)].map(match => [match[1], match[2]]),
)

export const extractBekkerFragment = (xml, anchor) => {
  const pages = [...xml.matchAll(/<milestone\b[^>]*\/>/gu)]
    .map(match => ({ match, ...attributes(match[0]) }))
    .filter(page => page.unit === 'page' && page.resp === 'Bekker')
  const index = pages.findIndex(page => page.n === anchor)
  if (index < 0) return null
  const first = pages[index].match
  const start = first.index + first[0].length
  // A new book may repeat the current Bekker page. Its opening text still
  // belongs to that page, up to the next distinct page marker.
  const next = pages.slice(index + 1).find(page => page.n !== anchor)
  const end = next?.match.index ?? xml.indexOf('</div>', start)
  return xml.slice(start, end < 0 ? xml.length : end)
}
