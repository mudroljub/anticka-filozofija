import { notFound, redirect } from 'next/navigation'
import WorkSectionSourceClient from '../../../../../../../components/WorkSectionSourceClient'
import { defaultLanguage, supportedLanguages, type Language } from '../../../../../../../types/data'
import { findWorkReadingPage, readWorkSection } from '../../../../../../../utils/workFiles'
import { findWorkOriginal } from '../../../../../../../utils/workOriginals'
import { findWork, workAuthorSlug, worksData } from '../../../../../../../utils/works'

interface WorkSectionSourcePageProps {
  params: { lang: string; author: string; work: string; section: string }
}

export function generateStaticParams(): WorkSectionSourcePageProps['params'][] {
  if (process.env.STATIC_EXPORT !== 'true') return []
  return supportedLanguages.flatMap(lang => worksData.flatMap(work =>
    work.sections.map(section => ({ lang, author: workAuthorSlug(work), work: work.slug, section: section.anchor })),
  ))
}

export default function WorkSectionSourcePage({ params }: WorkSectionSourcePageProps) {
  const language = params.lang as Language
  if (!supportedLanguages.includes(language)) redirect(`/${defaultLanguage}`)
  const work = findWork(params.author, params.work)
  if (!work) notFound()
  const sectionIndex = work.sections.findIndex(section => section.anchor === params.section)
  if (sectionIndex < 0) notFound()
  const section = work.sections[sectionIndex]
  const page = findWorkReadingPage(work, sectionIndex)

  return <WorkSectionSourceClient
    language={language}
    work={work}
    anchor={section.anchor}
    sr={readWorkSection(work, section, 'sr').trim()}
    stsl={readWorkSection(work, section, 'stsl').trim()}
    original={findWorkOriginal(work.id, section.anchor)}
    authorSlug={params.author}
    readingAnchor={work.sections[page.startIndex].anchor}
  />
}
