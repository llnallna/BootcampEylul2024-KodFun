const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const dinoImg = new Image();
dinoImg.src = "./assets/dino.png";
const cactusImg = new Image();
cactusImg.src = "/assets/cactus.png";
let basladi = false;

function zeminCiz() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#535353";
  ctx.stroke();
}

zeminCiz();

// dinoX dinoY dinoWidth dinoHeight
let dw = 29,
  dh = 32;
let dx = 0,
  dy = canvas.height / 2 - dh;
let maxJumpHeight = dh * 2;
let jumpHeihgtBegining = 0;
let jumpSpeed = 2;
let slowJumpSpeed = 0.9;

// jump direction (zıplama yönü)
// 0: duruyor  +1: yukarı  -1: aşağı
let jumpDirection = 0;

function dinoCiz() {
  ctx.drawImage(dinoImg, dx, dy - jumpHeihgtBegining, dw, dh);
}

dinoCiz();

function baslat() {
  basladi = true;
  requestAnimationFrame(dinoCiz);
}
baslat();

// EVENTS
dinoImg.onload = function () {
  //neden onload gerekiyor? .getImageData() kullanabilir misin bitince dene Anıl!!!!!!!!!!!!!!!!!!
  baslat();
};
