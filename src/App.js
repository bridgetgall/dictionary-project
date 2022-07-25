import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="logo-image img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Bridget Gallagher</footer>
      </div>
    </div>
  );
}

export default App;
