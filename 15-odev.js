let btn = document.getElementById('btn');
let zar = document.getElementById('zar');

const rastgeleSayi = () => {
  let x = Math.floor(Math.random() * 6 + 1);
  return x;
};

btn.addEventListener('click', () => {
  const sayi = rastgeleSayi();
  for (let i = 1; i <= sayi; i++) {
    zar.querySelector('img').src = `./img/Zar${i}.png`;
  }
});
