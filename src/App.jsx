import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <h1>Country Quiz</h1>
      <Card urlApi="https://restcountries.com/v3.1/all" />
    </div>
  );
}

export default App;
