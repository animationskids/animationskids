let score = 0;

document.getElementById('circle').addEventListener('click', () => {
  score++;
  document.getElementById('score').innerText = score;
});
