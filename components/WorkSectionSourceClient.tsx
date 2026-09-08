'use client'

import Link from 'next/link'
import Header from './Header'
import Sidebar from './Sidebar'
import SourceTextContent from './SourceTextContent'
import { authorsData, getAuthorName } from '../utils/catalog'
import { withBasePath } from '../utils/helpers'
import { useTranslations } from '../utils/useTranslations'
import { getLocalizedWorkText, type Work, type WorkOriginal } from '../types/works'
import type { Language } from '../types/data'
import styles from './QuotePageClient.module.scss'

interface WorkSectionSourceClientProps {
  language: Language
  work: Work
  anchor: string
  sr: string
  stsl: string
  original?: WorkOriginal
  authorSlug: string
  readingAnchor: string
}

export default function WorkSectionSourceClient({ language, work, anchor, sr, stsl, original, authorSlug, readingAnchor }: WorkSectionSourceClientProps) {
  const { t, transliterate } = useTranslations(language)
  const authorName = transliterate(getAuthorName(work.author, language))
  const title = transliterate(getLocalizedWorkText(work.title, language))
  const portrait = authorsData[work.author]?.src
  const readerPath = `/${language}/dela/${authorSlug}/${work.slug}/${encodeURIComponent(readingAnchor)}#${encodeURIComponent(anchor)}`

  return (
    <main className="page-shell">
      <Sidebar language={language} />
      <section className="content">
        <Header language={language} />
        <div className={styles.card}>
          {portrait && <img src={withBasePath(portrait)} alt={authorName} />}
          <h2>{authorName}</h2>
          <h3>{title} · § {anchor}</h3>
          <SourceTextContent language={language} originalText={original?.text} sr={sr} stsl={stsl} />
          <p className={styles.sourceLine}>
            <b>{t.source}</b>: {authorName}, {title} ({work.originalTitle}), {anchor}
            {work.source.reference && `; ${work.source.reference}`}
          </p>
          <p><Link href={readerPath}>{t.workUi.openWork}: {title} · § {anchor}</Link></p>
          <Link href={`/${language}/authors/${authorSlug}`} className={styles.authorLink}>{t.gotoAuthor}</Link>
        </div>
      </section>
    </main>
  )
}
