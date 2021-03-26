import {useState, useEffect} from 'react';
import '../styles/Modal.css'
const Modal = ({showModal, changeShowModal}) =>{

    const [received, setReceived] = useState("")

    const calcClicked = (number) => {
        
        // setReceived(number)

        setReceived(received + number)
      
    }
    const clearClicked = (number) => {
        
        setReceived("")
        
    }        

    const confirmClicked = () => {
        
        let diff = parseFloat(received) - parseFloat(localStorage.getItem("total"))
        if(diff>0){
            document.getElementById("change").value = diff;
        }
        else{
            alert("Enter valid amount");
        }
        
    }

    return(
           


        <div>
            {showModal ? (
                <div className="rootModal">
                    <div className="Heading">Cash</div>
                        
                    <div className="mainDiv">

                            {/* Div Left */}
                            <div className="divLeft">
                               <span> Enter amount received</span>
                               <table>
                                   <tr>
                                       <td>Total</td>
                                       <td>${localStorage.getItem("total")}</td>
                                   </tr>

                                   <tr>
                                       <td>Received</td>
                                       <td><input type="text" id="received" value={received} readOnly/></td>
                                   </tr>

                                   <tr>
                                       <td>Change</td>
                                       <td><input type="text" id="change" value="" readOnly/></td>
                                   </tr>           

                                   <tr>
                                       <td><button onClick={confirmClicked}>Confirm</button></td>
                                       <td><button onClick={changeShowModal}>Close</button></td>
                                   </tr>

                                   </table>
                            </div >

                            {/* Div Right */}
                            <div className="divRight">
                                <table>
                                    <tr>
                                        <td><button onClick={()=>calcClicked(7)}>7</button></td>
                                        <td><button onClick={()=>calcClicked(8)}>8</button></td>
                                        <td><button onClick={()=>calcClicked(9)}>9</button></td>
                                    </tr>

                                    <tr>
                                        <td><button onClick={()=>calcClicked(4)}>4</button></td>
                                        <td><button onClick={()=>calcClicked(5)}>5</button></td>
                                        <td><button onClick={()=>calcClicked(6)}>6</button></td>
                                    </tr>

                                    <tr>
                                        <td><button onClick={()=>calcClicked(1)} >1</button></td>
                                        <td><button onClick={()=>calcClicked(2)}>2</button></td>
                                        <td><button onClick={()=>calcClicked(3)}>3</button></td>
                                    </tr>

                                    <tr>
                                        <td><button onClick={()=>calcClicked(0)}>0</button></td>
                                        <td><button onClick={()=>calcClicked(".")}>.</button></td>
                                        <td><button onClick={()=>clearClicked()}>cl</button></td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                </div>
            ):null}
        </div>
    )
            }


export default Modal