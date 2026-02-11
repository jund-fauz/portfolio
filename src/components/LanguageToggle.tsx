import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
	const { locale, setLocale } = useLanguage()

	return (
		<div
			className="flex rounded-lg border border-cyan-500/40 dark:border-cyan-400/30 bg-white/90 dark:bg-slate-800/80 p-0.5 text-sm"
			role="group"
			aria-label="Switch language"
		>
			<button
				type="button"
				onClick={() => setLocale('en')}
				className={cn(
					'rounded-md px-2.5 py-1 font-medium transition-colors hover:cursor-pointer',
					locale === 'en'
						? 'bg-cyan-500/25 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300'
						: 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400'
				)}
				aria-pressed={locale === 'en'}
				aria-label="English"
			>
				EN
			</button>
			<button
				type="button"
				onClick={() => setLocale('id')}
				className={cn(
					'rounded-md px-2.5 py-1 font-medium transition-colors hover:cursor-pointer',
					locale === 'id'
						? 'bg-cyan-500/25 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300'
						: 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400'
				)}
				aria-pressed={locale === 'id'}
				aria-label="Indonesia"
			>
				ID
			</button>
		</div>
	)
}
