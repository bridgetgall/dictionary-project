import "./App.css";
import sunset from "./sunset.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={sunset} className="sunset-image img-fluid" alt="sunset" />
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
