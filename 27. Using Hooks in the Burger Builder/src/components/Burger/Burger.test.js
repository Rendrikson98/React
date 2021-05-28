import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Burger from './Burger'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Burger ingredients />)
    })
        ;
    it('Should render <BuilControls /> when not receiving ingredients', () => {
        wrapper.setProps({ ingredients: { salad: 0, bacon: 0, meat: 0, cheese: 0 } })
        console.log(wrapper.debug())
        expect(wrapper.find(BurgerIngredient)).toHaveLength(2);
    })

    it('Should render <BuilControls /> when receiving ingredients', () => {
        wrapper.setProps({ ingredients: { salad: 1, bacon: 2, meat: 4, cheese: 1 } })
        console.log(wrapper.debug())
        expect(wrapper.find(BurgerIngredient)).not.toHaveLength(2);
    })
})