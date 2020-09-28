import '@testing-library/jest-dom';

// const { getSaludo } = require('../../base/02-template-string');

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Juan', () => {

        const nombre = 'Juan';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre);
    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );
    })

});