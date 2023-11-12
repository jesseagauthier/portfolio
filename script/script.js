`use strict`
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
		url: '#',
		mobile: 'hidden'
	},
	{
		name: 'codePen',
		url: '#',
		mobile: 'hidden'
	},
]
renderNavigation (navigationLinks)
function renderNavigation (navigationLinks) {
    const navigation = document.getElementById('navigation')
    for (const link of navigationLinks) {
        console.log(link)
        navigation.insertAdjacentHTML(`beforeend`, `
        <li class="mx-2 p-2 h-fit ${link.mobile} md:block"><a class="sub-heading-text text-lg font-medium hover-orange " href="${link.url}">${link.name}</a></li>`)
    }
}
