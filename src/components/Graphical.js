import './Graphical.css'; 
import './Bootstrap.css';
import React,{ useState } from 'react' // ตัวนี้เป็นฟังชั่น component
const Parser = require('expr-eval').Parser; // เเปลง string to ???
const Graphical = ()=>{
const [Keepvalue,setKeepvalue] = useState ([]) 
const [CheckUnValid,setCheckUnValid] = useState (false) 
const Graphical_solve = (X,X2,Error,Functions)=>{
            const parser = new Parser();
            function fx(x){
                let func = parser.parse(Functions)
                return func.evaluate({ x: (x) }) //ส่งค่ากลับไปใช้ 
            }
            var x1 = parseFloat(X);
            var x1m = parseFloat(X2); // Float
            var xf ;
            var Errors = 100000; //รอบสูงสุด
            var InputError = parseFloat(Error)
            var TempArray = [];
            if(x1!=null && x1m!=null && Functions!=null && InputError!=null){
            while(Errors > InputError)
                {
                 xf = fx(x1)
                 Errors = 0-xf
                 x1 = x1+x1m

                let Count = [xf.toFixed(6),Errors.toFixed(6)]// item [0],[1]
                TempArray.push(Count);
            }
          }
          setKeepvalue(TempArray) 
          //console.log(TempArray)
        }  
const InputNumber = (e)=>{
    e.preventDefault()
    let x1 = e.target.X.value
    let x1m = e.target.X2.value
    let errorer = e.target.Error.value
    let fu = e.target.Function.value
    if(x1 &&x1m && errorer && fu){
    setCheckUnValid(false) // ถ้ามี
    Graphical_solve(x1,x1m,errorer,fu)
    }else{
      setCheckUnValid(true);
    }
}
  return (
    <div className='All'>
  <form onSubmit={InputNumber}> 
            <div>
              <h1>&emsp;Graphical Method&emsp;</h1>
              <label>&emsp;X :&emsp;</label>
              <input
                name='X'
                placeholder='Starting X'
                size='8'
              />
              <label>&emsp;X+eval :&emsp;</label>
              <input
                name='X2'
                placeholder='Starting X'
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
          {CheckUnValid && <div>Input X,Error and Function first!</div>}
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
                X
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
export default Graphical ;