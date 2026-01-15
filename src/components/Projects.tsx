import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './ImageWithFallback'

export function Projects() {
	const projects = [
		{
			title: 'Weekly Meal Planner',
			description:
				'A meal planning web application that helps users organize their weekly meals and generate shopping lists, powered by AI.',
			image: '/wmp.png',
			tech: ['Next.js', 'Node.js', 'Radix', 'Gemini AI'],
			github: 'https://github.com/jund-fauz/weekly-meal-planner',
			live: 'https://weekly-meal-planner-jf.vercel.app',
		},
		{
			title: 'NomorSurat',
			description:
				'A document numbering application that streamlines the creation and management of official letters for organizations and company.',
			image: '/ns.png',
			tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
			github: 'https://github.com/jund-fauz/nomor-surat',
			live: 'https://nomor-surat.vercel.app',
		},
		// {
		// 	title: 'Social Media Dashboard',
		// 	description:
		// 		'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
		// 	image:
		// 		'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3NDgyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		// 	tech: ['React', 'Python', 'MongoDB', 'Chart.js'],
		// 	github: '#',
		// 	live: '#',
		// },
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
		<section className='py-20 px-4 bg-white dark:bg-slate-900' id='projects'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='mb-4'>Featured Projects</h2>
					<p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
						A selection of my recent work showcasing fullstack development
						capabilities
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{projects.map((project, index) => (
						<Card
							key={index}
							className='overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow'
						>
							<div className='h-80 overflow-hidden'>
								<ImageWithFallback
									src={project.image}
									alt={project.title}
									className='w-full h-full object-contain hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<CardHeader>
								<h3>{project.title}</h3>
							</CardHeader>
							<CardContent>
								<p className='text-slate-600 dark:text-slate-400 mb-4'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{project.tech.map((tech, techIndex) => (
										<Badge key={techIndex} variant='outline'>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className='gap-2'>
								<Button variant='outline' size='sm' className='gap-2' asChild>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Github className='w-4 h-4' />
										Code
									</a>
								</Button>
								<Button size='sm' className='gap-2' asChild>
									<a
										href={project.live}
										target='_blank'
										rel='noopener noreferrer'
									>
										<ExternalLink className='w-4 h-4' />
										Live Demo
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
