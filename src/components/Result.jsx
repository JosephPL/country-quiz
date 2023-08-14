import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Link, useNavigate } from "react-router-dom";

const Result = () => {
  const { score, setScore } = useContext(AppContext);
  //   const navigate = useNavigate();
  //   const handleReset =(score)=>{
  //     setScore(0);
  //     navigate('/')
  //   }

  return (
    <div className="resultCard">
      <h2>Result</h2>
      <p>
        Correct answers: <strong>{score}</strong>/5
      </p>
      <Link to="/" className="btnAgain">
        Again
      </Link>
      {/* <button onClick={handleReset(score)}></button> */}
    </div>
  );
};

export default Result;
