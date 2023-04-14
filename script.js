let = document.getElementById('dubaitext')
let burjkhalifa = document.getElementById('burjkhalifa')
let stars = document.getElementById('stars')

window.addEventListener('scroll', () => {
  let value = window.scrollY

  dubaitext.style.left = value * -2 + 'px'
  burjkhalifa.style.top = value * 1 + 'px'
  stars.style.top = value * 1 + 'px'
})
