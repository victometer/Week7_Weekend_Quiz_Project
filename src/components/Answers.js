import React from "react";

const Answers = ({answers, handleAnswer, selectedAnswer, correctAnswer }) => {
    return (
        //I kept trying to use answer === question.correct_answer, but the child, can't see the parent, so question isn't visible here. So i had to pass the correctAnswer as a prop from QuestionItem, where I used question.correct_answer when concatenating an array and a string with a spread operator.
    <div>
        {answers.map((answer) => (
        <div>
            <button className={`normal-button ${answer === selectedAnswer ? (answer === correctAnswer ? 'correct' : 'incorrect') : ''}`}
            value={answer}
            onClick={() => handleAnswer(answer)}>{answer}</button>
        </div>
        ))}
    </div>
    );
};

export default Answers;
