
import './css/style.css'
// import { calculate, displayToScreen, clearScreen } from './calculator'
const { calculate, displayToScreen, clearScreen } = require('./calculator')


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = `
    <div>
      <section id="calc-container">
        <input type="text" id="screen" aria-label="Calculator screen" readonly />

        <div id="keys">
          <button class="text-orange" onclick="window.displayToScreen('(')">(</button>
          <button class="text-orange" onclick="window.displayToScreen(')')">)</button>
          <button class="text-orange" onclick="window.displayToScreen('%')">%</button>
          <button class="text-orange" onclick="window.displayToScreen('÷')">÷</button>
          <button onclick="window.displayToScreen('7')">7</button>
          <button onclick="window.displayToScreen('8')">8</button>
          <button onclick="window.displayToScreen('9')">9</button>
          <button class="text-orange" onclick="window.displayToScreen('x')">x</button>
          <button onclick="window.displayToScreen('4')">4</button>
          <button onclick="window.displayToScreen('5')">5</button>
          <button onclick="window.displayToScreen('6')">6</button>
          <button class="text-orange" onclick="window.displayToScreen('-')">-</button>
          <button onclick="window.displayToScreen('1')">1</button>
          <button onclick="window.displayToScreen('2')">2</button>
          <button onclick="window.displayToScreen('3')">3</button>
          <button class="text-orange" onclick="window.displayToScreen('+')">+</button>
          <button class="clear" onclick="window.clearScreen()">C</button>
          <button onclick="window.displayToScreen('0')">0</button>
          <button onclick="window.displayToScreen('.')">.</button>
          <button class="bg-orange" onclick="window.calculate()">=</button>
        </div>
      </section>
    </div>
  `

  const screenDisplay = document.querySelector('#screen');

  window.displayToScreen = (input) => displayToScreen(input, screenDisplay);
  window.clearScreen = () => clearScreen(screenDisplay);
  window.calculate = () => calculate(screenDisplay);
});