import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
 
import './style.css';

class Sidebar extends Component{

    state = {
        subjects: [
            {
                name: 'Matemática',
                link: '/math',
                sections: [
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
        ]
    }

    renderSections = (subject) => (
        subject.sections.map(section => (
            <NavLink to={section.link} className="navlink" activeClassName="navlink-active"><li>{section.name}</li></NavLink>
        ))
    )

    render(){
        return (
        <div id="side-bar">
            {this.state.subjects.map(subject =>(
                <div className="side-bar-box">
                    <NavLink to={subject.link} className="navlink" activeClassName="navlink-active"><h1>{subject.name}</h1></NavLink>
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