import { Badge } from './ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'
import type { TranslationKey } from '@/locales/translations'

export function Skills() {
	const { t } = useLanguage()
	const skillCategories: { categoryKey: TranslationKey; skills: string[] }[] = [
		{
			categoryKey: 'skillsFrontend',
			skills: [
				'React',
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'JavaScript',
				'HTML/CSS',
				'Redux',
				'PHP',
				'Laravel'
			],
		},
		{
			categoryKey: 'skillsBackend',
			skills: [
				'Node.js',
				'Express',
				'REST APIs',
			],
		},
		{
			categoryKey: 'skillsDatabase',
			skills: [
				'PostgreSQL',
				'MySQL',
				'Redis',
				'Supabase',
			],
		},
		{
			categoryKey: 'skillsTools',
			skills: [
				'Git',
				'Docker',
				'CI/CD',
				'Vercel',
				'Jest',
				'Webpack',
				'Linux',
			],
		},
	]

	return (
		<section className='py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative'>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none' />
			<div className='w-full max-w-6xl mx-auto relative z-10 min-w-0'>
				<div className='text-center mb-10 sm:mb-16'>
					<h2 className='mb-3 sm:mb-4 font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-slate-100 tracking-wide'>
						{t('skillsTitle')}
					</h2>
					<p className='text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-1'>
						{t('skillsSubtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className='rounded-xl p-4 sm:p-6 border border-cyan-500/30 dark:border-cyan-400/20 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 min-w-0'
						>
							<h3 className='mb-3 sm:mb-4 font-[family-name:var(--font-heading)] font-semibold text-cyan-600 dark:text-cyan-400 text-sm sm:text-base'>
								{t(category.categoryKey)}
							</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, skillIndex) => (
									<Badge
										key={skillIndex}
										variant='secondary'
										className='px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-cyan-500/30 dark:border-cyan-400/20 bg-cyan-500/15 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-200 hover:bg-cyan-500/25 dark:hover:bg-cyan-500/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-300 text-xs'
									>
										{skill}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
