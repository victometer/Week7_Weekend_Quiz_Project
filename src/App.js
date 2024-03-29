import React, {useState, useEffect} from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
// import Answers from './components/Answers';
// import QuestionItem from './components/QuestionItem';

function App() {

  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [isScoreDisplayed, setIsScoreDisplayed] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  
    
  const quizFetch = () => {
    fetch ('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple')

      .then ((res) => res.json())
      .then (questions => setQuestions(questions.results))
      // .then (questions => console.log(questions))
  }

  useEffect(() => {
    quizFetch()
  }, [])

  // Here I was trying to compare answer to questions.correct_answer, but questions is an array of questions and it doesn't have a correct_answer property. Instead, I need to iterate through the array of questions and find the one that has a correct_answer that matches the answer provided by the user, and then update the score.

  //also not sure if this has to be here, would it be ok to have it in QuestionItem?

  // const handleAnswer = (answer) => {
  //   const currentQuestion = questions.find(question => question.correct_answer === answer);
  //   if(currentQuestion){
  //     setScore(score + 1)
  //   }
  // }

  // Not really sure how the conversion from above makes the questions not take in double answers

  // answeredQuestions is an array that keeps track of the questions that have been answered correctly. In the handleAnswer function, I check if the current question is included in the answeredQuestions array before updating the score. This way, every time the user clicks on an answer, the handleAnswer function will check if that answer is already in the answeredQuestions array. If it is, the score will not be updated and the user will not be able to get points for the same question multiple times.
  
  const handleAnswer = (answer) => {
    const currentQuestion = questions.find(question => question.correct_answer === answer);
    if (currentQuestion && !answeredQuestions.includes(currentQuestion.question)) {
        setScore(score + 1);
        setAnsweredQuestions([...answeredQuestions, currentQuestion.question]);
    }
}

  //Not really understanding this one
  const handleClick = () => {
    setIsScoreDisplayed(!isScoreDisplayed)
    console.log(score)

  }

    return (
    <div className="App">
      <header>
      <h1>World countries quiz</h1>
      </header> 
      {questions.length > 0 && (
        <QuestionList questions={questions} handleAnswer={handleAnswer} />
      )}
      <button className='final-score' onClick={handleClick}>Find your score</button>{isScoreDisplayed && <div>Your score is: {score}</div>}
    </div>
      );
      
    }

export default App

// the 'questions.length > 0 && ' line checks if the data has been fetched from the API and if it has, it renders the questionsList component. It therefore avoids rendering a component if the data has not yet been fetched 