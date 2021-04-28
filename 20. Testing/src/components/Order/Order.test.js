import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Order from './Order';

configure({ adapter: new Adapter() });

describe('<Order />', () => {

    it('should render ingredients and Prince', () => {
        let wrapper = shallow(<Order ingredients={{ salad: 0, meat: 0, cheese: 0, bacon: 0 }} price={7.80} />);
        console.log(wrapper.debug());
        expect(wrapper.find('span')).toHaveLength(4);
        expect(wrapper.find('strong').text()).toEqual('USD 7.8');
    })
})