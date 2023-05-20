import React from 'react';
import { ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';
import { Testimonio } from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        <Testimonio
          nombre='Shawn Wang'
          pais = 'Singapur'
          imagen = 'shawn'
          cargo ='Ingeniero de software'
          empresa = 'Amazon'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonio
          nombre='Sarah Chima'
          pais = 'Nigeria'
          imagen = 'sarah'
          cargo ='Ingeniero de software'
          empresa = 'ChatDesk'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        

        <Testimonio
          nombre='Emma Bostian'
          pais = 'Suecia'
          imagen = 'emma'
          cargo ='Ingeniera de software'
          empresa = 'Spotify'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />

      </div>
    </div>
  );
}

export default App;
