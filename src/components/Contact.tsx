import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
	const { t } = useLanguage()
	const [formData, setFormData] = useState({
		name: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const text = `${t('nameLabel')}: ${formData.name}\n${t('messageLabel')}: ${formData.message}`
		window.open('https://wa.me/6289507089856?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer')
		setFormData({ name: '', message: '' })
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<section className='py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative' id='contact'>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none' />
			<div className='w-full max-w-5xl mx-auto relative z-10 min-w-0'>
				<div className='text-center mb-10 sm:mb-16'>
					<h2 className='mb-3 sm:mb-4 font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-slate-100 tracking-wide'>
						{t('contactTitle')}
					</h2>
					<p className='text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-1'>
						{t('contactSubtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					<div className='md:col-span-1 space-y-4 sm:space-y-6 order-2 md:order-1'>
						<Card className='border border-cyan-500/30 dark:border-cyan-400/20 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-colors min-w-0'>
							<CardHeader className='px-4 sm:px-6'>
								<div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/40 dark:border-cyan-400/30 flex items-center justify-center mb-2'>
									<Mail className='w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400' />
								</div>
								<h3 className='font-[family-name:var(--font-heading)] font-semibold text-cyan-700 dark:text-cyan-300 text-sm sm:text-base'>
									{t('email')}
								</h3>
							</CardHeader>
							<CardContent className='px-4 sm:px-6'>
								<a
									href='mailto:mujadidjundifauzi200@gmail.com'
									className='text-slate-600 dark:text-slate-400 text-sm sm:text-base break-all hover:text-cyan-600 dark:hover:text-cyan-400 focus:text-cyan-600 dark:focus:text-cyan-400 focus:outline-none focus:underline underline-offset-2 transition-colors'
								>
									mujadidjundifauzi200@gmail.com
								</a>
							</CardContent>
						</Card>

						<Card className='border border-cyan-500/30 dark:border-cyan-400/20 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-colors min-w-0'>
							<CardHeader className='px-4 sm:px-6'>
								<div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/40 dark:border-cyan-400/30 flex items-center justify-center mb-2'>
									<MapPin className='w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400' />
								</div>
								<h3 className='font-[family-name:var(--font-heading)] font-semibold text-cyan-700 dark:text-cyan-300 text-sm sm:text-base'>
									{t('location')}
								</h3>
							</CardHeader>
							<CardContent className='px-4 sm:px-6'>
								<p className='text-slate-600 dark:text-slate-400 text-sm sm:text-base'>
									{t('locationValue')}
								</p>
							</CardContent>
						</Card>
					</div>

					<Card className='md:col-span-2 border border-cyan-500/30 dark:border-cyan-400/20 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-xl min-w-0 order-1 md:order-2'>
						<CardHeader className='px-4 sm:px-6'>
							<h3 className='font-[family-name:var(--font-heading)] font-semibold text-cyan-700 dark:text-cyan-300 text-sm sm:text-base'>
								{t('sendMessage')}
							</h3>
						</CardHeader>
						<CardContent className='px-4 sm:px-6'>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='name' className='text-slate-700 dark:text-slate-300 text-sm sm:text-base'>
										{t('nameLabel')}
									</Label>
									<Input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder={t('namePlaceholder')}
										required
										className='mt-1 bg-slate-100 dark:bg-slate-800/80 border-cyan-500/40 dark:border-cyan-400/30 text-slate-800 dark:text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500/50 dark:focus-visible:ring-cyan-400/50 focus-visible:border-cyan-500/50 dark:focus-visible:border-cyan-400/50 min-w-0 w-full'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='message' className='text-slate-700 dark:text-slate-300 text-sm sm:text-base'>
										{t('messageLabel')}
									</Label>
									<Textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										placeholder={t('messagePlaceholder')}
										rows={5}
										required
										className='mt-1 bg-slate-100 dark:bg-slate-800/80 border-cyan-500/40 dark:border-cyan-400/30 text-slate-800 dark:text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500/50 dark:focus-visible:ring-cyan-400/50 focus-visible:border-cyan-500/50 dark:focus-visible:border-cyan-400/50 min-w-0 w-full resize-y'
									/>
								</div>
								<Button
									type='submit'
									className='w-full gap-2 bg-cyan-500/25 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 dark:border-cyan-400/40 hover:bg-cyan-500/35 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all min-w-0'
								>
									<Send className='w-4 h-4 shrink-0' />
									{t('sendButton')}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
