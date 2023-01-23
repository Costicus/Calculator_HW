import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  // Do the number buttons update the display of the running total?
  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

// Do the arithmetical operations update the display with the result of the operation?
  it('should update the display with the result of the operation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button6 = container.getByTestId('number6');
    const buttonsubtract = container.getByTestId('operator-subtract');
    const button2 = container.getByTestId('number2');
    const buttonequal = container.getByTestId('operator-equals');

    fireEvent.click(button6)
    fireEvent.click(buttonsubtract)
    fireEvent.click(button2)
    fireEvent.click(buttonequal)

    expect(runningTotal.textContent).toEqual('4');
  })

// Can multiple operations be chained together?
  it('should chain together multiple operations', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const buttonadd = container.getByTestId('operator-add');
    const button3 = container.getByTestId('number3');
    const buttonsubtract = container.getByTestId('operator-subtract');
    const buttonequal = container.getByTestId('operator-equals');

    fireEvent.click(button1)
    fireEvent.click(buttonadd)
    fireEvent.click(button3)
    fireEvent.click(buttonsubtract)
    fireEvent.click(button1)
    fireEvent.click(buttonequal)

    expect(runningTotal.textContent).toEqual('3');
  })

// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?


// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

})
