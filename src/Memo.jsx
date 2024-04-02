import React, { useMemo, useState } from 'react'

function Memo() {
    const [counter, setCounter] = useState(0);
    const [test, setTest] = useState(0);
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString();
 
    const result = useMemo(()=> {
     return (
        <div style={{color:randomColor}}>
        value is {counter} := {counter * 2} 
       </div>

     )
    },[counter]);

  return (
    <div>
        {result}
        <button onClick={()=> setCounter(counter - 1)}>-</button>
        <button  onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={()=> setTest(test + 1)}>test</button>
    </div>
  )
}

export default Memo