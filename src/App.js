import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">

      <h1 className="App-header">
        Digital Dictionary
      </h1>

      <Dictionary />

      <p className="App-signature">
          This project is <a href="https://github.com/maggiegmcd/react-dictionary" target="_blank" rel="noopener noreferrer">open-sourced</a> and 
          coded with ♥︎ by <a href="https://www.linkedin.com/in/maggiegmcd/" target="_blank" rel="noopener noreferrer">Maggie McDonald</a>.
      </p>

    </div>
  );
}

export default App;
