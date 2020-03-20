import React from 'react';

import {NavLink} from 'react-router-dom';

const Menu = props => {

    return(
        <div className="content">
            <ul>
                {props.content.map(page => (
                    <NavLink to={page.link} className="navlink" activeClassName="navlink-active" >
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