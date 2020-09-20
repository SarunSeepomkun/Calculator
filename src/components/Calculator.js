import React, {useState} from "react";
import "./Calculator.css";

function Calculator() {

    const [ firstNumber , setFirstnumber ] = useState('');
    const [ operand , setOperand] = useState('');
    const [ secondNumber , setSecondnumber ] = useState('');
    const [ result , setResult] = useState('');

    const setNumber = (value)=>{
        console.log(firstNumber + '' + operand + '' + secondNumber);
        if(operand === '')
        {
            let number = firstNumber + '' + value;
            setFirstnumber(number);
            setResult(number);
        }
        else
        {
            let number = (secondNumber) + '' + (value);
            setSecondnumber(number);
            setResult(number);
        }
    }

    const checkOperand = (value)=>{
        if(operand === '')
        {
            setOperand(value);
        }
        else{
            setOperand(value);
            calculate();
        }
    }

    const calculate = ()=>{
        console.log(firstNumber + '' + operand + '' + secondNumber);
        // let prev_result = result;
        if(operand === '+')
        {
            setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        }
        else if(operand === '-')
        {
            setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        }
        else if(operand === '*')
        {
            setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        }
        else if(operand === '/')
        {
            setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        }
        else
        {
            setResult(firstNumber);
        }
    };

    const clearData = ()=>{
        setFirstnumber('');
        setOperand('');
        setSecondnumber('');
        setResult('');
    }

  return (
    <div className="container">
      <div className="calculator">
        <div className="resultDisplay">Display
            <input type="text" readOnly={true} className="textResult" value={result} />
        </div>
        <div className="grid-container">
        <div className="item1">
          <button onClick={clearData}>AC</button>
          {/* <button>+/-</button> */}
          <button value="%">%</button>
          <button value="/" onClick={e=>checkOperand(e.target.value)}>/</button>
        </div>
        <div className="item2">
          <button value="7" onClick={e => (setNumber(e.target.value))}>7</button>
          <button value="8" onClick={e => (setNumber(e.target.value))}>8</button>
          <button value="9" onClick={e => (setNumber(e.target.value))}>9</button>
          <button value="*" onClick={e=> (checkOperand(e.target.value))}>*</button>
        </div>
        <div className="item3">
          <button value="4" onClick={e => (setNumber(e.target.value))}>4</button>
          <button value="5" onClick={e => (setNumber(e.target.value))}>5</button>
          <button value="6" onClick={e => (setNumber(e.target.value))}>6</button>
          <button value="-" onClick={e => (checkOperand(e.target.value))}>-</button>
        </div>
        <div className="item4">
          <button value="1" onClick={e => (setNumber(e.target.value))}>1</button>
          <button value="2" onClick={e => (setNumber(e.target.value))}>2</button>
          <button value="3" onClick={e => (setNumber(e.target.value))}>3</button>
          <button value="+" onClick={e => (checkOperand(e.target.value))}>+</button>
        </div>
        <div className="item5">
          <button value="0" onClick={e => (setNumber(e.target.value))}>0</button>
          <button value="." onClick={e => (setNumber(e.target.value))}>.</button>
          <button onClick={calculate}>=</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
