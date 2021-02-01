import React, { useContext, useEffect } from 'react';
import BisNeto from '../BisNeto';
import ValorPai from '../../context/context-pai';


const Neto = () => {

    const valorPai = useContext(ValorPai);



    return (
        <>
            <h1>Neto</h1>
            <p>{valorPai.value}</p>
            <BisNeto />
        </>
    )
}

export default Neto;