import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './style.css';

export default class Assunto extends Component{

    renderMaterial = materia => {
        if(materia.hyperlink){
            return (
                <a href={materia.material} target="_blank" className="navlink" >
                    <h2>Material didático</h2>
                </a>
            );
        }else{
            return(
                <NavLink to={materia.material} className="navlink" activeClassName="navlink-active">
                    <h2>Material didático</h2>
                </NavLink>
            );
        }
    }

    renderReferencia = referencias => (
        referencias.map(referencia => (
            <a href={referencia.link} key={referencia.link} target="_blank" className="navlink" >
                <li>{referencia.name}</li>
            </a>
        ))
    )

    renderExercicios = exercicios => (
        <div  className="exercicios">
            <li>
                <h3>Fixação: </h3>
                <ul>
                    {exercicios.fixacao.map(exercicio => (
                        <a href={exercicio.link} key={exercicio.link} target="_blank" className="navlink" >
                            <li>{exercicio.name}</li>
                        </a>
                    ))}
                </ul>
            </li>
            <li>
            <h3>Propostos: </h3>
            <ul>
                {exercicios.propostos.map(exercicio => (
                    <a href={exercicio.link} key={exercicio.link} target="_blank" className="navlink" >
                        <li>{exercicio.name}</li>
                    </a>
                ))}
            </ul>
            </li>
        </div>
    )

    render(){
        return(
            <div className="assunto">
                {this.props.content.map(materia =>(
                    <div className="materia" key={materia.name}>
                        <h1>{materia.name}</h1>
                        {this.renderMaterial(materia)}
                        <h2>Referências:</h2>
                        <ul>
                            {this.renderReferencia(materia.referencias)}
                        </ul>
                        <h2>Exercícios:</h2>
                        <ul>
                            {this.renderExercicios(materia.exercicios)}
                            <li>
                                <a href={materia.exercicios.discursivos} className="navlink" download>
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