import React, {useState} from "react";
import '../App.css'
import Input from './Input'



function Buttons() {
  const [enteredValue, setEnteredValue] = useState('') 
  const buttonHandler = e => {
    setEnteredValue(enteredValue.concat(e.target.value))
  }

  const calculation = () => {
    setEnteredValue(eval(enteredValue).toString())
  }

  const clearDisplay = () => {
    setEnteredValue('')
  }
  return (
      <div className="cal">
          <Input inputs= {enteredValue}/>
          


        <div className="buttons">

            <button value='C' onClick={clearDisplay}  >C</button>
            <button value="+" onClick={buttonHandler} >+</button>
            <button value='-' onClick={buttonHandler} >-</button>
            <button value='/' onClick={buttonHandler} >/</button>
            <button value='*' onClick={buttonHandler} >*</button>
            <button value='9' onClick={buttonHandler} >9</button>
            <button value='8' onClick={buttonHandler} >8</button>
            <button value='7' onClick={buttonHandler} >7</button>
            <button value='6' onClick={buttonHandler} >6</button>
            <button value='5' onClick={buttonHandler} >5</button>
            <button value='4' onClick={buttonHandler} >4</button>
            <button value='3' onClick={buttonHandler} >3</button>
            <button value='2' onClick={buttonHandler} >2</button>
            <button value='1' onClick={buttonHandler} >1</button>
            <button value='0' onClick={buttonHandler} >0</button>
            <button value='=' onClick={calculation} >=</button>
        </div>
      </div>
  );
}

export default Buttons;
