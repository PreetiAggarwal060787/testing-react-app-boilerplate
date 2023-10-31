import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import BodyComponent from '../Components/BodyComponent';

Enzyme.configure({adapter:new Adaptor()});

// Scenario: Check if Name entered field contains text as `Name Entered: John` by default
test('Initial value of Name entered field to be John', () => {
    const wrapper=shallow(<BodyComponent name="John"/>);
    expect(wrapper.find('#name_entered').text()).toBe("Name Entered: John")
});