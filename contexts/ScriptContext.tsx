'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLanguage, supportedLanguages, type Language } from '../types/data';
import type { Script } from '../utils/transliterate';

interface ScriptContextType {
  script: Script | null;
  setScript: (script: Script) => void;
}

const ScriptContext = createContext<ScriptContextType | undefined>(undefined);

export function ScriptProvider({ children }: { children: ReactNode }) {
  const [script, setScript] = useState<Script | null>(null);
  const pathname = usePathname();
  const segment = pathname.split('/').filter(Boolean)[0] as Language;
  const language = supportedLanguages.includes(segment) ? segment : defaultLanguage;
  const effectiveScript = script ?? (language === 'stsl' ? 'cyr' : 'lat');

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === 'stsl' ? 'cu' : 'sr';
    root.dataset.language = language;
    root.dataset.script = effectiveScript;
  }, [effectiveScript, language]);

  return (
    <ScriptContext.Provider value={{ script, setScript }}>
      {children}
    </ScriptContext.Provider>
  );
}

export function useScript() {
  const context = useContext(ScriptContext);
  if (!context) {
    throw new Error('useScript must be used within ScriptProvider');
  }
  return context;
}
