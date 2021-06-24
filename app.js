const catSound = document.getElementById('cat');
const playCat = document.getElementById('play-cat');
const catImg = document.getElementById('cat-img');

catImg.addEventListener('click', () => {
  catSound.play();
  catImg.style.border = '5px solid purple';

  setTimeout(() => {
    catImg.style.border = 'none';
  }, 500);
});;
