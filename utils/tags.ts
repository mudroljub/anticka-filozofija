import 'server-only'
import { quotesData } from './quotes'

export const allTags = Array.from(new Set(
  quotesData.flatMap(entry => entry.tags ?? []),
)).sort()
