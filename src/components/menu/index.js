import React from 'react';

import {NavLink} from 'react-router-dom';

const Menu = props => {

    return(
        <div className="content">
            <h1>{props.content.materia}</h1>
            <ul>
                {props.content.frentes.map(page => (
                    <NavLink to={page.link} key={page.link} className="navlink" activeClassName="navlink-active" >
                        <li>
                            {page.name}    
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Menu;