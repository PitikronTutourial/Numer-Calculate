import './Bisection.css'; 
import './Bootstrap.css';
import React,{ useState } from 'react' // ตัวนี้เป็นฟังชั่น component
import {Chart,Series} from 'devextreme-react/chart'
import { render } from '@testing-library/react';
const Parser = require('expr-eval').Parser; // เเปลง string to ???
const Bisection = ()=>{
const [Keepvalue,setKeepvalue] = useState ([]) 
const [CheckUnValid,setCheckUnValid] = useState (false) 
var a = [] ;
const b = [{value1: 'iteration',value2: 'error'}]
const Bisection_solve = (XL,XR,Error,Functions)=>{
            const parser = new Parser();
            function fx(x){
                let func = parser.parse(Functions)
                return func.evaluate({ x: (x) }) //ส่งค่ากลับไปใช้ 
            }
            var i = 0;
            var xl = parseFloat(XL); // Float
            var xr = parseFloat(XR);
            var xm,xold;
            var Errors = 10000000; //รอบสูงสุด
            var InputError = parseFloat(Error)
            var TempArray = [];
            if(xl!=null && xr!=null && Functions!=null && InputError!=null){
            while(Errors > InputError)
                {
                    xm=((xr+xl)/2);
                    if(fx(xm)*fx(xr)<0)
                    {
                        xold=xl
                        xl=xm
                    }
                    if(fx(xm)*fx(xr)>0)
                    {
                        xold=xr
                        xr=xm
                    }
                    Errors = Math.abs((xm-xold)/xm)*100
                i++
                a.push({xl:xl,xm:xm,xr:xr,error:Errors,iteration:i})
                let Count = [xm.toFixed(6),Errors.toFixed(6)]// item [0],[1]
                TempArray.push(Count);
            }
          }
          setKeepvalue(TempArray) 
          //console.log(TempArray)
          render(
            <div className = 'graph'>
            <Chart palette = "Violet" dataSource={a}>
            {b.map((item)=><Series
            argumentField = {item.value1}
            valueField = {item.value2}
            name = "Error"
            type = "line"
            color = "green">
            </Series>)}
          </Chart>
          </div>
          
          ) 
        }  
const InputNumber = (e)=>{
    e.preventDefault()
    let xl = e.target.XL.value
    let xr = e.target.XR.value
    let errorer = e.target.Error.value
    let fu = e.target.Function.value
    if(xl && xr && errorer && fu){
    setCheckUnValid(false) // ถ้ามี
    Bisection_solve(xl,xr,errorer,fu)
    }else{
      setCheckUnValid(true);
    }
}
  return (
    <div className='All'>
  <form onSubmit={InputNumber}> 
            <div>
              <h1>&emsp;Bisection Method&emsp;</h1>
              <label>&emsp;XL :&emsp;</label>
              <input
                name='XL'
                placeholder='Starting XL'
                size='8'
              />
              <label>&emsp;XR :&emsp;</label>
              <input
                name='XR'
                placeholder='Starting XR'
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
          {CheckUnValid && <div>Input XL,XR,Error and Function first!</div>}
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
                XM
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

export default Bisection ;