import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { extractBekkerFragment } from '../tei-bekker.mjs'

test('a page continues across a repeated marker at a book boundary', () => {
  const xml = `<div><milestone unit="page" resp="Bekker" n="995a"/>end of book two</div>
    <div><milestone unit="page" resp="Bekker" n="995a"/>start of book three
    <milestone unit="line" resp="Bekker" n="30"/>continuation
    <milestone unit="page" resp="Bekker" n="995b"/>next page</div>`
  const fragment = extractBekkerFragment(xml, '995a')
  assert.match(fragment, /end of book two/u)
  assert.match(fragment, /start of book three/u)
  assert.match(fragment, /continuation/u)
  assert.doesNotMatch(fragment, /next page/u)
  assert.equal(extractBekkerFragment(xml, '995b'), 'next page')
  assert.equal(extractBekkerFragment(xml, '999a'), null)
})

test('Metaphysics 995a includes the opening argument of book three exactly once', () => {
  const xml = readFileSync(new URL('../../data/sources/canonical-greekLit/data/tlg0086/tlg025/tlg0086.tlg025.perseus-grc2.xml', import.meta.url), 'utf8')
  const fragment = extractBekkerFragment(xml, '995a')
  assert.match(fragment, /καὶ τὰ παρὰ ταῦτα/u)
  assert.equal(fragment.split('ἀνάγκη πρὸς τὴν ἐπιζητουμένην ἐπιστήμην').length - 1, 1)
  assert.match(fragment, /εἴ ποτε τὸ ζητούμενον εὕρηκεν ἢ μὴ γιγνώσκειν/u)
  assert.doesNotMatch(fragment, /τὸ γὰρ τέλος τούτῳ/u)
})
