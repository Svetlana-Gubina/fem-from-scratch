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

// Dark / light mode
const modeButton = document.querySelector('#mode');

function changeMode() {
  var element = document.body;
  element.classList.toggle('light-mode');

  if (element.classList.contains('light-mode')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
}

modeButton.addEventListener('click', changeMode);

// Check localStorage on page load
window.onload = function () {
  var mode = localStorage.getItem('mode');
  if (mode === 'light') {
    document.body.classList.add('light-mode');
  }
};
