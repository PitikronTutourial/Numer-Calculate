import './Newton.css'; 
import './Bootstrap.css';
import React,{ useState } from 'react' // ตัวนี้เป็นฟังชั่น component
const Parser = require('expr-eval').Parser; // เเปลง string to ???
const Newton = ()=>{
const [Keepvalue,setKeepvalue] = useState ([]) 
const [CheckUnValid,setCheckUnValid] = useState (false) 
const Newton_solve = (XO,Error,Functions,FunctionDiff)=>{
            const parser = new Parser();
            function fx(x){
                let func = parser.parse(Functions)
                return func.evaluate({ x: (x) }) //ส่งค่ากลับไปใช้ 
            }
            function fxd(x){
                let funcs = parser.parse(FunctionDiff)
                return funcs.evaluate({ x: (x) })
            }
            function delta(x)
            {
                let delta = fx(x)/fxd(x)
                return delta
            }
            var xo = parseFloat(XO); // Float
            var xn = xo - delta(xo);
            var Errors = 1000; //รอบสูงสุด
            var InputError = parseFloat(Error)
            var TempArray = [];
            if(xo!=null && Functions!=null && FunctionDiff!= null && InputError!=null){
            while(Errors > InputError)
                {
                    xn = xn-delta(xn);
                    Errors = Math.abs(delta(xn)/xn) * 100;
                    let Count = [xn.toFixed(6),Errors.toFixed(6)]// item [0],[1]
                TempArray.push(Count);
            }
          }
          setKeepvalue(TempArray) 
          //console.log(TempArray)
        }  
const InputNumber = (e)=>{
    e.preventDefault()
    let xo = e.target.XO.value
    let errorer = e.target.Error.value
    let fu = e.target.Function.value
    let fud = e.target.FunctionDiff.value
    if(xo && errorer && fu && fud){
    setCheckUnValid(false) // ถ้ามี
    Newton_solve(xo,errorer,fu,fud)
    }else{
      setCheckUnValid(true);
    }
}
  return (
    <div className='All'>
  <form onSubmit={InputNumber}> 
            <div>
              <h1>&emsp;Newton raphson Method&emsp;</h1>
              <label>&emsp;X0 :&emsp;</label>
              <input
                name='XO'
                placeholder='Starting X0'
                size='8'
              />
              <label>&emsp;Error:&emsp;</label>
              <input
                name='Error'
                placeholder='Epsilon'
                size='5'
              />
              </div>
              <p></p>
              <div>
              <label>&emsp;Function :&emsp;</label>
              <input
                name='Function'
                placeholder='Input function here'
                size='20'
              />
              <label>&emsp;FunctionDiff :&emsp;</label>
              <input
                name='FunctionDiff'
                placeholder='Input diff fuction'
                size='20'
              />
            </div>
            <p></p> 
            <div>
            &emsp;<button>Calculate</button>
            </div>
          </form>
          {CheckUnValid && <div>Input X0,Error,Function and difffunc first!</div>}
          <table class='table' style={{
            margin: "20px auto",
            border: "1px solid black",
            textAlign: "center",
            justifyContent: "center",
            width: "50vw"
          }}>
            <thead class="table-dark">
            <tr>
              <th style={{border: "1px solid black"}}>
                ITERATION
              </th>
              <th style={{border: "1px solid black"}}>
                X0
              </th>
              <th style={{border: "1px solid black"}}>
                ERROR
              </th>
            </tr>
            </thead>
            <tbody>
          {!CheckUnValid && Keepvalue.length > 0 && Keepvalue.map((item,index)=>{
            return <tr key={index}>
                <td style={{border: "1px solid black"}}>{index}</td><td style={{border: "1px solid black"}}>{item [0]}</td><td style={{border: "1px solid black"}}>{item[1]}</td>
            </tr>
          })}
          </tbody>
          </table>
          </div>
  )
}
export default Newton ;