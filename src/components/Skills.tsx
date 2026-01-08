import { Badge } from './ui/badge'

export function Skills() {
	const skillCategories = [
		{
			category: 'Frontend',
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
			category: 'Backend',
			skills: [
				'Node.js',
				'Express',
				'REST APIs',
			],
		},
		{
			category: 'Database',
			skills: [
				'PostgreSQL',
				'MySQL',
				'Redis',
				'Supabase',
			],
		},
		{
			category: 'Tools & DevOps',
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
		<section className='py-20 px-4 bg-slate-50 dark:bg-slate-800'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='mb-4'>Skills & Technologies</h2>
					<p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
						A comprehensive toolkit for building modern web applications
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className='bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm'
						>
							<h3 className='mb-4 text-blue-600 dark:text-blue-400'>
								{category.category}
							</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, skillIndex) => (
									<Badge
										key={skillIndex}
										variant='secondary'
										className='px-3 py-1'
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
