import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

export class TestComponent extends React.Component {
    render(){
        return <div><span>{this.props.text}</span></div>
    }
}
describe('<TestComponent/>', function () {
    it('should have the span element', function () {
        const wrapper = mount(<TestComponent text="Hello World"/>);
        expect(wrapper.props().text).to.equal('Hello World')
    });
});

