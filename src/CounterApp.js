import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);


    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 ); // FORMA 2
    }


    const handleReset = () => setCounter( value );


    const handleSubtract = () => setCounter( counter - 1 );



    // const handleAdd = (e) => { // FORMA 2
    //     // console.log(e);

    //     return () => console.log('Hola Mundo');
    // }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
            {/* <button onClick={ handleAdd() }>+1</button> */}
        </>
    );

}


CounterApp.protoTypes = {
    value: PropTypes.number
}


export default CounterApp;