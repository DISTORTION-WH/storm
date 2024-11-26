// Функция для проверки, хотя бы часть элемента видна на экране
const isElementPartiallyVisible = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.bottom >= 0;
  const horInView = rect.left <= windowWidth && rect.right >= 0;

  return vertInView && horInView;
};

// Функция для добавления класса active при скролле
const handleScroll = () => {
  const elements = document.querySelectorAll('.data-scrol');
  elements.forEach((el) => {
    if (isElementPartiallyVisible(el)) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', handleScroll);
