import mixpanel from 'mixpanel-browser';
import logo from './logo.svg';
import './App.css';

mixpanel.init('053e56ebccab179788cb79e4ad139f28', {debug: true});
mixpanel.track('Loading page');

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
        </a>
      </header>
    </div>
  );
}

export default App;
