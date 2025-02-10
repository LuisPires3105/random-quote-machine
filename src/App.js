// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {useState} from 'react';



const initialState = [{quote: 'Quote1',author: 'Author1'},
  {quote: 'Quote2',author: 'Author2'},
  {quote: 'Quote3',author: 'Author3'},
  {quote: 'Quote4',author: 'Author4'},
  {quote: 'Quote5',author: 'Author5'},
  {quote: 'Quote6',author: 'Author6'},
  {quote: 'Quote7',author: 'Author7'},
  {quote: 'Quote8',author: 'Author8'},
  {quote: 'Quote9',author: 'Author9'},
  {quote: 'Quote10',author: 'Author10'},
  {quote: 'Quote11',author: 'Author11'},
  {quote: 'Quote12',author: 'Author12'},
  {quote: 'Quote13',author: 'Author13'},
  {quote: 'Quote14',author: 'Author14'}];

const aNumber = Math.floor(Math.random()*initialState.length);

function App() {

  const [quote, setQuote] = useState(initialState[aNumber]['quote']);
  const [author, setAuthor] = useState(initialState[aNumber]['author']);

  function handleClick() {

    let randomNumber = Math.floor(Math.random()*initialState.length);
    setQuote(initialState[randomNumber]['quote']);
    setAuthor(initialState[randomNumber]['author']);

  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div id="quote-box">
            <p id="text">selQuote: {quote}</p>
            <p id="author">selAuthor: {author}</p>
            <button id="new-quote" onClick={handleClick}>New quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>    
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
