import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
	const { t } = useLanguage()
	return (
		<section className='min-h-[100dvh] min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 relative overflow-hidden'>
			<div className='absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2'>
				<LanguageToggle />
				<ThemeToggle />
			</div>
			<div className='absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/10 dark:from-cyan-500/5 dark:via-transparent dark:to-purple-500/10 pointer-events-none' />
			<div className='w-full max-w-4xl mx-auto text-center flex flex-col items-center relative z-10'>
				<div className='mb-6 sm:mb-8 inline-block animate-[float_4s_ease-in-out_infinite]'>
					<div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full p-1 bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.5),0_0_60px_rgba(168,85,247,0.2)] ring-2 ring-cyan-400/50'>
						<div className='w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-900'>
							<img src='/foto_profil.png' alt='Foto Profil' className='w-full h-full object-cover' />
						</div>
					</div>
				</div>

				<h1 className='mb-1 font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide text-slate-800 dark:text-slate-100 break-words'>
					Mujadid Jundi Fauzi
				</h1>

				<h1 className='mb-3 sm:mb-4 font-[family-name:var(--font-heading)] font-semibold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-purple-600 dark:from-cyan-400 dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent'>
					{t('heroTitle')}
				</h1>

				<p className='mb-6 sm:mb-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-0 sm:px-2'>
					{t('heroDesc')}
				</p>

				<div className='flex gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 flex-wrap'>
					<Button
						size='lg'
						className='gap-2 rounded-lg border-cyan-500/50 bg-cyan-500/25 text-cyan-700 dark:border-cyan-400/50 dark:bg-cyan-500/20 dark:text-cyan-300 hover:bg-cyan-500/35 dark:hover:bg-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-cyan-500/70 dark:hover:border-cyan-400/70 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto min-w-0'
						asChild
					>
						<a href='#projects' className='flex items-center justify-center'>
							{t('heroViewWork')} <ArrowRight className='w-4 h-4 shrink-0' />
						</a>
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='rounded-lg border-purple-500/50 text-purple-700 dark:border-purple-400/40 dark:text-purple-300 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-500/60 dark:hover:border-purple-400/60 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto min-w-0'
						asChild
					>
						<a href='#contact'>{t('heroContactMe')}</a>
					</Button>
				</div>

				<div className='flex gap-4 sm:gap-5 justify-center flex-wrap'>
					<a
						href='https://github.com/jund-fauz'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
					>
						<Github className='w-6 h-6' />
					</a>
					<a
						href='https://linkedin.com/in/jundfauz'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
					>
						<Linkedin className='w-6 h-6' />
					</a>
					<a
						href='mailto:mujadidjundifauzi200@gmail.com'
						className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
					>
						<Mail className='w-6 h-6' />
					</a>
					<a
						href='https://wa.me/6289507089856'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
					>
						<Phone className='w-6 h-6' />
					</a>
				</div>
			</div>
		</section>
	)
}
