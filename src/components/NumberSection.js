import Number from './Number';
import Modal from './Modal';
import {useEffect, useState} from 'react';

import '../styles/NumberSection.css'
function NumberSection(){
    
    const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    const [showModal,setShowModal] = useState(false);

    const changeShowModal = () => {
        setShowModal(false)
    }

    const cashPressed = () =>{
        const checkCount = parseInt(localStorage.getItem("selectCount"));
        if(checkCount===6){
            setShowModal(true)
        }

        else{
            alert("Please select 5 numbers!")
        }
        
    }

    const clear = () => {
        window.location.reload(false);
        localStorage.setItem("total",0)  
        localStorage.setItem("numbersSelected",JSON.stringify([]))  
        localStorage.setItem("selectCount",1)
        localStorage.setItem("clear","true") 
    }

    return(
        <div className="rootNumberSection">
            
            <div className="buttons-row">
            
                {numArray.map((num)=>{
                    return <Number num={num}/>
                })}
                <Modal showModal={showModal} changeShowModal={changeShowModal}/>
                <button onClick={cashPressed} className="confirm-buttons borderNormal">
                    Cash
                </button>

                <button onClick={clear} className="confirm-buttons borderNormal">
                    Clear    
                </button> 

                
           
            </div>
            
        </div>
    )
}


export default NumberSection;