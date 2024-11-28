import React from 'react'
import AppSearch from './AppSearch';
import NumerMethod from './NumerMethod';
import { useState } from 'react';
import Numers from '../data/Numers';
const Home = () => {
const [selectedNumer,setselectedNumer] = useState (null);
const [searchText,setSearchText]= useState ('');
  function Clickmethod(theMethod){
    setselectedNumer(theMethod);
  }
  const filteredMethod = Numers.filter((Numer) => {
    return Numer.title.includes(searchText);
  });
  const NumerElements = filteredMethod.map((Numer,index)=>{
    return<NumerMethod  key={index} Numer={Numer} Click = {Clickmethod}/>;
  });
  return (
    
    <section className="App-section">
    <div className="App-container">
    <AppSearch value ={searchText} onValueChange = {setSearchText}/>
    <div className="App-grid">
      {NumerElements}
      </div>
    </div>
  </section>
  )
}

export default Home