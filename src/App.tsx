import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
	return (
		<div className='min-h-screen font-[family-name:var(--font-body)]'>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}