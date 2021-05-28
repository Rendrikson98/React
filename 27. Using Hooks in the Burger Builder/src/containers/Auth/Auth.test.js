import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Auth } from './Auth';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe('<Auth />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Auth onsetAuthRedirectPath={() => { }} />);
    })
    it('Should render <Input />', () => {
        wrapper.setProps({ authRedirectPath: '/' })
        console.log(wrapper.debug())
        expect(wrapper.find(Input)).toHaveLength(2)
    });
    it('Should render <Spinner /> if props loading is true', () => {
        wrapper.setProps({ loading: true })
        console.log(wrapper.debug());
        expect(wrapper.find(Spinner)).toHaveLength(1)
    })
})