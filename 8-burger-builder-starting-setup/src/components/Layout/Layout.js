import React from 'react';

import Aux from '../../hoc/Auxx';

const Layout = (props) => (
    <Aux>
        <p>Toobar, sideDrawer, Backdrop</p>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout;