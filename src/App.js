import logo from './logo.svg';
import './App.css';
import Button from './componentes/boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          <div>
            <Button onClick={()=>ImputNumber(7)}>7</Button>
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
