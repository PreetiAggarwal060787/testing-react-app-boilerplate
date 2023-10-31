import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import BodyComponent from '../Components/BodyComponent';
Enzyme.configure({adapter:new Adaptor()});
//Scenario: Check if `h2` tag in BodyComponent contains text `Hello Charlie!!` when prop is sent as name="Charlie"
test("Checking h2 content in Body", () => {
    const wrapper=shallow(<BodyComponent name="Charlie"/>);
    expect(wrapper.find('h2').text()).toContain("Hello Charlie!!")
})