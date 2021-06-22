import React, { useState } from "react";
import { Main, 
         Form, 
         Keypad, 
         ClearButton,
         BackspaceButton,
         Button,
         EqualButton 
        
}from "./App-styles"

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("")
  } 

  const backspace = () => {
    setResult(result.slice(0, -1))
  } 

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
    }
    
  }

  return (
    <Main>
        <Form>
          <input type="text" value={result} />
        </Form>

        <Keypad>
          <ClearButton onClick={clear} id="clear" >Clear</ClearButton>
          <BackspaceButton onClick={backspace} id="backspace" >C</BackspaceButton>
          <Button name="/" onClick={handleClick} >&divide;</Button>
          <Button name="7" onClick={handleClick} >7</Button>
          <Button name="8" onClick={handleClick} >8</Button>
          <Button name="9" onClick={handleClick} >9</Button>
          <Button name="*" onClick={handleClick} >&times;</Button>
          <Button name="4" onClick={handleClick} >4</Button>
          <Button name="5" onClick={handleClick} >5</Button>
          <Button name="6" onClick={handleClick} >6</Button>
          <Button name="-" onClick={handleClick} >&ndash;</Button>
          <Button name="1" onClick={handleClick} >1</Button>
          <Button name="2" onClick={handleClick} >2</Button>
          <Button name="3" onClick={handleClick} >3</Button>
          <Button name="+" onClick={handleClick} >+</Button>
          <Button name="0" onClick={handleClick} >0</Button>
          <Button name="." onClick={handleClick} >.</Button>
          <EqualButton onClick={calculate} >=</EqualButton>
        </Keypad>
    </Main>
  );
};

export default App;
