import '@testing-library/jest-dom';

const { getUser, getUsuarioActivo } = require('../../base/05-funciones');


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })


    test('getUsuarioActivo debe de retornar un objeto', () => {

        const usuarioTest = {
            uid: 'ABC567',
            username: 'jvpro'
        }

        const usuarioActivio = getUsuarioActivo( usuarioTest.username );

        expect( usuarioActivio ).toEqual( usuarioTest );

    })

})