import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#root');


// ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku" />, divRoot );

// ReactDOM.render( <PrimeraApp saludo={123} />, divRoot ); // Envio de valor númerico

// ReactDOM.render( <PrimeraApp saludo="Hola mundo" />, divRoot );

ReactDOM.render( <CounterApp value={123} />, divRoot );