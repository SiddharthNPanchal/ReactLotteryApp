import diceImg from "../images/diceImage.jpg" 
import '../styles/MoneySection.css'

function MoneySection(){

    const moneyClicked = (number) => {
        
        let total = parseInt(localStorage.getItem("total"));
        total += number; 
        localStorage.setItem("total",total)
    }

    return(
        <div className="root1">
            <center><img className="diceImage" src={diceImg} alt="image"/></center>
            <div className="buttons">
                <button onClick={()=>moneyClicked(1)} style={{width:"40%"}}>$1</button>
                <button onClick={()=>moneyClicked(5)} style={{width:"40%"}}>$5</button>
                <button onClick={()=>moneyClicked(10)} style={{width:"40%"}}>$10</button>
                <button onClick={()=>moneyClicked(20)} style={{width:"40%"}}>$20</button>
            </div>
        </div>  
    )
}

export default MoneySection;