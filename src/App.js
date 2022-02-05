import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <footer>
        <a
          href="https://github.com/allapieczara/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Alla pieczara
      </footer>
    </div>
  );
}

export default App;
