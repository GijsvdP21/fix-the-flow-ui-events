let interaction = document.querySelector('a:nth-of-type(11)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

const Frontend = document.querySelector('a:nth-of-type(1)')

if (Frontend) {
  window.addEventListener('mousemove', (event) => {
    const xPercent = event.clientX / window.innerWidth - 0.5
    const yPercent = event.clientY / window.innerHeight - 0.5
    Frontend.style.transform = `rotateX(${yPercent * 60}deg) rotateY(${xPercent * 60}deg)`
  })
}


let disappear = document.getElementById('and')

disappear.addEventListener('click', goaway)

function goaway() {
  disappear.remove();
}