import React from 'react';

import './style.css';

import prob from '../../resources/Rafael/prob.gif';
import prob_exer from '../../resources/Rafael/prob_exer.gif';
import teo_produto from '../../resources/Rafael/teo-produto.gif';
import prod_cond from '../../resources/Rafael/prob_cond.gif';


const Probabilidade = () => (
    <div className="content">
        <h1>Probabilidade</h1>
        <p>Probabilidade é a área da matemática que trata de calcular as chances de algo acontecer. Ela é uma área importante para avaliação de riscos, economia e estatística.</p>
        <p>A probabilidade está bastante entrelaçada com análise combinatória. Observe a definição:</p>
        <div className="calculation">
            <p>A probabilidade de algo acontecer (P) é a razão entre quantas possibilidades de evento são favoráveis a algo acontecer (n) e o número total de possibilidades de resultado (T). Vide: </p>
            <img src={prob} alt="prob"/>
        </div>
        <p>Observando essa definição, é evidente a necessidade da análise combinatória em probabilidade. Temos que calcular qual o total de eventos que se aplicam ao total e ao favorável.</p>
        <br/>
        <h4>Exemplo</h4>
        <h5>Exemplo simples apenas para entendermos o que significa cada termo da definição. Qual a probabilidade de, ao jogar uma moeda, sair cara?</h5>
        <br/>
        <p>Bom, existem apenas duas possibilidades de resultado: cara ou coroa. Sendo assim, T=2. Nós queremos apenas o evento em que o resultado é cara, que é apenas 1. Sendo assim, n=1. Portanto, a probabilidade P de rodar uma moeda e o resultado ser cara é:</p>
        <div className="calculation">
            <img src={prob_exer} alt="prob_exer"/>
        </div>
        <br/>
        <h2>Definições importantes:</h2>
        <ol>
            <li>
                <h3>Espaço amostral:</h3>
                <p>Espaço amostral é o conjunto de todos os resultados possíveis de nosso experimento, o que equivale a nosso 'T' na definição acima. Ele é o conjunto universo de nosso experimento e geralmente é representado pela letra 'S'. Tomando o primeiro exemplo, temos S={"{cara , coroa}"}</p>
            </li>
            <li>
                <h3>Evento:</h3>
                <p>Evento é um subconjunto do nosso espaço amostral. Ele equivale a um conjunto de resultados qualquer e geralmente é representado por uma letra do alfabeto maiúscula. Para o evento Resultado, usamos a letra R. Para o exemplo anterior, R={"{cara}"}</p>
            </li>
        </ol>
        <h2>Operações com probabilidade:</h2>
        <p>Como as probabilidades são conjuntos, as operações que a cercam são similares:</p>
        <ol>
            <li>
                <h3>Complementar:</h3>
                <p>Refere-se ao oposto do evento. No exemplo anterior, seria a possibilidade so resultado <b>NÃO</b> ser cara, ou seja, do resultado ser coroa. Ele pode ser calculado como P<sup>c</sup> = 1 - P(cara). Note que o 1 repressenta o todo, pois ele significa 100%. Isso traz uma implicação importante:</p>
                <div className="calculation">
                    <p>Uma probabilidade calculada sempre estará entre 0 e 1 inclusos, onde 0 significa impossível de acontecer e 1 significa que é certeza de algo acontecer.</p>
                </div>
            </li>
            <li>
                <h3>União:</h3>
                <p>É a soma dos eventos A e dos eventos B, ou P(A∪B). Lembre-se que essa soma é diferente! P(A∪B) = P(A) + P(B) - P(A∩B)</p>
                <p>É usado para calcular a probabilidade de qualquer um dos eventos ocorrer, independente de qual for.</p>
            </li>
            <li>
                <h3>Interseção:</h3>
                <p>É quando queremos saber a probabilidade de ocorrer A <b>E</b> ocorer B. Isso significa a interseção dos eventos A e B.</p>
                <p>Calcula-se a interseção desta maneira:</p>
                <div className="calculation">
                    <img src={teo_produto} alt="teo-produto"/>
                </div>
                <p>Onde o primeiro termo é o evento condicional e P(A|B) é a probabilidade condicionada. Exploramos mais o que significa isso no próximo tópico.</p>
            </li>
            <li>
                <h3>Probabilidade condicionada:</h3>
                <p>Probabilidade condicionada ou dependente é aquela em que um evento depende que outro aconteça para que ele possa acontecer. Dizemos de P(A|B) a probabilidade de A acontecer se B acontecer. Sendo assim, B é o evento condicional e A é o evento condicionado. Neste caso, precisamos apenas reduzir o espaço amostral a B, assim tornando uma probabilidade simples. veja a fórmula:</p>
                <div className="calculation">
                    <img src={prod_cond} alt="prob_cond"/>
                </div>
            </li>
            <li>
                <h3>Probabilidade independente:</h3>
                <p>É quando a ocorrência de um evento não interfere na ocorrência do outro, implicando em:</p>
                <ul>
                    <li>
                        <p>P(A|B) = P(A)</p>
                    </li>
                    <li>
                        <p>P(A∩B) = P(A) x P(B)</p>
                    </li>
                </ul>
            </li>
            <li>
                <h3>Exclusão mútua:</h3>
                <p>Dizemos que eventos são mutualmente exclusivos quando (A∩B) é um conjunto vazio, ou seja, uma coisa não tem nenhuma relação com a outra. Isso implica em:</p>
                <ul>
                    <li>
                        <p>P(A∪B) = P(A) + P(B)</p>
                    </li>
                    <li>
                        <p>P(A∩B) = 0</p>
                    </li>
                </ul>
            </li>
        </ol>
    </div>
)

export default Probabilidade;