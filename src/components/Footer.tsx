import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
	const { t } = useLanguage()
	return (
		<footer className='relative border-t border-cyan-500/30 dark:border-cyan-400/20 bg-slate-100/90 dark:bg-slate-950/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 py-8 sm:py-10 md:py-12 px-3 sm:px-4'>
			<div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 dark:via-cyan-400/50 to-transparent' />
			<div className='w-full max-w-6xl mx-auto min-w-0'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6'>
					<div className='text-center md:text-left min-w-0'>
						<p className='flex flex-wrap items-center justify-center md:justify-start gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base'>
							{t('footerMadeWith')} <Heart className='w-4 h-4 text-cyan-500 dark:text-cyan-400 fill-current shrink-0' />{' '}
							{t('footerBy')}
						</p>
						<p className='mt-2 text-slate-500 dark:text-slate-500 text-xs sm:text-sm'>
							© {new Date().getFullYear()} {t('footerRights')}
						</p>
					</div>

					<div className='flex gap-5 sm:gap-6 shrink-0'>
						<a
							href='https://github.com/jund-fauz'
							target='_blank'
							rel='noopener noreferrer'
							className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
						>
							<Github className='w-6 h-6' />
						</a>
						<a
							href='https://linkedin.com/in/jundfauz'
							target='_blank'
							rel='noopener noreferrer'
							className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
						>
							<Linkedin className='w-6 h-6' />
						</a>
						<a
							href='mailto:mujadidjundifauzi200@gmail.com'
							target='_blank'
							className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
						>
							<Mail className='w-6 h-6' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
