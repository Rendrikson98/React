import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {


    /*const transformedIgrendientsKeys = Object.keys(props.ingredients);
    
    console.log(props.ingredients)
    console.log('----------------------')
    console.log(props.ingredients['salad'])
    console.log('----------------------')
    console.log(transformedIgrendientsKeys)
    console.log('----------------------')
    console.log([...[(props.ingredients)]])*/

    let transformedIgrendients =
        Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])]
                    .map((_, i) => {
                        console.log(_)
                        return <BurgerIngredient key={igKey + i} type={igKey} />
                    });
            }).reduce((arr, el) => {
                return arr.concat(el)
            }, [])

    if (transformedIgrendients.length === 0) {
        transformedIgrendients = <p>Please start adding ingrendients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIgrendients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger;