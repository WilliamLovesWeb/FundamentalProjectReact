import { useState } from 'react'
import './App.css'
import questions from './assets/data'
import { Question } from './Question/Question'

function App() {
  return (
    <div className='App'>
      <div className='frame1'>
        <div className='title1'>Questions</div>
        <div className='questions'>
          {questions.map((question)=>{
            return <Question {...question} key={question.id} />
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
