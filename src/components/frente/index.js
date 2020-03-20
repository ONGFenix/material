import React from 'react'

import Assunto from '../../components/assunto';

const Frente = props => {
    return (
        <div className="content">
            <Assunto content={props.content} />
        </div>
    )
}
export default Frente;