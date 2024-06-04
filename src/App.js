import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Banner>
        <h1>Custom Banner</h1>
      </Banner>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
