import '@testing-library/jest-dom';

import heroes from '../../data/heroes';

const { getHeroeById, getHeroesByOwner } = require('../../base/08-imp-exp');


describe('Pruebas en funciones de Héroes', () => {


    test('debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });


    test('debe de retornar un undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );

    });


    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );

    });


    test('debe de retornar un arreglo con los héroe de Marbel', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe.length ).toBe( heroeData.length );

    });


})
