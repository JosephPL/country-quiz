import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [capital, setCapital] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);

  return (
    <AppContext.Provider
      value={{
        capital,
        setCapital,
        answers,
        setAnswers,
        correctAnswer,
        setCorrectAnswer,
        score,
        setScore,
        question,
        setQuestion,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
