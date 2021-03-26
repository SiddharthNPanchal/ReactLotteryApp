
import {useEffect, useState} from 'react';
import '../src/styles/App.css';
import Header from '../src/components/header'
import Money from '../src/components/moneySection'
import NumberSection from '../src/components/NumberSection'
import NumberSelection from '../src/components/NumberSelection'

function App() {

  useEffect(()=>{
    localStorage.setItem("total",0)  
    localStorage.setItem("numbersSelected",JSON.stringify([]))  
    localStorage.setItem("selectCount",1) 
    localStorage.setItem("clear","false") 
    localStorage.setItem("received","") 
  },[])


  return (
    <div className="root">
      <Header/>
      <div className="App">
        <Money/>
        <NumberSection/>
        <NumberSelection/>
      </div>
    </div>
  );
}

export default App;

