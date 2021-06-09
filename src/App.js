import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">

        <h1 className="App-heading">
          Digital Dictionary
        </h1>

        <Dictionary defaultKeyword="yeehaw" />

        <p className="App-signature">
            A Pig in a Poke Studio production, built with <a href="https://github.com/maggiegmcd/react-dictionary" target="_blank" rel="noopener noreferrer">open-source code</a> and 
            ♥︎ by <a href="https://www.linkedin.com/in/maggiegmcd/" target="_blank" rel="noopener noreferrer">Maggie McDonald</a>.
        </p>

    </div>
  );
}

export default App;
