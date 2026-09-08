'use client';

import { defaultLanguage } from '../types/data';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { getTranslation } from '../utils/translations';

export default function NotFound() {
  const language = defaultLanguage;
  const t = getTranslation(language);

  return (
    <main className="page-shell">
      <Sidebar language={language} />
      <section className="content">
        <Header language={language} />
        <h1>{t.pageNotFound}</h1>
        <p>{t.pageNotFoundMessage}</p>
        <Link href={`/${language}`}>{t.goHome}</Link>
      </section>
    </main>
  );
}
