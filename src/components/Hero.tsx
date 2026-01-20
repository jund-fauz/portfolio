import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
	return (
		<section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 py-8'>
			<div className='max-w-4xl mx-auto text-center flex flex-col items-center'>
				<div className='mb-8 inline-block'>
					<div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
						<img src='/foto_profil.png' alt='Foto Profil' />
					</div>
				</div>

				<h1 className='mb-1'>Mujadid Jundi Fauzi</h1>

				<h1 className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
					Fullstack Developer
				</h1>

				<p className='mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
					I'm a fullstack developer with a passion for building elegant
					solutions to complex problems. With expertise in both frontend and
					backend technologies, I create end-to-end applications that are
					performant, scalable, and user-friendly.
				</p>

				<div className='flex gap-4 justify-center mb-8'>
					<Button size='lg' className='gap-2' asChild>
						<a href='#projects'>
							View My Work <ArrowRight className='w-4 h-4' />
						</a>
					</Button>
					<Button size='lg' variant='outline' asChild>
						<a href='#contact'>Contact Me</a>
					</Button>
				</div>

				<div className='flex gap-4 justify-center'>
					<a
						href='https://github.com/jund-fauz'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
					>
						<Github className='w-6 h-6' />
					</a>
					<a
						href='https://linkedin.com/in/jundfauz'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
					>
						<Linkedin className='w-6 h-6' />
					</a>
					<a
						href='mailto:mujadidjundifauzi200@gmail.com'
						className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
					>
						<Mail className='w-6 h-6' />
					</a>
					<a
						href='https://wa.me/6289507089856'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
					>
						<Phone className='w-6 h-6' />
					</a>
				</div>
			</div>
		</section>
	)
}
