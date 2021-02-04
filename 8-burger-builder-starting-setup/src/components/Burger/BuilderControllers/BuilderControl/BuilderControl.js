import React from 'react';

import classes from './BuildControl.css'

const builderControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}
            >Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default builderControl;