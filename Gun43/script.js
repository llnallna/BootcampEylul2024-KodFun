const divSeciciler = document.getElementById("seciciler");
const divSonuc = document.getElementById("sonuc");
const divKod = document.getElementById("kod");

let renk = {
  red: 128,
  green: 128,
  blue: 128,
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

for (let ad in renk) {
  if (typeof renk[ad] != "function") {
    let divSecici = `
        <div class="secici">
            <label for="${ad}">${ad[0].toLocaleUpperCase()}</label>
            <input type="range" id="${ad}" name="${ad}" value="128" 
            min="0" max="255" oninput="guncelle('${ad}')"
            >
            <span id="${ad}Deger">128</span>
        </div>
        `;

    divSeciciler.innerHTML += divSecici;
  }
}

function guncelle(renkAd) {
  //renkAd 20.satırdaki oninputtan değer alıyor
  const input = document.getElementById(renkAd);
  const span = document.getElementById(renkAd + "Deger");
  span.textContent = input.value;
  renk[renkAd] = Number(input.value);
  divKod.textContent = renk.rgb();
  divSonuc.style.backgroundColor = renk.rgb();
}
