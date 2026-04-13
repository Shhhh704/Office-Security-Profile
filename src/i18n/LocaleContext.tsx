import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { RISK_ZH_KEYS_SORTED, RISK_ZH_TO_EN } from './riskZhToEn';

export type AppLocale = 'zh' | 'en';

const STORAGE_KEY = 'security-profile-locale';

function lookupEn(zh: string): string {
  return RISK_ZH_TO_EN[zh] ?? RISK_ZH_TO_EN[zh.replace(/风险$/, '')] ?? zh;
}

function translatePhrase(zh: string): string {
  let out = zh;
  for (const k of RISK_ZH_KEYS_SORTED) {
    if (!k || !out.includes(k)) continue;
    const v = RISK_ZH_TO_EN[k];
    out = out.split(k).join(v);
  }
  return out;
}

type LocaleContextValue = {
  locale: AppLocale;
  setLocale: (l: AppLocale) => void;
  /** 整段文案替换：按映射表从长到短替换所有出现的子串 */
  tr: (text: string) => string;
  /** 整句/短语：先整键匹配，再尝试去掉末尾「风险」后匹配 */
  t: (text: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      return s === 'en' ? 'en' : 'zh';
    } catch {
      return 'zh';
    }
  });

  const setLocale = useCallback((l: AppLocale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (text: string) => (locale === 'zh' ? text : lookupEn(text)),
    [locale]
  );

  const tr = useCallback(
    (text: string) => (locale === 'zh' ? text : translatePhrase(text)),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, tr }),
    [locale, setLocale, t, tr]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
