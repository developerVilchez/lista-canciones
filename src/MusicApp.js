import React, { Component } from 'react';
import './MusicApp.css';
import Music from './Music';


class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <Music 
          artista = 'Shakira'
          canciones = {['ojos Asi','Inevitable','tu']}
          img = 'shakira.jpg'
          bio = 'Shakira Isabel Mebarak Ripoll​​ es una cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana'
          /> 
      </div>
    );
  }
}

  
   
  


export default MusicApp;
