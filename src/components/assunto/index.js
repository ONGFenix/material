import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './style.css';

export default class Assunto extends Component{

    state = {
        materias: this.props.content
    }

    renderReferencia = referencias => (
        referencias.map(referencia => (
            <a href={referencia.link} target="_blank" className="navlink" activeClassName="navlink-active">
                <li>{referencia.label}</li>
            </a>
        ))
    )

    renderExercicios = exercicios => (
        <div  className="exercicios">
            <li>
                <h3>Fixação: </h3>
                <ul>
                    {exercicios.fixacao.map(exercicio => (
                        <a href={exercicio.link} target="_blank" className="navlink" activeClassName="navlink-active">
                            <li>{exercicio.label}</li>
                        </a>
                    ))}
                </ul>
            </li>
            <li>
            <h3>Propostos: </h3>
            <ul>
                {exercicios.propostos.map(exercicio => (
                    <a href={exercicio.link} target="_blank" className="navlink" activeClassName="navlink-active">
                        <li>{exercicio.label}</li>
                    </a>
                ))}
            </ul>
            </li>
        </div>
    )

    render(){
        console.log(this.props);
        return(
            <div className="assunto">
                {this.state.materias.map(materia =>(
                    <div className="materia">
                        <h1>{materia.name}</h1>
                        <NavLink to={materia.material} className="navlink" activeClassName="navlink-active">
                            <h2>Material didático</h2>
                        </NavLink>
                        <h2>Referências:</h2>
                        <ul>
                            {this.renderReferencia(materia.referencias)}
                        </ul>
                        <h2>Exercícios:</h2>
                        <ul>
                            {this.renderExercicios(materia.exercicios)}
                            <li>
                                <a href={materia.exercicios.discursivos} className="navlink" activeClassName="navlink-active" download>
                                    <h2>Discursivos</h2>
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                ))}
            </div>
        )
    }

}