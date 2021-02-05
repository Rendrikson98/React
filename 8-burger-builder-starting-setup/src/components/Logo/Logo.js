import React from 'react';

import Logo from '../../assets/images/burger-logo.png'
import classes from './logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt='MyLogo' />
    </div>
)

export default logo;