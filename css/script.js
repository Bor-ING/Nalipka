const images = [
  'img/01-icon.png',
  'img/02-icon.png',
  'img/03-icon.png',
  'img/04-icon.png'
];

function createIcon(x, y) {
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.style.left = `${x - 15}px`;
  icon.style.top = `${y - 15}px`;

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const img = document.createElement('img');
  img.src = randomImage; 
  img.alt = 'Icon';
  img.style.width = '30px';
  img.style.height = '30px';

  icon.appendChild(img);
  document.querySelector('.icons-container').appendChild(icon);

  const randomX = Math.random() * 80 - 40;
  const randomY = Math.random() * 80 - 40;
  const randomRotate = Math.random() * 180 - 90;

  icon.style.setProperty('--x', `${randomX}px`);
  icon.style.setProperty('--y', `${randomY}px`);
  icon.style.setProperty('--rotate', `${randomRotate}deg`);

  setTimeout(() => {
    icon.style.opacity = '1';
    icon.style.animation = 'explode 0.8s forwards';
  }, 0);

  setTimeout(() => {
    icon.remove();
  }, 800);
}

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  if (Math.random() < 0.1) {
    createIcon(e.clientX, e.clientY);
  }
});

document.body.style.cursor = 'url("svg/cursor.svg"), auto';

const imgs = document.querySelectorAll('.float-img');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  imgs.forEach(img => {
    const rect = img.getBoundingClientRect();
    const imgX = rect.left + rect.width / 2;
    const imgY = rect.top + rect.height / 2;

    const dx = mouseX - imgX;
    const dy = mouseY - imgY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 150;

    if (distance < maxDist) {
      const angle = Math.atan2(dy, dx);
      const moveX = Math.cos(angle) * (maxDist - distance) * -0.4;
      const moveY = Math.sin(angle) * (maxDist - distance) * -0.4;

      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      img.style.transform = `translate(0, 0)`;
    }
  });
});



const blob = document.querySelector('.blob-cursor');
const section = document.querySelector('.video-section.slide');

document.addEventListener('mousemove', (e) => {
  blob.style.top = `${e.clientY}px`;
  blob.style.left = `${e.clientX}px`;
});

section.addEventListener('mouseenter', () => {
  blob.style.opacity = 1;
  // Видаляємо будь-яке втручання в курсор через JS — все робимо в CSS
});

section.addEventListener('mouseleave', () => {
  blob.style.opacity = 0;
});
