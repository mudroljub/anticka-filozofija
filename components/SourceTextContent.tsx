'use client'

import classNames from 'classnames'
import { greekToLatin, isGreek } from '../utils/greekToLatin'
import { useTransliterate } from '../utils/useTransliterate'
import type { Language } from '../types/data'
import styles from './QuotePageClient.module.scss'

interface SourceTextContentProps {
  language: Language
  originalText?: string
  sr: string
  stsl: string
}

export default function SourceTextContent({ language, originalText, sr, stsl }: SourceTextContentProps) {
  const transliterateStsl = useTransliterate('stsl')
  const transliterateSr = useTransliterate('sr')
  return (
    <>
      {originalText && (
        <blockquote className={styles.originalQuote} lang={isGreek(originalText) ? 'grc' : undefined}>
          <div>{originalText}</div>
          {isGreek(originalText) && (
            <div lang="grc-Latn" className={styles.greekLatin}>{greekToLatin(originalText)}</div>
          )}
        </blockquote>
      )}

      {stsl && (
        <blockquote lang="cu" className={classNames(styles.stslQuote, {
          [styles.selectedQuote]: language === 'stsl'
        })}>
          {transliterateStsl(stsl)}
        </blockquote>
      )}

      {sr && (
        <blockquote lang="sr" className={classNames(styles.srQuote, {
          [styles.selectedQuote]: language === 'sr'
        })}>
          {transliterateSr(sr)}
        </blockquote>
      )}

    </>
  )
}
