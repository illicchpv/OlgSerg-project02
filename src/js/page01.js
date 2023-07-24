const burgerMenuDrop = document.querySelector('.burgerMenu__drop')
function burgerMenuToggle(e){
  e.preventDefault()
  console.log('burgerMenuToggle', e)

  burgerMenuDrop.classList.contains('visible')? burgerMenuDrop.classList.remove('visible') : burgerMenuDrop.classList.add('visible')
}