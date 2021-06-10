import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">

        <h1 className="App-heading">
          DIGITAL DICTIONARY
        </h1>

        <Dictionary defaultKeyword="yeehaw" />

        <p className="App-signature">
            A <a href="https://www.instagram.com/piginapokestudio/" target="_blank" rel="noopener noreferrer">PIG IN A POKE STUDIO</a> PRODUCTION, BUILT WITH <a href="https://github.com/maggiegmcd/react-dictionary" target="_blank" rel="noopener noreferrer">OPEN-SOURCE CODE</a> AND 
            ♥︎ BY <a href="https://www.linkedin.com/in/maggiegmcd/" target="_blank" rel="noopener noreferrer">MAGGIE MCDONALD</a>.
        </p>

    </div>
  );
}

export default App;
