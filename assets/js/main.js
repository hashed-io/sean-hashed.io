const $arrowLeft = document.querySelector('#arrow-left')
const $arrowRight = document.querySelector('#arrow-right')
const $container = document.querySelector('#projects-list')
const $body = document.querySelector('body')

const $checkbox = document.querySelector('.navigation-checkbox')
const $navigationList = document.querySelector('.navigation-list')

$checkbox.addEventListener('change', () => {
  $body.classList.toggle('overflow-hide')
})

$navigationList.addEventListener('click', (e) => {
  const { target } = e
  const isLink = target.classList.contains('navigation-link')
  if (isLink) {
    const activeLink = document.querySelector('.navigation-link-active')
    if (activeLink) activeLink.classList.toggle('navigation-link-active') 
    target.classList.toggle('navigation-link-active')
    $checkbox.checked = false
    $body.classList.toggle('overflow-hide')
  }
})


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