import { Children, useState } from "react"

const Quest = (props) =>{
    const [isClick, setIsClick] = useState();
    const [result, setResult] =useState("");
    const [btnState, setBtnState] = useState(false);
    
    const handleClick =()=>{
        if(isClick === props.qA.correct_answer){
            setResult( "Your are correct")
            props.Total();
            setBtnState(true)
        
        }
        else if (isClick !== props.qA.correct_answer  && isClick !== ""){
            setResult("Wrong answer")
            setBtnState(true);
        }else{
            setResult("pick an answer")
            setBtnState(false);
        }  
    }

    return (
        <div>
            <label htmlFor="quest"> {props.qA.question}<br />
                <input type="radio" id="quest" name="quest" value={'True'} onClick={(e) =>setIsClick(e.target.value)} /> True <br />
                <input type="radio" id="quest" name="quest" value={'False'}  onClick={(e) =>setIsClick(e.target.value)} /> False <br />
            </label>
            <button type="submit" disabled={btnState} onClick={handleClick}>Check</button> <br/>
           
            {result}
        </div>
    )

}


export default Quest;