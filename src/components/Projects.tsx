import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './ImageWithFallback'
import { useLanguage } from '@/contexts/LanguageContext'
import type { TranslationKey } from '@/locales/translations'

type ProjectEntry = {
	titleKey: TranslationKey
	descKey: TranslationKey
	image: string
	tech: string[]
	github: string
	live: string
}

export function Projects() {
	const { t } = useLanguage()
	const projects: ProjectEntry[] = [
		{
			titleKey: 'projectWmpTitle',
			descKey: 'projectWmpDesc',
			image: '/wmp.png',
			tech: ['Next.js', 'Node.js', 'Radix', 'Gemini AI'],
			github: 'https://github.com/jund-fauz/weekly-meal-planner',
			live: 'https://weekly-meal-planner-jf.vercel.app',
		},
		{
			titleKey: 'projectNsTitle',
			descKey: 'projectNsDesc',
			image: '/ns.png',
			tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
			github: 'https://github.com/jund-fauz/nomor-surat',
			live: 'https://nomor-surat.vercel.app',
		},
		{
			titleKey: 'projectInvifyTitle',
			descKey: 'projectInvifyDesc',
			image: '/invify.png',
			tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Shadcn'],
			github: 'https://github.com/jund-fauz/invify',
			live: 'https://invify-demo.vercel.app',
		},
		// {
		// 	title: 'AI Content Generator',
		// 	description:
		// 		'AI-powered content creation tool leveraging machine learning models for automated text generation.',
		// 	image:
		// 		'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NTU4NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		// 	tech: ['Vue.js', 'FastAPI', 'Redis', 'OpenAI'],
		// 	github: '#',
		// 	live: '#',
		// },
	]

	return (
		<section className='py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative' id='projects'>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none' />
			<div className='w-full max-w-6xl mx-auto relative z-10 min-w-0'>
				<div className='text-center mb-10 sm:mb-16'>
					<h2 className='mb-3 sm:mb-4 font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-slate-100 tracking-wide'>
						{t('projectsTitle')}
					</h2>
					<p className='text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-1'>
						{t('projectsSubtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
					{projects.map((project, index) => (
						<Card
							key={index}
							className='overflow-hidden border border-cyan-500/30 dark:border-cyan-400/20 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.15),0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group min-w-0 flex flex-col'
						>
							<div className='h-48 sm:h-64 md:h-80 overflow-hidden relative shrink-0'>
								<div className='absolute inset-0 bg-gradient-to-t from-white/60 dark:from-slate-900/90 via-transparent to-transparent z-10 pointer-events-none' />
								<ImageWithFallback
									src={project.image}
									alt={t(project.titleKey)}
									className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<CardHeader className='px-4 sm:px-6'>
								<h3 className='font-[family-name:var(--font-heading)] font-semibold text-cyan-700 dark:text-cyan-300 text-base sm:text-lg'>
									{t(project.titleKey)}
								</h3>
							</CardHeader>
							<CardContent className='px-4 sm:px-6 flex-1 min-w-0'>
								<p className='text-slate-600 dark:text-slate-400 mb-4 text-sm sm:text-base'>
									{t(project.descKey)}
								</p>
								<div className='flex flex-wrap gap-1.5 sm:gap-2'>
									{project.tech.map((tech, techIndex) => (
										<Badge
											key={techIndex}
											variant='outline'
											className='border-purple-500/40 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 bg-purple-500/15 dark:bg-purple-500/10 text-xs'
										>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className='gap-2 flex-wrap px-4 sm:px-6'>
								<Button
									variant='outline'
									size='sm'
									className='gap-2 border-cyan-500/50 dark:border-cyan-400/40 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all'
									asChild
								>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Github className='w-4 h-4' />
										{t('code')}
									</a>
								</Button>
								<Button
									size='sm'
									className='gap-2 bg-cyan-500/25 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 dark:border-cyan-400/40 hover:bg-cyan-500/35 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all'
									asChild
								>
									<a
										href={project.live}
										target='_blank'
										rel='noopener noreferrer'
									>
										<ExternalLink className='w-4 h-4' />
										{t('liveDemo')}
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
