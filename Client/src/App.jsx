import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Questions from './Component/Question';
import Quest from './Component/Quest';
import Questions from './Component/Question';

function App() {
  const [questions, setQuestions] = useState([]);
  const [total, setTotal] = useState(0);
  
 
   const fetchData = async() =>{
    const response = await fetch("http://localhost:8080/quiz");
    const data = await response.json()
    setQuestions(data);
   
    
  }

  useEffect(() => {
    fetchData();

  }, []);

  const handleClick = () =>{
    e.preventDefault()
    alert(`You got  ${total} questions correct`)

  }
  if(!questions) return <div>loading...</div>
      
   if(questions.length){
  return (
    <>
      <h1>Quiz trivia</h1>
      <form onSubmit={handleClick}>
        {
          questions.map((obj, index) => {
            return <Quest key = {index+1} qA = {obj} Total={()=> setTotal(p => p + 1)}></Quest>
          })
        }
        <br />
           <button type='submit'>Submit</button>

      </form>
       
     
    </>
  )
}
}

export default App;






