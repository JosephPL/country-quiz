import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Result = () => {
  const { score } = useContext(AppContext);

  return (
    <div className="resultCard">
      <h2>
        <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon> Result
      </h2>
      <p>
        Correct answers: <strong>{score}</strong> / 5
      </p>
      <Link to="/" className="btnAgain">
        Again
      </Link>
    </div>
  );
};

export default Result;
