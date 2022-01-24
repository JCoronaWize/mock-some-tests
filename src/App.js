import logo from './logo.svg';
import './App.css';
import testImg from './test-img.png';
import { useFetchData } from './useFetchData';
function App() {

  const count = 3
  const { data, loading, error } = useFetchData(
    `http://numbersapi.com/${count}/trivia`
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>get meessage</p>
        <div>
        {error ? (
          <div>Oops something happened :'(</div>
        ) : (
          <div>{loading ? 'loading...' : <div>
            <p title="trivia-text">{JSON.stringify(data)}</p>
            <img alt='test-img' src={testImg}></img>
            </div>
            
            }</div>
        )}
      </div>

        {/* <img src={testImg} alt="test-img" /> */}
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
