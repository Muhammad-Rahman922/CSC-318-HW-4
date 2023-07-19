import React, { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  let isExponentMode = false;

  function updateDisplay(value) {
    let currentValue = displayValue;

    if (value === '=') {
      calculate();
      return;
    }

    if (
      value === 'sin(' ||
      value === 'cos(' ||
      value === 'tan(' ||
      value === 'log(' ||
      value === 'ln(' ||
      value === 'Math.sqrt('
    ) {
      setDisplayValue(currentValue + value);
    } else if (value === 'Math.PI') {
      setDisplayValue(currentValue + Math.PI);
    } else if (value === 'Math.E') {
      setDisplayValue(currentValue + Math.E);
    } else if (value === '%') {
      const result = parseFloat(currentValue) / 100;
      setDisplayValue(result.toString());
    } else if (value === 'EXP') {
      setDisplayValue(currentValue + 'E');
    } else if (value === 'Math.pow(') {
      setDisplayValue(currentValue + '^');
      isExponentMode = true;
    } else if (isExponentMode) {
      setDisplayValue(currentValue + value);
    } else {
      setDisplayValue(currentValue + value);
    }
  }

  function clearDisplay() {
    setDisplayValue('');
    isExponentMode = false;
  }

  function calculate() {
    let expression = displayValue;

    // Replace special function names with their corresponding JavaScript functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/ln\(/g, 'Math.log(');
    expression = expression.replace(/Math.sqrt\(/g, 'Math.sqrt(');

    let result;

    try {
      if (expression.includes('^')) {
        const parts = expression.split('^');
        if (parts.length === 2) {
          const base = parseFloat(parts[0]);
          const exponent = parseFloat(parts[1]);
          if (!isNaN(base) && !isNaN(exponent)) {
            result = Math.pow(base, exponent);
          } else {
            throw new Error('Invalid exponent');
          }
        } else {
          throw new Error('Invalid expression');
        }
      } else {
        result = eval(expression);
      }
    } catch (error) {
      result = 'Error';
    }

    setDisplayValue(result);
    isExponentMode = false;
  }

  function calculateFactorial() {
    const value = parseFloat(displayValue);

    if (Number.isInteger(value) && value >= 0) {
      let result = 1;
      for (let i = 2; i <= value; i++) {
        result *= i;
      }
      setDisplayValue(result);
    } else {
      setDisplayValue('Error');
    }
    isExponentMode = false;
  }

  return (
    <div className="calculator">
      <h1 className="text-center">Calculator</h1>
      <div className="display">
        <input
          type="text"
          className="form-control"
          id="calc-display"
          value={displayValue}
          readOnly
        />
      </div>
      <div className="row gx-1">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('(')}
          >
            (
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay(')')}
          >
            )
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('%')}
          >
            %
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={clearDisplay}
          >
            AC
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('7')}
          >
            7
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('8')}
          >
            8
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('9')}
          >
            9
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('/')}
          >
            ÷
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('4')}
          >
            4
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('5')}
          >
            5
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('6')}
          >
            6
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('*')}
          >
            ×
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('1')}
          >
            1
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('2')}
          >
            2
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('3')}
          >
            3
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('-')}
          >
            -
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('0')}
          >
            0
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('.')}
          >
            .
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary w-100 mt-2 border border-primary"
            onClick={calculate}
          >
            =
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('+')}
          >
            +
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('sin(')}
          >
            sin
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('ln(')}
          >
            ln
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('Math.PI')}
          >
            π
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('cos(')}
          >
            cos
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('log(')}
          >
            log
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('Math.E')}
          >
            e
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('tan(')}
          >
            tan
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('Math.sqrt(')}
          >
            √
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('EXP')}
          >
            EXP
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={() => updateDisplay('Math.pow(')}
          >
            X^Y
          </button>
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-light w-100 mt-2 border"
            onClick={calculateFactorial}
          >
            x!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
