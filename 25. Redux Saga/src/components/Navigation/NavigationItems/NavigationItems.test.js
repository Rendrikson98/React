import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
})

describe('<NavigationItems />', () => {
    it('should render two <NabigationItem /> elements if not authenticate', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render two <NabigationItem /> elements if authenticate', () => {
        //const wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should render two <NabigationItem /> elements if authenticate', () => {
        //const wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true })
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});