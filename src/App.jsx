import "./App.css";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <div className="container">
      <h1>Country Quiz</h1>
      <Routes>
        <Route
          path="/"
          element={<Card urlApi="https://restcountries.com/v3.1/all" />}
        />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
