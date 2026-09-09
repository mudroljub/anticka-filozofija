import { promises as fs } from 'node:fs'

const greekTermsFile = new URL('../data/tags.json', import.meta.url)

const normalizeGreek = text =>
  text
    .normalize('NFD')
    .replace(/\u0300/g, '\u0301')
    .normalize('NFC')
    .toLocaleLowerCase('el')

const escapeRegExp = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const greekFormPattern = form => {
  const normalizedForm = normalizeGreek(form)
  const expression = escapeRegExp(normalizedForm).replace(/\s+/g, '\\s+')

  return new RegExp(`(?<!\\p{L})${expression}(?!\\p{L})`, 'u')
}

const greekTerms = JSON.parse(await fs.readFile(greekTermsFile, 'utf8'))
export const knownGreekTags = new Set(Object.keys(greekTerms))
const normalizedGreekTerms = Object.entries(greekTerms).map(([tag, forms]) => [
  tag,
  forms.map(greekFormPattern),
])

/**
 * Detect Greek philosophical terms in originalText and return tags.
 * @param {string} originalText Greek text to analyze.
 * @returns {string[]} Array of detected term tags.
 */
export const detectTags = originalText => {
  if (!originalText) return []

  const detectedTags = new Set()
  const normalizedText = normalizeGreek(originalText)

  for (const [tag, patterns] of normalizedGreekTerms) {
    if (patterns.some(pattern => pattern.test(normalizedText))) {
      detectedTags.add(tag)
    }
  }

  return [...detectedTags].sort()
}

