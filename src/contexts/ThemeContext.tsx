import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react'

const STORAGE_KEY = 'portfolio-theme'

export type Theme = 'dark' | 'light'

type ThemeContextValue = {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getStoredTheme(): Theme {
	if (typeof document === 'undefined') return 'dark'
	try {
		const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
		return stored === 'light' ? 'light' : 'dark'
	} catch {
		return 'dark'
	}
}

function applyTheme(theme: Theme) {
	const body = document.body
	body.setAttribute('data-theme', theme)
	if (theme === 'dark') {
		body.classList.add('dark')
	} else {
		body.classList.remove('dark')
	}
	try {
		localStorage.setItem(STORAGE_KEY, theme)
	} catch {
		// ignore
	}
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => getStoredTheme())

	useEffect(() => {
		applyTheme(theme)
	}, [theme])

	const setTheme = useCallback((next: Theme) => {
		setThemeState(next)
	}, [])

	const toggleTheme = useCallback(() => {
		setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
	}, [])

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
	return ctx
}
