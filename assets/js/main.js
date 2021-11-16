const $arrowLeft = document.querySelector('#arrow-left')
const $arrowRight = document.querySelector('#arrow-right')
const $container = document.querySelector('#projects-list')


$arrowLeft.addEventListener('mousedown', () => {
  const size = $container.scrollLeft
  const offset = size - 400
  $container.scrollTo({
    left: offset,
    behavior: 'smooth'
  })
})

$arrowRight.addEventListener('click', () => {
  const size = $container.scrollLeft
  const offset = size + 400
  $container.scrollTo({
    left: offset,
    behavior: 'smooth'
  })

})