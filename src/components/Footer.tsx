import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
	return (
		<footer className='bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
					<div className='text-center md:text-left'>
						<p className='flex items-center gap-2 justify-center md:justify-start'>
							Made with <Heart className='w-4 h-4 text-red-500 fill-current' />{' '}
							by Mujadid Jundi Fauzi
						</p>
						<p className='mt-2 text-slate-400'>
							© {new Date().getFullYear()} All rights reserved.
						</p>
					</div>

					<div className='flex gap-6'>
						<a
							href='https://github.com/jund-fauz'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
						>
							<Github className='w-6 h-6' />
						</a>
						<a
							href='https://linkedin.com/in/jundfauz'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
						>
							<Linkedin className='w-6 h-6' />
						</a>
						<a
							href='mailto:mujadidjundifauzi200@gmail.com'
							target='_blank'
							className='hover:text-blue-400 transition-colors'
						>
							<Mail className='w-6 h-6' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
