import { setupCounter } from './counter.js';
import javascriptLogo from './javascript.svg';
import './style.css';
import viteLogo from '/vite.svg';

function getHtml() {
  return `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>AA Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
}

document.querySelector('#app').innerHTML = getHtml();

setupCounter(document.querySelector('#counter'))
