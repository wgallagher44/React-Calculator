import React from "react";
import {useState} from "react";


 
function Calculator(){
  
   const [calc,setCalc] = useState("");
   const [previous,setPrevious] = useState("");
   const evaluate = () =>{
       var validEval = ""
       setPrevious(calc);
     for(let i = 0; i < calc.length;i++){
        if(calc[i] === '÷'){
            validEval += '/'
        }else if(calc[i] === '×'){
            validEval += '*'
        }else{
            validEval +=calc[i];
        }
     }

     setCalc(eval(validEval).toString());
   }
   
 const hasOperations = ()=>{
       for(let i = 0;i < calc.length;i++){
           if(calc[i] === '+' || calc[i] === '-' || calc[i] === '÷' || calc[i] === '×' 
           ||calc[i] == '.'){
                return true;
           }
          
       }
       return false;
  }
  const bin = () =>{
    if(hasOperations()){
        alert("No Operations or decimals allowed");
    }
  
 setPrevious(calc)
  var temp = parseInt(calc,10);
    var value = temp.toString(2);
    if(value % 4 == 3){
        value = "0" + value;
    }else if(value % 4 == 2){
        value = "00" + value;
    }else if (value % 4 == 1){
        value = "000" + value;
    }
    var result = ""
    for(let i = 0; i < value.length; i++){
        if(i % 4 == 0){
            result += " " + value[i];
        }else{
            result += value[i];
        }
    }
    setCalc(result)
  }
  const oct = () =>{
    if(hasOperations()){
        alert("No Operations or decimals allowed");
    }
  
 setPrevious(calc)
  var value = parseInt(calc,10);
  setCalc(value.toString(8));
  }
   const hex = ()=>{
       if(hasOperations() ){
           alert("No Operations or decimals allowed");
       }
     
    setPrevious(calc)
     var value = parseInt(calc,10);
     setCalc(value.toString(16));
   }
   const ops = ['÷','×','+','-'];
   const createDigits = (value) =>{
       const digits =[];
       for(let i = value; i< value + 3; i++){
           digits.push(<button onClick={()=> updateCalc(i.toString())} key = {i}>
               {i}
           </button>)
       }
       return digits;
   }
    const updateCalc = value=>{
        if(ops.includes(value) && calc === '' ||
         ops.includes(value) && ops.includes(calc.slice(-1))){
             return;
         }
        setCalc(calc + value)
    }
    const deleteCurrent = ()=>{
        const currentString = calc.slice(0,-1);
        setCalc(currentString);
    }
    const clear = () =>{
        setCalc("")
        setPrevious("")
    }

    return (
        <div className="calc">
            <div className="output">
                <div className="previous-operand">{previous}</div>
                <div className="current-operand">{calc || "0"}</div>
            </div>
           
                <button className="span-two" onClick={()=>clear()}>AC</button>
                <button onClick={()=>deleteCurrent()}>DEL</button>
                <button onClick={() =>updateCalc('÷')}>÷</button>
                <button className="span-two" onClick={()=>hex()}>HEX</button>
                <button onClick={() => oct()} >OCT</button>
                <button onClick={() => bin()} >BIN</button>
                
                {createDigits(7)}
               
                <button onClick={()=>updateCalc("×")}>×</button>
                {createDigits(4)}
                
                <button onClick={()=>updateCalc("-")}>-</button>
                {createDigits(1)}
                <button onClick={()=>updateCalc("+")}>+</button>
                <button className="span-two" onClick={()=> updateCalc(0)}>0</button>
                <button onClick={()=>updateCalc(".")}>.</button>


                <button onClick={() => evaluate()}>=</button> 
           
         
        </div>
      
    )
    
}



export default Calculator