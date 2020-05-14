import React, {useState, useEffect} from 'react';
import './App.scss';


import Display from './components/Display'
import ButtonList from './components/ButtonList'

function App() {
  const [display, setDisplay] = useState("0")
  const [decimal, setDecimal] = useState(false)
  const [displayStorage, setDisplayStorage] = useState("")
  const [operator, setOperator] = useState(false)

  useEffect(()=>{
    console.log(displayStorage, operator, display, decimal)
  }, [displayStorage, operator, display, decimal])

  const displayStorageHandler = () => {
    setDisplayStorage(display)
    setDisplay("0")
  }

  const doMath = () => {
    switch(operator){
      case '+':
        setDisplay(parseFloat(displayStorage) + parseFloat(display))
        break;
      case '-':
        setDisplay(parseFloat(displayStorage) - parseFloat(display))
        break;
      case '/':
        setDisplay(parseFloat(displayStorage) / parseFloat(display))
        break;
      case 'X':
        setDisplay(parseFloat(displayStorage) * parseFloat(display))
        break;
    }
  }
 
  const clickHandler = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    // setDisplay(event.target.value)
    switch(event.target.value){
      case '.':
        if(decimal === false){
          setDisplay(display + event.target.value)
        }
        setDecimal(true)
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(display.length < 19){
          setDisplay(display + event.target.value)
        }
        break;
      case '+/-':
        displayStorageHandler()
        break;
      case '%':
        displayStorageHandler()
        break;
      case '/':
        setOperator(event.target.value)
        displayStorageHandler()
        break;
      case 'X':
        setOperator(event.target.value)
        displayStorageHandler()
        break;
      case '-':
        setOperator(event.target.value)
        displayStorageHandler()
        break;
      case '+':
        setOperator(event.target.value)
        displayStorageHandler()
        break;
      case '=':
        doMath()
        break;
      default: 
        setDecimal(false)
        setDisplay("0")
    }
  }

  return (
    <>
      <Display display={display} />
      <ButtonList clickHandler={clickHandler} />
    </>
  );
}

export default App;
