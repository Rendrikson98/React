import React, { useState } from 'react';
import Filho from '../Filho 1';
import ValorPai from '../../context/context-pai';

const Pai1 = () => {

    const [value, setValue] = useState('');

    return (
        <>
            <ValorPai.Provider value={{ value: value }}>
                <h1>Pai</h1>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <p>{value}</p>
                <Filho />
            </ValorPai.Provider>
        </>
    )
}

export default Pai1;