/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import  Header from "./component/Header"
import Meme from "./component/Meme"
import './App.css';
class App extends Component {

  render() {
    return (
      <div >
        <Header />
        <Meme />
      
       <div>
       </div>
      </div>
    );
  }
}

export default App;
