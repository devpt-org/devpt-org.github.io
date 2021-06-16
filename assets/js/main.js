function useHandleScroll() {
  const navElement = document.querySelector('.ui-nav');

  if (window.pageYOffset > 50) {
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

window.addEventListener('load', function () {
  window.addEventListener('scroll', useHandleScroll);
});

function capitalize(word) {
  return word && word[0].toUpperCase() + word.slice(1);
}

// eslint-disable-next-line no-unused-vars
function goToURL(url) {
  if (!url) return;
  window.location.href = url;
}

function decodeURIFromBreadcrumb(anchor, value) {
  let decodeValue = decodeURI(value);

  if (decodeValue.includes('-')) {
    decodeValue = [...decodeValue.split('-')]
      .map((word) => capitalize(word))
      .join(' ');
  }

  anchor.innerHTML = `/ ${decodeValue}`;
}

(function () {
  // const theme = localStorage.getItem('theme');
  // theme === 'light' ? useLightMode() : useDarkMode();
  useLightMode();

  const breadcrumbLinks = document.querySelectorAll('a[data-breadcrumb]');
  [...breadcrumbLinks].forEach((anchor) =>
    decodeURIFromBreadcrumb(anchor, anchor.getAttribute('data-breadcrumb'))
  );
})();
