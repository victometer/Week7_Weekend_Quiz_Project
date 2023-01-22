import React, { useState } from "react";
import Answers from "./Answers";

function QuestionItem ({question, handleAnswer}) {
    const [selectedAnswer, setSelectedAnswer] = useState('')

    const handleAnswerSelected = (answer) => {
        setSelectedAnswer(answer)
        handleAnswer(answer)

    }
    // here i had to use the spread op to add the correct_answer to the array of incorrect answers. If I'd only used concat method, it wouldn't have worked, cos you need 2 arrays for it to work I had an array and a string.
    const answers = [question.correct_answer, ...question.incorrect_answers] 
    // Not really understanding this one
    // answers.sort(() => Math.random() - 0.5);

// console.log (question.answers)

    return (
        <div className='question-class'>
            <h3>{question.question}</h3>
            <Answers answers={answers} handleAnswer={handleAnswerSelected} selectedAnswer={selectedAnswer} correctAnswer={question.correct_answer}/>
            </div>
        );
    }
    
    

export default QuestionItem
