import { redirect } from 'next/navigation';
import { defaultLanguage, supportedLanguages } from '../../../types/data';
import DictionaryPageClient from '../../../components/DictionaryPageClient';
import type { Language } from '../../../types/data';
import fs from 'fs';
import path from 'path';
import { allTags } from '../../../utils/tags';

interface DictionaryPageProps {
  params: {
    lang: string;
  };
}

export function generateStaticParams(): DictionaryPageProps['params'][] {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default function DictionaryPage({ params }: DictionaryPageProps) {
  const lang = params.lang as Language;

  if (!supportedLanguages.includes(lang)) {
    redirect(`/${defaultLanguage}`);
  }

  // Read dictionary content
  const dictionaryPath = path.join(process.cwd(), 'docs', 'RECNIK.md');
  const dictionaryContent = fs.readFileSync(dictionaryPath, 'utf-8');

  return <DictionaryPageClient language={lang} content={dictionaryContent} tags={allTags} />;
}
