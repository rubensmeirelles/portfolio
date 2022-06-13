function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('')
	elemento.innerHTML = ''
	textoArray.forEach((letra, i) => {
		setTimeout(() => elemento.innerHTML += letra, 100 * i)
	})
}
const titulo = document.querySelector('h1')
typeWriter(titulo)


function showText(){
	let subtitulo = document.querySelector('h2')
		subtitulo.style.opacity=1
}
setTimeout(showText, 2000)

function showZoom(){
  let zoom = documwent.querySelector('.zoomIn')
}
setTimeout(showText, 3000)