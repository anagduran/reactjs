import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
//const Header =require "./Header";

test('should render the header of the page', () => {
    const rHeader=shallow(<Header/>);
    expect(rHeader.text()).toEqual("Github releases");
})