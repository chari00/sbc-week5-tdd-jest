
// import { describe, it, expect, beforeEach } from 'vitest'
// import { displayToScreen, clearScreen, calculate } from '../calculator'
const { displayToScreen, clearScreen, calculate } = require('../calculator')

describe('Calculator', () => {
  let screenDisplay;

  beforeEach(() => {
    screenDisplay = { value: '' };
  });
//test for the screen
  it('displayToScreen - adds input to screen', () => {
    displayToScreen('5', screenDisplay);
    expect(screenDisplay.value).toBe('5');
  });

  it('clearScreen - clears the screen', () => {
    screenDisplay.value = '123';
    clearScreen(screenDisplay);
    expect(screenDisplay.value).toBe('');
  });

  //Addition 
  it('calculate - should ADD up 2 numbers', () => {
    screenDisplay.value = '2+3';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(5);

  });

  it('should ADD up multiple numbers', () => {
    screenDisplay.value = '2+3+4+100';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(109);
  });

  //Subtraction 
  it('calculate - should SUBTRACT 2 numbers', () => {
    screenDisplay.value = '20-3';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(17);

  });

  it('should SUBTRACT multiple numbers', () => {
    screenDisplay.value = '100-105-20-1';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(-26);
  });

  //Division 
  it('calculate - should DIVIDE 2 numbers', () => {
    screenDisplay.value = '1025÷25';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(41);

  });

  it('should DIVIDE multiple numbers', () => {
    screenDisplay.value = '500÷5÷2';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(50);
  });

  //MULTIPLICATION 
  it('calculate - should MULTIPLY 2 numbers', () => {
    screenDisplay.value = '5x5';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(25);

  });

  it('calculate - should MULTIPLY multiple numbers', () => {
    screenDisplay.value = '5x5x5x5';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(625);
  });

// HANDLES PERCENTAGE
  it('calculate - handles percentage', () => {
    screenDisplay.value = '50%';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(0.5);
  });


//HANDLES MULTIPLE OPERATION

  it('calculate - handles multiple operation', () => {
    screenDisplay.value = '500x(25÷5-2)÷100+775x10%';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe(92.5);
  });

//test for error handling
  it('calculate - prevents division by zero', () => {
    screenDisplay.value = '5÷0';
    calculate(screenDisplay);
    expect(screenDisplay.value).toBe("Can't divide by zero");
  });
});

