import './onepoint.css'; 
import './Bootstrap.css';
import React,{ useState } from 'react' // ตัวนี้เป็นฟังชั่น component
const Parser = require('expr-eval').Parser; // เเปลง string to ???
const Onepoint= ()=>{
const [Keepvalue,setKeepvalue] = useState ([]) 
const [CheckUnValid,setCheckUnValid] = useState (false) 
const Onepoint_solve = (XI,Error,Functions)=>{
            const parser = new Parser();
            function fx(x){
                let func = parser.parse(Functions)
                return func.evaluate({ x: (x) }) //ส่งค่ากลับไปใช้ 
            }
            var i = 0;
            var xi = parseFloat(XI); // Float
            var xold;
            var Errors = 1000; //รอบสูงสุด
            var InputError = parseFloat(Error)
            var TempArray = [];
            if(xi!=null && Functions!=null && InputError!=null){
            while(Errors > InputError)
                {
                    xold = xi;
                    xi = fx(xi);
                    Errors = Math.abs((xi - xold)/xi) * 100;

                let Count = [xi.toFixed(6),Errors.toFixed(6)]// item [0],[1]
                TempArray.push(Count);
            }
          }
          setKeepvalue(TempArray) 
          //console.log(TempArray)
        }  
const InputNumber = (e)=>{
    e.preventDefault()
    let xi = e.target.XI.value
    let errorer = e.target.Error.value
    let fu = e.target.Function.value
    if(xi && errorer && fu){
    setCheckUnValid(false) // ถ้ามี
    Onepoint_solve(xi,errorer,fu)
    }else{
      setCheckUnValid(true);
    }
}
  return (
    <div className='All'>
  <form onSubmit={InputNumber}> 
            <div>
              <h1>&emsp;Onepoint iteration Method&emsp;</h1>
              <label>&emsp;XI :&emsp;</label>
              <input
                name='XI'
                placeholder='Starting XI'
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
                size='30'
              />
            </div>
            <p></p> 
            <div>
            &emsp;<button>Calculate</button>
            </div>
          </form>
          {CheckUnValid && <div>Input XI,Error and Function first!</div>}
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
                XI
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
export default Onepoint ;