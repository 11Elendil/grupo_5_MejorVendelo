let thumbnail = document.querySelectorAll('.thumb a')
let box = document.querySelectorAll('.imgBox img')

thumbnail.forEach(thumbnail => thumbnail.addEventListener('mouseover', (event) => {
  event.preventDefault()
  
  let element = event.target
  
  box.forEach(box => box.setAttribute('src', element.getAttribute('src')))
}))