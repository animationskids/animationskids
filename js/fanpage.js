const books = document.querySelectorAll('[class^="book"]');
let isActive = false;

books.forEach(book => {
  const cover = book.querySelector('.cover');
  book.addEventListener('click', () => {
    isActive = !isActive;
    if (isActive) {
      cover.classList.add('active');
    } else {
      cover.classList.remove('active');
    }
  });
});

// script.js
const audio = document.getElementById('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

playBtn.addEventListener('click', () => {
  audio.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
});

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;
});

audio.addEventListener('ended', () => {
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
  progress.style.width = '0%';
});