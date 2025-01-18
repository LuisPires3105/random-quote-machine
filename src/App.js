// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react';



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

class Quotes extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      quotes: initialState,
      currentQuote: initialState[aNumber]['quote'],
      currentAuthor: initialState[aNumber]['author'],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(()=>{
      let randomNumber = Math.floor(Math.random()*this.state.quotes.length);
      return {quotes: initialState,
        currentQuote: this.state.quotes[randomNumber]['quote'],
        currentAuthor: this.state.quotes[randomNumber]['author'],
      }
    });
  }

  render(){
    return <div id="quote-box">
      <p id="text">selQuote: {this.state.currentQuote}</p>
      <p id="author">selAuthor: {this.state.currentAuthor}</p>
      <button id="new-quote" onClick={this.handleClick}>New quote</button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>    
    </div>
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Quotes />
        </div>
      </header>
    </div>
  );
}

export default App;
