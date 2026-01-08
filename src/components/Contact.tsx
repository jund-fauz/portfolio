import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'

export function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		window.open('https://wa.me/6289507089856?text=' + encodeURIComponent(`Name: ${formData.name}\nMessage: ${formData.message}`), '_blank', 'noopener,noreferrer')
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
		<section className='py-20 px-4 bg-slate-50 dark:bg-slate-800' id='contact'>
			<div className='max-w-5xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='mb-4'>Get In Touch</h2>
					<p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
						Have a project in mind or want to collaborate? I'd love to hear from
						you!
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					<div className='md:col-span-1 space-y-6'>
						<Card className='border-slate-200 dark:border-slate-700'>
							<CardHeader>
								<div className='w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2'>
									<Mail className='w-6 h-6 text-blue-600 dark:text-blue-400' />
								</div>
								<h3>Email</h3>
							</CardHeader>
							<CardContent>
								<p className='text-slate-600 dark:text-slate-400'>
									mujadidjundifauzi200@gmail.com
								</p>
							</CardContent>
						</Card>

						<Card className='border-slate-200 dark:border-slate-700'>
							<CardHeader>
								<div className='w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2'>
									<MapPin className='w-6 h-6 text-blue-600 dark:text-blue-400' />
								</div>
								<h3>Location</h3>
							</CardHeader>
							<CardContent>
								<p className='text-slate-600 dark:text-slate-400'>
									Kendal, Indonesia
								</p>
							</CardContent>
						</Card>
					</div>

					<Card className='md:col-span-2 border-slate-200 dark:border-slate-700'>
						<CardHeader>
							<h3>Send a Message</h3>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='name'>Name</Label>
									<Input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder='Your name'
										required
										className='mt-1'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='message'>Message</Label>
									<Textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										placeholder='Tell me about your project...'
										rows={5}
										required
										className='mt-1'
									/>
								</div>
								<Button type='submit' className='w-full gap-2'>
									<Send className='w-4 h-4' />
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
