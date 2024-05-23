addEventListener('resize', update);

function update() {
	const horizontal = document.querySelector('#horizontal');
	const vertical = document.querySelector('#vertical');
	horizontal.querySelector('p').innerText = `${horizontal.offsetWidth} px`;
	vertical.querySelector('p').innerText = `${vertical.offsetHeight} px`;
}

update();