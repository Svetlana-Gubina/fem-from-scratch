const menuButton = document.querySelector('.primary-navigation__button');

menuButton.addEventListener('click', () => {
  // check if the navigation is opened
  const isNavOpened = menuButton.getAttribute('aria-expanded');

  if (isNavOpened === 'false') {
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
