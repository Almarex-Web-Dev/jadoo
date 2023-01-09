// select the menu icon
const menuIcon = document.querySelector('.handburger__menu')

// select the nav wrapper div
const navMenu = document.querySelector('.nav__wrapper')

// add an onclick event to the menu icon
menuIcon.addEventListener('click', () => {
  //   console.log('you clicked me')

  //   check if the nav wrapper contains show menu class
  // if true, remove it, if not add it. the show-menu class is in styles.css
  if (navMenu.classList.contains('show-menu')) {
    navMenu.classList.remove('show-menu')
  } else {
    navMenu.classList.add('show-menu')
  }
})
