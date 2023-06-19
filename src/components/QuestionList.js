import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onSetQuestions, onDeleteQuestion, onChangeAnswer }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => onSetQuestions(data))
  }, [])

  const questionList = questions.map(question => {
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onChangeAnswer={onChangeAnswer} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
