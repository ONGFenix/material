import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'

export default class Main extends Component{

    state = {
        pages: [
            {
                name: "Matemática",
                link: '/math'
            }
        ]
    }

    render(){
        return(
            <div className="content">
                <ul>
                    {this.state.pages.map(page => (
                        <NavLink to={page.link} className="navlink" activeClassName="navlink-active">
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