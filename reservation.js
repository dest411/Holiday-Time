const arrow2 = document.querySelector('.arrowbacktwo');

  arrow2.addEventListener('click', () => {
    document.getElementById('toptwo').scrollIntoView({ behavior: 'smooth' });
  });
