import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
 
import './style.css';

import contents from '../../contents';

class Sidebar extends Component{

    renderSections = (subject) => (
        subject.frentes.map(section => (
            <NavLink to={section.link} className="navlink" activeClassName="navlink-active"><li>{section.name}</li></NavLink>
        ))
    )

    render(){
        console.log(contents);
        return (
        <div id="side-bar">
            {contents.map(subject =>(
                <div className="side-bar-box">
                    <NavLink to={subject.link} className="navlink" activeClassName="navlink-active"><h1>{subject.materia}</h1></NavLink>
                    <ul className="box-sections">
                        {this.renderSections(subject)}
                    </ul>
                </div>
            ))}
        </div>
        )
    }
}

export default Sidebar;