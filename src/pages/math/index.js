import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'

export default class MathMenu extends Component{

    state = {
        pages:[
            {
                name: "Frente 1",
                link: '/math/frente1'
            },
            {
                name: "Frente 2",
                link: '/math/frente2'
            },
            {
                name: "Frente 3",
                link: '/math/frente3'
            },
            {
                name: "Frente 4",
                link: '/math/frente4'
            },
            {
                name: "Frente 5",
                link: '/math/frente5'
            }
        ]
    }

    render(){
        return(
            <div className="content">
                <ul>
                    {this.state.pages.map(page => (
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
}