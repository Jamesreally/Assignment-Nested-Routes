import React, {useState} from 'react'

function App(){
    const[calc, setCalc]=useState("");
    const[result, setResult]=useState("");
    const Ops=['+','-','/','*'];

    const UpdateCalc=(value)=>{
        if(Ops.includes(value) &&  calc === '' ||
         Ops.includes(value) && Ops.includes(calc.slice(-1)
         )
         )

         {
            return;

         }
        setCalc(calc+value);
        if (!Ops.includes(value)){
            setResult(eval(calc+value));
        }

    }
    const Createdigits=()=>{
        const digits=[];
        for (let i=1; i<10; i++){
            digits.push(<button onClick={()=>UpdateCalc(i.toString())} 
            key={i}>{i}</button>)


        }
        return digits;}
    
    const Calculate=()=>{
        setCalc(eval(calc).toString());
    }
    const Delete=()=>{
        if(calc==''){
            return
        }
        const value=calc.slice(0, -1);
        setCalc(value);
    }
    return(
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : '' }{calc || "0"}
                    </div>
                    <div className="operators">
                    <button
                    onClick={()=>UpdateCalc('/')}>/</button>
                    <button onClick={()=>UpdateCalc('*')}>*</button>
                    <button onClick={()=>UpdateCalc('-')}>-</button>
                    <button onClick={()=>UpdateCalc('+')}>+</button>
                    <button onClick={Delete}>Del</button>
                </div>
                <div className="diigits">
                <button onClick={()=>UpdateCalc('9')}>9</button>
                <button onClick={()=>UpdateCalc('8')}>8</button>
                <button onClick={()=>UpdateCalc('7')}>7</button>
                <button onClick={()=>UpdateCalc('6')}>6</button>
                <button onClick={()=>UpdateCalc('5')}>5</button>
                <button onClick={()=>UpdateCalc('4')}>4</button>
                <button onClick={()=>UpdateCalc('3')}>3</button>
                <button onClick={()=>UpdateCalc('2')}>2</button>
                <button onClick={()=>UpdateCalc('1')}>1</button>
                <button onClick={()=>UpdateCalc('0')}>0</button>
                <button onClick={()=>UpdateCalc('.')}>.</button>
                <button onClick={Calculate}>=</button>
                </div>
            </div>
        </div>
    )


}
export default App; 