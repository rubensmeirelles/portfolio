function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('')
	elemento.innerHTML = ''
	textoArray.forEach((letra, i) => {
		setTimeout(() => elemento.innerHTML += letra, 100 * i)
	})
}
const titulo = document.querySelector('h1')
typeWriter(titulo)

function showZoom(){
	document.querySelector('.zoomIn').style.opacity = '1';
}
setTimeout(showZoom, 1000)

/** MOSTRAR SETA */

function showArrow(){
	document.querySelector('.down').style.opacity = '1';
}
setTimeout(showArrow, 5000)