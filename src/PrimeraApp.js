import React from 'react';
import PropTypes from 'prop-types';

// const PrimeraApp = ({ saludo = 'Hola mundo' }) => {
// const PrimeraApp = ({ saludo }) => {
const PrimeraApp = ({ saludo, subtitulo }) => {

    // const saludo = {
    //     nombre: 'Juan',
    //     edad: 33
    // };

    // const saludo = 'Hola Mundo';

    // console.log(props);

    // if ( ! saludo ) {
    //     throw new Error( 'El saludo es necesario' );
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p>{ subtitulo }</p>
        </>
    );

}


// === VALIDACION DE COMPONENTES ===
PrimeraApp.propTypes = {
    // saludo: PropTypes.string // NO OBLIGATORIO
    saludo: PropTypes.string.isRequired
}


PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;