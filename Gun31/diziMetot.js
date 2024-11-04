const meyveler = ["kavun", "kiraz", "erik", "vişne", "kivi", "portakal", "nar"];

function yaz(str) {
  const pre = document.createElement("pre");
  pre.textContent = str;
  document.querySelector("h1").after(pre);
}

yaz(meyveler);

let birlesik = meyveler.join("ǁ");
yaz(birlesik);

let liste = "";

for (let i = 0; i < meyveler.length; i++) {
  liste += i + ":" + meyveler[i] + "\n";
}

yaz(liste);

// 1-3 aralığındaki meyveler
yaz(meyveler.slice(1, 4));

// erik ve sonrası
let erikIndeks = meyveler.indexOf("erik");
yaz("erik indeks: " + erikIndeks);

yaz(meyveler.slice(erikIndeks));

// son 2 eleman
yaz(meyveler.slice(-2));

const anaUnsurlar = ["toprak", "su", "ates", "hava"];

const yeniDizi = meyveler.concat(anaUnsurlar);
yaz(yeniDizi);

yaz(meyveler.slice(-3).concat(anaUnsurlar.slice(0, 3)));

function tersi(metin) {
  return metin.split("").toReversed().join("");
}

yaz(tersi("anıl"));

const yeniDizi2 = meyveler.map(tersi);
yaz(yeniDizi2);

const uzunluklar = meyveler.map((oge) => oge.length);
yaz(uzunluklar);

const buyukler = anaUnsurlar.map((x) => x.toUpperCase());
yaz(buyukler);

const unsurlar2 = anaUnsurlar.map(function (oge, index) {
  return oge + "(" + (index + 1) + ")";
});
yaz(unsurlar2);

yaz(anaUnsurlar.map((x, i) => `${x}(${i})`));

// map kullanmadan çözünüz :)
const unsurlar3 = [];

anaUnsurlar.forEach((oge, indeks) => {
  unsurlar3.push(oge + "(" + (indeks + 1) + ")");
});

yaz(unsurlar3);
