fetch('../component/Header.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => (document.getElementById('mainContainer').innerHTML = data));

fetch('../component/Footer.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => (document.querySelector('footer').innerHTML = data));

fetch('../container/home.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => (document.getElementById('home').innerHTML = data));

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
