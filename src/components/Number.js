import '../styles/Numbers.css'
import {useEffect, useState} from 'react';

function Number(props){
    let [currentState, setCurrentState] = useState(" borderNormal");
    let [clickState,setClickState] = useState(false)
    
    useEffect(()=>{
         if(clickState===false){
            setCurrentState(" borderNormal")
        }
        else
        {
            setCurrentState(" borderSelected")
        }
    },[clickState])

    useEffect(()=>{
        if(localStorage.getItem("clear")==="true"){
            localStorage.setItem("clear","false")
            setCurrentState(" borderNormal")
        }
        
    },[localStorage.getItem("clear")])

    const clickedButton = () =>{
        const numbersSelected = JSON.parse(localStorage.getItem("numbersSelected"))
        let count = localStorage.getItem("selectCount")
        if(clickState===true){
            setClickState(false)
            if(numbersSelected.includes(props.num))
            {
                count--;
                localStorage.setItem("selectCount",count) 
                for(let i = 0; i< numbersSelected.length;i++){
                  if(numbersSelected[i]===props.num){
                      numbersSelected.splice(i,1)
                  }  
                }
                localStorage.setItem("numbersSelected",JSON.stringify(numbersSelected))
            }
        }
        else{
            
            if(count<6){
                count++;
                localStorage.setItem("selectCount",count) 
                setClickState(true);
                numbersSelected.push(props.num)
                localStorage.setItem("numbersSelected",JSON.stringify(numbersSelected))
                // alert(numbersSelected)
            }
            else{
                alert("You can select max. 5 numbers!")
            }
            
        }  
    }
    return(
            <button className={'root-N' + currentState} onClick={clickedButton}>{props.num}</button>
          )
}
export default Number;