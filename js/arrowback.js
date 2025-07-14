const arrow = document.querySelector('.arrowback');

  arrow.addEventListener('click', () => {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
  });
