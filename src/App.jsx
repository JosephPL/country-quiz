import "./App.css";
import Card from "./components/Card";
import { Link, Route, Routes } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div className="container">
        <h1>Capital Quiz</h1>
        <Routes>
          <Route
            exact
            path="/country-quiz"
            element={<Card urlApi="https://restcountries.com/v3.1/all" />}
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>

      <footer>
        <p>created by JosephPL - devChallenges.io</p>
        <p>
          Foto de
          <Link to="https://unsplash.com/es/@nuvaproductions?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Javier Miranda
          </Link>{" "}
          en{" "}
          <Link to="https://unsplash.com/es/fotos/Jn2EaLLYZfY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {" "}
            Unsplash
          </Link>
        </p>
      </footer>
    </>
  );
}

export default App;
