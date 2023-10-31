import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import BodyComponent from '../Components/BodyComponent';
Enzyme.configure({adapter:new Adaptor()});
//Scenario: Check if Name Entered field contains `Name Entered: Guest` when `button` is clicked
test('BodyComponent changes state value to default when clicked', () => {
        const wrapper=shallow(<BodyComponent name="Guest"/>)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('#name_entered').text()).toBe("Name Entered: Guest")
    })