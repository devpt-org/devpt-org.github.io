function useHandleScroll() {
  const navElement = document.querySelector('.ui-nav');

  if(window.pageYOffset > 50){
    navElement.classList.add('ui-nav__shadow');
  } else {
    navElement.classList.remove('ui-nav__shadow');
  }
}

// eslint-disable-next-line no-unused-vars
function useToggleDarkMode() {
  isDarkMode() ? useLightMode() : useDarkMode();
}

function useDarkMode() {
  document.querySelector('html').classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

function useLightMode() {
  document.querySelector('html').classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

function isDarkMode() {
  const theme = localStorage.getItem('theme');

  return theme === 'dark';
}

window.addEventListener('load', function() {
  window.addEventListener('scroll', useHandleScroll);
});

(function() {
  const theme = localStorage.getItem('theme');
  theme === 'light' ? useLightMode() : useDarkMode();
})();
