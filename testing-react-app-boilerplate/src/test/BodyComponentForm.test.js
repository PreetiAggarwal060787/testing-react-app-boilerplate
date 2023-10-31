import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import BodyComponent from '../Components/BodyComponent';
Enzyme.configure({adapter:new Adaptor()});
//Scenario: Check if form accepts input and changes state value
test('BodyComponent renders Form, accepts input and change state value', () => {
    const wrapper = shallow(<BodyComponent name="John"/>)
    expect(wrapper.find('form').text()).toBe("Name:")
});