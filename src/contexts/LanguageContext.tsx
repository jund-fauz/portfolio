import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react'
import {
	translations,
	type Locale,
	type TranslationKey,
} from '@/locales/translations'

const STORAGE_KEY = 'portfolio-lang'

type LanguageContextValue = {
	locale: Locale
	setLocale: (locale: Locale) => void
	t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getStoredLocale(): Locale {
	if (typeof document === 'undefined') return 'en'
	try {
		const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
		return stored === 'id' ? 'id' : 'en'
	} catch {
		return 'en'
	}
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>(() => getStoredLocale())

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, locale)
		} catch {
			// ignore
		}
	}, [locale])

	const setLocale = useCallback((next: Locale) => {
		setLocaleState(next)
	}, [])

	const t = useCallback(
		(key: TranslationKey): string => {
			return translations[locale][key]
		},
		[locale]
	)

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const ctx = useContext(LanguageContext)
	if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
	return ctx
}
