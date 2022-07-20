import "./App.css";
import sunset from "./sunset.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sunset} className="sunset-image img-fluid" alt="sunset" />
      </header>
    </div>
  );
}

export default App;
