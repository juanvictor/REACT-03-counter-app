import '@testing-library/jest-dom';

import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';


describe('Pruebas en <CounterApp />', () => {


    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });


    test('Debe de mostrar <CounterApp /> correctamente con sus valores por defecto', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de mostrar el valor por defecto de 100', () => {

        const value = 100;

        const wrapper = shallow(
            <CounterApp
                value={ value }
            /> );

        const textoH2 = wrapper.find('h2').text().trim();

        expect( parseInt( textoH2, 10 ) ).toBe( value );

    });


    test('Debe de incrementar con el botón +1', () => {

        // const btn1 = wrapper.find('button').at(0);

        // console.log( btn1.html() );

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });


    test('Debe de colocar el valor por defecto con el botón Reset', () => {

        const wrapper = shallow(
            <CounterApp
                value={ 105 }
            /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '105' );

    });


    test('Debe de incrementar con el botón -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');

    });


})
