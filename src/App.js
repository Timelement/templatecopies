import logo from './logo.svg';
import './App.css';

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


      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-content'>
            <div className='footer-links-container'>
              <ul className='footer-links'>
                <li className='footer-link'></li>
                <li className='footer-link'></li>
                <li className='footer-link'></li>
                <li className='footer-link'></li>
                <li className='footer-link'></li>
                <li className='footer-link'></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
