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
                <li className='footer-link'>
                  <a href='#'>Virtual Appointments</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Product Quiz</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>FAQ</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Conact</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Terms</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Privacy</a>
                </li>
              </ul>
              <ul className='footer-links'>
                <li className='footer-link'>
                  <a href='#'>Action Plan</a>
                </li>
                <li className='footer-link'>
                  <a href='#'> Craftsmanship</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Stockist</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Press</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Reviews</a>
                </li>
              </ul>
              <ul className='footer-links'>
                <li className='footer-link'>
                  <a href='#'>Wholesale</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Shipping</a>
                </li>
                <li className='footer-link'>
                  <a href='#'>Returns</a>
                </li>
              </ul>
              <ul className='footer-links'></ul>
              <ul className='footer-links'></ul>
              <ul className='footer-links'>
                <li className='footer-link'>
                  <a href='#'>Log In / Create Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
