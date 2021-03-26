import '../styles/NumberSelection.css'
import {useEffect, useState} from 'react';
function NumberSelection(){
    
    let [displayNumber,setDisplayNumber] = useState([])
    let [total, setTotal] = useState(0)
    useEffect(()=>{
        setDisplayNumber(JSON.parse(localStorage.getItem("numbersSelected")))
    },[JSON.parse(localStorage.getItem("numbersSelected"))])

    useEffect(()=>{
        setTotal([localStorage.getItem("total")])
    },[localStorage.getItem("total")])

    

    return(
        <div className="rootSelection">
           <h5> Numbers selected:</h5>
            {displayNumber.map((number)=>{
                return <h6>Mark: {number}</h6>
            })}

            <h5 style={{bottom: 0,position: "absolute"}}>Total: ${total}</h5>
        </div>
    )
}

export default NumberSelection;