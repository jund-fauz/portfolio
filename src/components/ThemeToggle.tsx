import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from './ui/button'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			className="rounded-full border border-cyan-500/40 dark:border-cyan-400/30 bg-white/90 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/15 dark:hover:bg-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
		>
			{theme === 'dark' ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</Button>
	)
}
