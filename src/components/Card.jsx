import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const Card = ({ urlApi }) => {
  const [capital, setCapital] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
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
        fetchData();
      }, 500);
    } else {
      e.classList.add("fail");
      setTimeout(() => {
        e.classList.remove("fail");
        fetchData();
      }, 500);
    }
  };

  return (
    <div className="cardQuiz">
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
      <p>score : {score}</p>
    </div>
  );
};

export default Card;
