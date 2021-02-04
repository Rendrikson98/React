import React from 'react';

import classes from './BuilderControllers.css';
import BuilderControl from './BuilderControl/BuilderControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]


const builderControllers = (props) => (
    < div className={classes.BuildControlls} >
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
                <BuilderControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))
        }
    </div >
)

export default builderControllers;