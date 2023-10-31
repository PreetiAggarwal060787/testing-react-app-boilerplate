import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import BodyComponent from '../Components/BodyComponent';
Enzyme.configure({adapter:new Adaptor()});
// Scenario: Check if state value is set to `John` by default
test('Initial value of state to be John', () => {
    const wrapper=shallow(<BodyComponent name="John"/>)
    expect(wrapper.find('#name_entered').text()).toContain("John")
});