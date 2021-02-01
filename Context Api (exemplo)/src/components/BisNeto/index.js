import React from 'react';
import ValorPai from '../../context/context-pai';

class BisNeto extends React.Component {

    static contextType = ValorPai

    render() {
        return (
            <>
                <h1>Teste do bisneto</h1>
                <p>{this.context.value}</p>
            </>
        )
    }
}

export default BisNeto;