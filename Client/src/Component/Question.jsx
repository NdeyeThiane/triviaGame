import { useState } from "react"
import Quest from "./Quest"

const Questions = (props) => {
    
    const [answer, setAnswer] = useState('')

    return (<>
        <p>{props.quiz}</p>
         {/* {quiz.map((obj, index) =>{
            <Quest key={index} correct={obj.correct_answer}>
                {obj.question}
            </Quest>
        })}  */}
    </>
    )


}


export default Questions;