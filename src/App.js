
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary</h1>
       </header>
        
       <main>
         <Dictionary defaultKeyword="Hello" />
       </main>
       <footer className="App-footer"> This code was created by Yue Ajioka and is{" "}
    <a href="https://github.com/gocherrystar/dictionary-project" target="blank" rel="noopener noreferrer" >open-sourced on GitHub</a>
    </footer>
       </div>
    </div>
  );
}

export default App;
