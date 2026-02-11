export type Locale = 'en' | 'id'

export const translations = {
	en: {
		// Hero
		heroTitle: 'Fullstack Developer',
		heroDesc:
			"I'm a fullstack developer with a passion for building elegant solutions to complex problems. With expertise in both frontend and backend technologies, I create end-to-end applications that are performant, scalable, and user-friendly.",
		heroViewWork: 'View My Work',
		heroContactMe: 'Contact Me',

		// Skills
		skillsTitle: 'Skills & Technologies',
		skillsSubtitle: 'A comprehensive toolkit for building modern web applications',
		skillsFrontend: 'Frontend',
		skillsBackend: 'Backend',
		skillsDatabase: 'Database',
		skillsTools: 'Tools & DevOps',

		// Projects
		projectsTitle: 'Featured Projects',
		projectsSubtitle:
			'A selection of my recent work showcasing fullstack development capabilities',
		projectWmpTitle: 'Weekly Meal Planner',
		projectWmpDesc:
			'A meal planning web application that helps users organize their weekly meals and generate shopping lists, powered by AI.',
		projectNsTitle: 'NomorSurat',
		projectNsDesc:
			'A document numbering application that streamlines the creation and management of official letters for organizations and company.',
		projectInvifyTitle: 'Invify',
		projectInvifyDesc:
			'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
		code: 'Code',
		liveDemo: 'Live Demo',

		// Contact
		contactTitle: 'Get In Touch',
		contactSubtitle:
			"Have a project in mind or want to collaborate? I'd love to hear from you!",
		email: 'Email',
		location: 'Location',
		locationValue: 'Kendal, Indonesia',
		sendMessage: 'Send a Message',
		nameLabel: 'Name',
		messageLabel: 'Message',
		namePlaceholder: 'Your name',
		messagePlaceholder: 'Tell me about your project...',
		sendButton: 'Send Message',

		// Footer
		footerMadeWith: 'Made with',
		footerBy: 'by Mujadid Jundi Fauzi',
		footerRights: 'All rights reserved.',
	} as const,
	id: {
		// Hero
		heroTitle: 'Fullstack Developer',
		heroDesc:
			'Saya fullstack developer yang suka membangun solusi elegan untuk masalah kompleks. Dengan keahlian di frontend dan backend, saya membuat aplikasi ujung-ke-ujung yang performa tinggi, skalabel, dan ramah pengguna.',
		heroViewWork: 'Lihat Karya Saya',
		heroContactMe: 'Hubungi Saya',

		// Skills
		skillsTitle: 'Keahlian & Teknologi',
		skillsSubtitle: 'Perangkat lengkap untuk membangun aplikasi web modern',
		skillsFrontend: 'Frontend',
		skillsBackend: 'Backend',
		skillsDatabase: 'Database',
		skillsTools: 'Tools & DevOps',

		// Projects
		projectsTitle: 'Proyek Unggulan',
		projectsSubtitle: 'Beberapa karya terbaru yang menampilkan kemampuan fullstack development',
		projectWmpTitle: 'Weekly Meal Planner',
		projectWmpDesc:
			'Aplikasi web perencana makan yang membantu pengguna mengatur menu mingguan dan membuat daftar belanja, didukung AI.',
		projectNsTitle: 'NomorSurat',
		projectNsDesc:
			'Aplikasi penomoran dokumen yang mempermudah pembuatan dan pengelolaan surat resmi untuk organisasi dan perusahaan.',
		projectInvifyTitle: 'Invify',
		projectInvifyDesc:
			'Dashboard analitik untuk melacak metrik media sosial di berbagai platform dengan visualisasi data.',
		code: 'Kode',
		liveDemo: 'Demo',

		// Contact
		contactTitle: 'Hubungi Saya',
		contactSubtitle:
			'Ada proyek atau ingin berkolaborasi? Saya senang mendengar dari Anda!',
		email: 'Email',
		location: 'Lokasi',
		locationValue: 'Kendal, Indonesia',
		sendMessage: 'Kirim Pesan',
		nameLabel: 'Nama',
		messageLabel: 'Pesan',
		namePlaceholder: 'Nama Anda',
		messagePlaceholder: 'Ceritakan tentang proyek Anda...',
		sendButton: 'Kirim Pesan',

		// Footer
		footerMadeWith: 'Dibuat dengan',
		footerBy: 'oleh Mujadid Jundi Fauzi',
		footerRights: 'Hak cipta dilindungi.',
	} as const,
} as const

export type TranslationKey = keyof (typeof translations)['en']
