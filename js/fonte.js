document.addEventListener('DOMContentLoaded', () => {
  const increaseButton = document.getElementById('increase');
  const decreaseButton = document.getElementById('decrease');
  
  increaseButton.addEventListener('click', () => {
      changeFontSize(1);
  });
  
  decreaseButton.addEventListener('click', () => {
      changeFontSize(-1);
  });
  
  function changeFontSize(amount) {
      const body = document.body;
      const currentSize = window.getComputedStyle(body).fontSize;
      const currentSizeValue = parseFloat(currentSize);
      const newSizeValue = currentSizeValue + amount;

      body.style.fontSize = newSizeValue + 'px';
  }
});








/*const fontBig = document.getElementById('font-bigger');
const fontSmall = document.getElementById('font-smaller');
const html = document.documentElement;

fontBig.addEventListener('click', () => {
  let currentFontSize = parseFloat(window.getComputedStyle(html).getPropertyValue('font-size'));
  html.style.fontSize = (currentFontSize + 1) + 'px';
});

fontSmall.addEventListener('click', () => {
  let currentFontSize = parseFloat(window.getComputedStyle(html).getPropertyValue('font-size'));
  html.style.fontSize = (currentFontSize - 1) + 'px';
});

let fontSize = 16; // tamanho de fonte padrão

document.getElementById('increase-font').addEventListener('click', () => {
  fontSize += 2;
  document.getElementById('content').style.fontSize = fontSize + 'px';
});
document.getElementById('decrease-font').addEventListener('click', () => {
  fontSize -= 2;
  if (fontSize < 8) fontSize = 8; // limite mínimo de tamanho de fonte
  document.getElementById('content').style.fontSize = fontSize + 'px';
});

 document.getElementById('aumentar-fonte').addEventListener('click', function() {
	var body = document.querySelector('body');
	var currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
	body.style.fontSize = (currentFontSize + 2) + 'px';
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
	var body = document.querySelector('body');
	var currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
	body.style.fontSize = (currentFontSize - 2) + 'px';
});

// Aumenta tudo dentro do body
 document.getElementById("diminuirFonte").addEventListener("click", function() {
  // Obtém o tamanho atual da fonte do elemento body
  var tamanhoAtual = parseFloat(window.getComputedStyle(document.body).fontSize);
  // Define o novo tamanho da fonte diminuindo 2 pixels
  var novoTamanho = tamanhoAtual - 1;
  // Aplica o novo tamanho da fonte ao elemento body
  document.body.style.fontSize = novoTamanho + "px";
});

// Aumenta tudo dentro do body
document.getElementById("aumentarFonte").addEventListener("click", function() {
  // Obtém o tamanho atual da fonte do elemento body
  var tamanhoAtual = parseFloat(window.getComputedStyle(document.body).fontSize);
  // Define o novo tamanho da fonte diminuindo 2 pixels
  var novoTamanho = tamanhoAtual + 1;
  // Aplica o novo tamanho da fonte ao elemento body
  document.body.style.fontSize = novoTamanho + "px";
});


// Somente tag <p>
let x = document.getElementById("diminuirFonte")
x.addEventListener("click", function() {

var paragrafo = document.getElementById('paragrafo');
var tamanhoAtual = parseFloat(window.getComputedStyle(paragrafo).fontSize);
// Define o novo tamanho da fonte diminuindo 2 pixels
var novoTamanho = tamanhoAtual - 2;
// Aplica o novo tamanho da fonte ao elemento body
paragrafo.style.fontSize = novoTamanho + "px";
});

// Somente tag <p>
let y = document.getElementById("aumentarFonte")
y.addEventListener("click", function() {

var paragrafo = document.getElementById('paragrafo');
var tamanhoAtual = parseFloat(window.getComputedStyle(paragrafo).fontSize);
// Define o novo tamanho da fonte diminuindo 2 pixels
var novoTamanho = tamanhoAtual + 2;
// Aplica o novo tamanho da fonte ao elemento body
paragrafo.style.fontSize = novoTamanho + "px";
});
*/
