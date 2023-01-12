let interaction = document.querySelector('a:nth-of-type(11)')
let video = document.querySelector('video')
let code = document.querySelector('a:nth-of-type(19)')
let tekst = document.querySelector('.tekst')
let flow = document.querySelector('a:nth-of-type(7)')

flow.addEventListener('click', videoHandler)





interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

const frontend = document.querySelector('a:nth-of-type(1)')

if (frontend) {
  window.addEventListener('mousemove', (event) => {
    const xPercent = event.clientX / window.innerWidth - 0.5
    const yPercent = event.clientY / window.innerHeight - 0.5
    frontend.style.transform = `rotateX(${yPercent * 60}deg) rotateY(${xPercent * -60}deg)`
  })
}


let disappear = document.getElementById('and')

disappear.addEventListener('click', goaway)

function goaway() {
  disappear.remove();
}

let Turnover = document.querySelector('a:nth-of-type(3)')

Turnover.addEventListener('click', Turner)
Turnover.addEventListener('animationend', Turner)

function Turner() {
  Turnover.classList.toggle('turn')
}



let sizechange = document.querySelector('a:nth-of-type(4)')

sizechange.addEventListener('click', sizer)
sizechange.addEventListener('animationend', sizer)

function sizer() {
  sizechange.classList.toggle('size')
}


let Rotation = document.querySelector('a:nth-of-type(5)')

Rotation.addEventListener('click', rotater)
Rotation.addEventListener('animationend', rotater)

function rotater() {
  Rotation.classList.toggle('rotateXY')
}

function changeColor(color) {
  document.body.style.background = color;
}

function whitekleur() {
  changeColor('white');
}

function magentakleur() {
  changeColor('magenta');
}

function hotpinkkleur() {
  changeColor('hotpink');
}

function redkleur() {
  changeColor('red');
}

function orangekleur() {
  changeColor('orange');
}

function yellowkleur() {
  changeColor('yellow');
}

function limekleur() {
  changeColor('lime');
}

function greenkleur() {
  changeColor('green');
}

function turquoisekleur() {
  changeColor('turquoise');
}

function cyankleur() {
  changeColor('cyan');
}

function bluekleur() {
  changeColor('blue');
}

function darkbluekleur() {
  changeColor('darkblue');
}

function purplekleur() {
  changeColor('purple');
}

function blackkleur() {
  changeColor('black');
}


let downer = document.querySelector('a:nth-of-type(6)')

downer.addEventListener('click', GoDown)
downer.addEventListener('animationend', GoDown)

function GoDown() {
  downer.classList.toggle('down')
}

function videoHandler() {
  video.classList.toggle('play')
  video.paused ? video.play() : video.pause()
  tekst.classList.toggle('none-display')
}