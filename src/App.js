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
          rel=" noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Alla Pieczara
      </footer>
    </div>
  );
}

export default App;
