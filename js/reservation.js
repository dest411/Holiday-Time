const arrow2 = document.querySelector('.arrowbacktwo');

  arrow2.addEventListener('click', () => {
    document.getElementById('toptwo').scrollIntoView({ behavior: 'smooth' });
  });
  
  
function toggleselect(selectcitynone) {
    const value = window.getComputedStyle(selectcitynone).display;

    const typesOfHouses = document.querySelector('.types-of-houses');
    const ptichka = document.querySelector('.ptchk');

    if (value === 'none') {
        selectcitynone.style.display = 'flex';

        if (typesOfHouses) {
            typesOfHouses.style.marginTop = '200px';
        }
        if (ptichka) {
            ptichka.style.transform = 'rotate(180deg)';
            ptichka.style.transition = 'transform 0.3s ease';
        }
    }
    else if (value === 'flex') {
        selectcitynone.style.display = 'none';

        if (typesOfHouses) {
            typesOfHouses.style.marginTop = '';
        }
        if (ptichka) {
            ptichka.style.transform = 'rotate(0deg)';
            ptichka.style.transition = 'transform 0.3s ease';
        }
    }
}
