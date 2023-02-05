import React, {useState, useContext} from 'react'
import {QuizContext} from '../Helpers/Contexts'
import {Questions} from '../Helpers/QuizBank'
import "../App.css";

function Quiz() {
  const {score, setScore, setGameState} = useContext(QuizContext)

  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")

  const nextQuestion = ()=>{
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score+1)
    }  
    setCurrQuestion(currQuestion+1)
  }
  const endQuestion= ()=>{
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score+1)
    }
    setGameState("endScreen")
  }
  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button className='option' onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
        <button className='option' onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <button className='option' onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        <button className='option' onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
      </div>

      {currQuestion==Questions.length-1?(
        <button onClick={endQuestion}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )
      }
      
    </div>
  )
}

export default Quiz
