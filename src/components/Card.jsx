import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Card = ({ urlApi }) => {
  const navigate = useNavigate();
  const {
    capital,
    setCapital,
    answers,
    setAnswers,
    correctAnswer,
    setCorrectAnswer,
    setScore,
    question,
    setQuestion,
  } = useContext(AppContext);

  useEffect(() => {
    setScore(0);
    setQuestion(1);
    fetchData();
  }, []);

  // Aquí realizaremos la llamada a la API con fetch
  const fetchData = async () => {
    try {
      const res = await fetch(urlApi);
      const data = await res.json();

      // Selecciona una capital aleatoria como pregunta
      const randomIndex = Math.floor(Math.random() * data.length);
      const questionCountry = data[randomIndex];
      const capitalName = questionCountry.capital;
      const countryName = questionCountry.name.common;

      // Lista de paises incorrectos para las repuestas
      const allCountrys = data.map((country) => country.name.common);
      const otherCountrys = allCountrys.filter((name) => name !== countryName);
      // Crea un array con un length de 3 con los paises para las respuestas
      const randomAnswerIndex = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * otherCountrys.length)
      );
      const incorrectAnswers = randomAnswerIndex.map(
        (index) => otherCountrys[index]
      );

      const randomPosition = Math.floor(Math.random() * 4);
      incorrectAnswers.splice(randomPosition, 0, countryName);

      setCorrectAnswer(countryName);
      setCapital(capitalName);
      setAnswers(incorrectAnswers);
    } catch (err) {
      console.error("Error al obtener los datos:", err);
    }
  };

  const handleAnswer = (e, item) => {
    if (item === correctAnswer) {
      e.classList.add("success");

      setTimeout(() => {
        e.classList.remove("success");
        setScore((prevScore) => prevScore + 1);

        setQuestion((prevQuestion) => prevQuestion + 1);
        if (question === 5) {
          navigate("/result");
        }
        fetchData();
      }, 500);
    } else {
      e.classList.add("fail");
      setTimeout(() => {
        e.classList.remove("fail");

        setQuestion((prevQuestion) => prevQuestion + 1);
        if (question == 5) {
          navigate("/result");
        }
        fetchData();
      }, 500);
    }
  };

  return (
    <div className="cardQuiz">
      <p>Question {question} / 5</p>
      <h2>{capital} is the capital of</h2>
      {answers.map((item, index) => (
        <button
          key={index}
          className="choice"
          onClick={() => {
            handleAnswer(event.target, item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Card;
