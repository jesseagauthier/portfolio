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
		disc: '',
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

renderNavigation(navigationLinks)
renderProjects(portfolioItems)
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
