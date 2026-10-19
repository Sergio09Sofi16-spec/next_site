document.addEventListener('DOMContentLoaded', () => {
  // Плавный скролл по якорным ссылкам
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Анимация появления карточек при скролле
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .fade-up').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
});

// Имитация отправки формы (без реального сервера)
function handleContactForm(form) {
  alert('Спасибо! Ваше сообщение принято. Я скоро с вами свяжусь.');
  form.reset();
}
