fetch('./component/Header.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => (document.querySelector('header').innerHTML = data));

function toggleMenu() {
	let toggleLinks = document.querySelector('.gpt3_navbar-menu_container');
	let toggleIcons = document.querySelector('.material-icons');

	toggleLinks.style.display == 'block' ? (toggleLinks.style.display = 'none') : (toggleLinks.style.display = 'block');

	if (toggleLinks.style.display == 'none') {
		toggleIcons.innerHTML = `&#xe8ee;`;
	} else {
		toggleIcons.innerHTML = `&#xe14c;`;
	}

	console.log(toggleIcons);
}
