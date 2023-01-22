import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList ({questions, handleAnswer}) {
    return (
        <div className='question-class'>
        <h2>Answer the following questions:</h2>
        <div>
            {questions.map((question) => (
                <QuestionItem question={question} handleAnswer={handleAnswer}/>

            ))}
        </div>
        </div>
    )

}

export default QuestionList