import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import './styles/global.css';
import './styles/pages/landing.css';

import LogoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy!"/>

        <main>
          <h1>Leve Felicidade para o mundo!</h1>
          <p>Visite orfanatos e alegre o dia de muitas crianças \o/ \o/ \o/</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro </strong>
          <span>RJ</span>
        </div>

          <a href="" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
          </a>
      </div>
    </div>
  );
}

export default App;
