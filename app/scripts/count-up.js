import { CountUp } from 'countup.js';

function onCountUp() {
  let countNumber = document.getElementById(numberCountUp).innerHTML;
  const countUp = new CountUp(numberCountUp, countNumber, {
      enableScrollSpy: true,
  });
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }  
}

document.addEventListener("shopify:section:load", () => {
  onCountUp();
});
  
window.onCountUp = onCountUp;

