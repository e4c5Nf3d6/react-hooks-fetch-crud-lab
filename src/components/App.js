import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function updateQuestions(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(questionToDelete) {
    const updatedQuestions = questions.filter(question => question.id !== questionToDelete.id)
    setQuestions(updatedQuestions)
  }

  function changeAnswer(updatedQuestion) {
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onUpdateQuestions={updateQuestions} /> : <QuestionList questions={questions} onSetQuestions={setQuestions} onDeleteQuestion={deleteQuestion} onChangeAnswer={changeAnswer} />}
    </main>
  );
}

export default App;
