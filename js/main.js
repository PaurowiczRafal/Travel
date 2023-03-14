const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItemsAnimation()
    deleteAnimation()
}

const handleNavItemsAnimation = () => {
    let counter = 0   
    
	allNavItems.forEach(item => {
        let delayTime = 0.05 * counter
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = delayTime + 's';
        counter++;
	})
}
const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}

navBtn.addEventListener('click', handleNav)
