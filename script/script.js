;`use strict`

const navigationLinks = [
	{
		name: 'about',
		url: '#about',
	},
	{
		name: 'projects',
		url: '#projects',
	},
	{
		name: 'contact',
		url: '#contact',
	},
	{
		name: 'gitHub',
		url: 'https://github.com/jesseagauthier',
		mobile: 'hidden',
	},
	{
		name: 'codePen',
		url: 'https://codepen.io/jessegauthier1994',
		mobile: 'hidden',
	},
]
const portfolioItems = [
	{
		title: 'The County Cooperage',
		type: 'Shopify',
		image: '/assets/thecountycooperage.png',
		disc: `The creation of a bespoke Shopify theme involved the skillful application of Liquid, Shopify's proprietary templated language, alongside JavaScript, CSS, and Tailwind.css. This approach ensured a highly customized, responsive, and visually appealing online store, tailored to meet specific business needs and enhance the user experience.`,
		link: 'https://www.thecountycooperage.ca',
		tags: ['Custom Theme', 'Shopify', 'Design'],
	},
	{
		title: 'Real Adulting Home Page',
		type: 'Web Development',
		image: './assets/rd-home.png',
		disc: 'Between student loan debts, work demands, feeling unsure if we should invest for retirement while the world is burning, the pressures of balancing identifying red flags with the fact that our eggs have a shelf life, let alone remembering to keep toilet paper stocked in our house—the responsibilities of adult life can often feel overwhelming, stressful, and chaotic. Making you feel like you’re just barely keeping it together as you go along. Did they even teach us how to be an adult in high school? Why are there so many blogs on how to budget? How do taxes even work?',
		link: 'https://realadulting101.ca/',
		tags: ['Php', 'WordPress', 'Custom Theme'],
	},
	{
		title: 'Up Media Home Page',
		type: 'ui',
		image: './assets/upmedia.png',
		disc: 'AWARD WINNING VANCOUVER VIDEO PRODUCTION COMPANY',
		link: 'https://upmedia.video/',
		tags: ['Php', 'WordPress', 'Elementor'],
	},
	{
		title: 'W Flowers Contact Page',
		type: 'ui',
		image: '/assets/w-flowers.png',
		disc: 'W Flowers is a local business in Ottawa that specializes in floral arrangements and bouquets for various occasions. We offer high quality and affordable European design options that are beautiful, elegant, and stylish. ',
		link: 'https://www.figma.com/file/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?type=design&node-id=112%3A26&mode=design&t=z1Xi3jZUZJz3Qoop-1',
		tags: ['Figma', 'Mockup', 'Collaboration'],
	},

	{
		title: 'Garbage Collection Ottawa',
		type: 'ui',
		image: '/assets/garbagecollectionottawa.png',
		disc: 'Our purpose is to design an app that addresses the concerns surrounding variable garbage collection times in Ottawa, reducing the risk of missed pickups and the accumulation of garbage left out for extended periods. By providing certainty in collection schedules, it helps prevent the unhealthy environment caused by uncollected garbage and the potential for it to be blown around during inclement weather, benefiting both people and animals.',
		link: 'https://www.figma.com/file/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?type=design&node-id=101%3A26&mode=design&t=GomxTJao7DabgkWm-1',
		tags: ['ui', 'Figma', 'Mockup'],
	},
	{
		title: 'Werrv',
		type: 'ui',
		image: '/assets/werrv_homepage.png',
		disc: '',
		link: '',
		tags: ['ui', 'Figma', 'Mockup'],
	},
]

const skills = [
	{
		name: 'javaScript',
		image: '/assets/javascript.svg',
	},
	{
		name: 'css',
		image: '/assets/css-3.svg',
	},
	{
		name: 'nodeJs',
		image: '/assets/nodejs.svg',
	},
	{
		name: 'react',
		image: '/assets/react.svg',
	},
	{
		name: 'php',
		image: '/assets/php.svg',
	},
	{
		name: 'wordpress',
		image: '/assets/wordpress.svg',
	},
	{
		name: 'shopify',
		image: '/assets/shopify.svg',
	},
	{
		name: 'Vue',
		image: '/assets/vue.svg',
	},
	{
		name: 'tailwind',
		image: '/assets/tailwindcss.svg',
	},
]

const experiences = {
	id: 'row-3-di',
	title: 'Experience',
	experiences: [
		{
			jobTitle: 'Junior Developer',
			companyName: 'The County Cooperage',
			period: '2023 - 2024',
			responsibilities: [
				'Collaborated with teams to integrate dynamic content using Liquid, HTML, CSS, and JavaScript.',
				'Customized Shopify themes to ensure a cohesive online presence',
				'Implemented responsive design for multi-device compatibility.',
				'Estimated project scope and participated in design discussions and code',
				'Stayed updated with design trends and web technologies.',
				'Assisted with the maintenance and upkeep of front-end applications.',
			],
		},
		{
			jobTitle: 'Front End Developer',
			companyName: 'JesseGauthier.dev',
			period: '2021 - present',
			responsibilities: [
				'Developed highly responsive and scalable web applications for various industries and client environments',
				'Attracted users to websites with professional, user-friendly designs and clean code.',
				'Analyzed technical requirements to determine optimal solutions',
				'Engaged with existing and prospective clients to foster new and repeat business',
				'Devised social media plans to enhance digital marketing',
				'Oversaw daily activities to facilitate smooth business operations',
			],
		},
	],
}

const certifications = [
	{
		title: 'Responsive Web Design',
		organization: 'FreeCodeCamp',
		year: '2022',
		url: '',
	},
	{
		title: 'JavaScript',
		organization: 'HackerRank',
		year: '2023',
		url: 'https://www.hackerrank.com/certificates/4d1d4b06df95',
	},
]

function renderNavigation(navigationLinks) {
	const navigation = document.getElementById('navigation')
	for (const link of navigationLinks) {
		navigation.insertAdjacentHTML(
			`beforeend`,
			`
        <li class="mx-2 p-2 h-fit ${link.mobile} md:block"><a class="sub-heading-text text-lg font-medium hover-orange " href="${link.url}">${link.name}</a></li>`
		)
	}
}

function renderProjects(portfolioItems) {
	const projects = document.getElementById('projects')

	for (const project of portfolioItems) {
		projects.insertAdjacentHTML(
			`beforeend`,
			`
            <div class="bg-white rounded p-1 border ">
			<a href="${project.link}" target="_blank" rel="noopener noreferrer"><img src="${project.image}"></a>
			
			</div>`
		)
	}
}

function renderSkills(skills) {
	const skillsCtn = document.getElementById('skills_slides')

	for (const skill of skills) {
		const skillContent = `<li class="flex justify-center items-center" aria-label="Skill: ${skill.name}"><img class="w-1/2 md:w-1/2" src="${skill.image}" alt="${skill.name}"></li>`
		skillsCtn.insertAdjacentHTML('beforeend', skillContent)
	}

	skillsCtn.classList.add(`md:grid-cols-${skills.length}`)
}

function rendersExperience(experiences) {
	const experienceContainer = document.getElementById(experiences.id)

	const template = []

	for (const experience of experiences.experiences) {
		let responsibilitiesList = ''
		for (const responsibility of experience.responsibilities) {
			responsibilitiesList += `<li class="text">${responsibility}</li>`
		}
		template.push(
			`<div class="p-8 blue-bg gold-bg-hover mb-2 md:mb-0">
			<h4 class="text-medium text-xl sub-heading-text">
				${experience.jobTitle}
			</h4>
			<p class="text-light sub-heading-text">${experience.companyName}</p>
			<p class="text">${experience.period}</p>
			<ul class="p-3 list-disc">
				${responsibilitiesList}
			</ul>
		</div>`
		)
	}

	experienceContainer.insertAdjacentHTML('beforeend', template.join(''))
}
function rendersCertifications(certifications) {
	const certificationsContainer = document.getElementById('row-4')

	const template = certifications
		.map(
			(certification) => `
        <div class="basis-1/2 p-8 blue-bg gold-bg-hover hover:text-black mb-2 md:mb-0">
            ${
							certification.url
								? `<a rel="noopener" href="${certification.url}" target="_blank">`
								: ''
						}
                <h4 class="text-medium text-xl sub-heading-text">${
									certification.title
								}</h4>
                <p class="text-light sub-heading-text">${
									certification.organization
								}</p>
                <p class="text-light sub-heading-text">${certification.year}</p>
            ${certification.url ? '</a>' : ''}
        </div>
    `
		)
		.join('')

	certificationsContainer.innerHTML = `<h3>Certifications</h3><div class="md:flex gap-10 text-center">${template}</div>`
}

function projectsSlider(portfolio) {
	const container = document.getElementById('projectsSlider')
	container.innerHTML = '' // Clear existing content

	portfolio.forEach((item, index) => {
		// Adjust IDs for navigation
		const slideId = `slide${index + 1}`
		const prevSlideId =
			index === 0 ? `slide${portfolio.length}` : `slide${index}`
		const nextSlideId =
			index === portfolio.length - 1 ? `slide1` : `slide${index + 2}`

		// Create slide HTML
		const slideHTML = `
            <div id="${slideId}" class="carousel-item relative w-screen">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#${prevSlideId}" class="btn btn-circle">❮</a>
                    <a href="#${nextSlideId}" class="btn btn-circle">❯</a>
                </div>
                <div class="flex flex-row-reverse align-middle p-5 w-screen justify-start">
					<div class="self-center px-5 text-center">
						<h3 class="text-3xl">${item.title}</h3>
						<p class="w-1/2  mx-auto mt-5">${item.disc}</p>
						<a href="${item.link}" class="project lightblue-hover  mx-auto mt-4 inline-block text-white p-3 sub-heading-text orange-bg">Learn More</a>
					</div>
					<img src="${item.image}" alt="${item.title}" class="w-[500px]">
				</div>
            </div>
        `

		// Append the slide
		container.insertAdjacentHTML('beforeend', slideHTML)
	})
}

renderNavigation(navigationLinks)
renderSkills(skills)
rendersExperience(experiences)
renderProjects(portfolioItems)
rendersCertifications(certifications)
projectsSlider(portfolioItems)
