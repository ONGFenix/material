import React from 'react';

import './style.css';

import fat_formula from '../../resources/Rafael/fat_formula.gif';
import fat_exer from '../../resources/Rafael/fat_exer.gif';
import fat_exer2 from '../../resources/Rafael/fat_exer2.gif';
import permutacao_formula from '../../resources/Rafael/permutacao_formula.gif';
import permutacao_exer from '../../resources/Rafael/permutacao_exer.gif';
import permutacao_repeticao_formula from '../../resources/Rafael/permutacao_repeticao_formula.gif';
import permutacao_repeticao_exer from '../../resources/Rafael/permutacao_repeticao_exer.gif';
import paus_bolas from '../../resources/Rafael/paus_bolas.gif';
import permutacao_circular_formula from '../../resources/Rafael/permutacao_circular_formula.gif';
import permutacao_circular_exer from '../../resources/Rafael/permutacao_circular_exer.gif';
import permutacao_caotica_formula from '../../resources/Rafael/permutacao_caotica_formula.png';
import desarranjo_exer from '../../resources/Rafael/desarranjo_exer.gif';
import arranjo_formula from '../../resources/Rafael/arranjo_formula.png';
import arranjo_exer from '../../resources/Rafael/arranjo_exer.gif';
import combinacao_formula from '../../resources/Rafael/combinacao_formula.gif'
import combinacao_exer from '../../resources/Rafael/combinacao_exer.gif';

const Combinatoria = () => (
    <div className="content">
        <h1>Análise Combinatória</h1>
        <p>Análise combinatória é a área da matemática que se preocupa em avaliar o número
            de resultados diferentes que um evento pode ter. Ela é a ciência base para a
            probabilidade, que requer saber o total de resultados para calcular as chances de algo
            acontecer.
        </p>
        <ol>
            <li>
                <h2>Princípio Fundamental da Contagem</h2>
                <p>O princípio fundamental dea contagem é a regra que nos permite calcular
                    o número de resultados que evento pode ter avaliando individualmente
                    as etapas desse evento. É também conhecido por "regra do E e do OU"
                    por causa da seguinte regra:<br /><br />
                    E: Se quando você está descrevendo os eventos vc fala "e" a operação é multiplicação<br />
                    OU: Se quando você está descrevendo os eventos vc fala "ou" a operação é adição
                </p>
                <br />
                <h4>Exemplo:</h4>
                <br />
                <h5>
                    José vai a uma reunião no trabalho e precisa estar bem trajado. Ele olha
                    em seu guarda roupa e vê que ele possui 5 camisas, 4 calças, 3 gravatas,
                    4 paletós e 2 sapatos. Sabendo que seu traje é composto de uma camisa,
                    uma calça, uma gravata, um paletó e um sapato, de quantas maneiras
                    diferentes ele pode ir vestido?
                </h5>
                <br />
                <p>
                    Para resolver essa questão, vamos fazer um diagrama em que cada escolha é uma linha em
                    branco e usando o princípio fundamental da contagem:<br />
                    <div className="calculation">
                        Camisa E Calça E Gravata E Paletó E Sapato<span className="symbol"> ⇒ </span>
                        __ • __ • __ • __ • __<br />
                    </div>
                    Agora vamos preencher cada traço com o número de possibilidades de escolha
                    para cada um:<br />
                    <div className="calculation">
                        <strong><u>5</u> • <u>4</u> • <u>3</u> • <u>4</u> • <u>2</u> = 480</strong>
                    </div>
                    Assim, temos que José tem 480 possibilidades diferentes de combinações de roupa para usar.
                </p>
            </li>
            <li>
                <h2>Fatorial</h2>
                <p>
                    Fatorial é uma operação que usaremos daqui pra frente para facilitar a notação nas questões.
                    Seu conceito é bem simples:
                </p>
                <br />
                <h4>Fórmula</h4>
                <p>
                    <div className="calculation">
                        <img src={fat_formula} alt="fat_formula" />
                    </div>
                </p>
                <h4>Exemplo</h4>
                <p>
                    <div className="calculation">
                        <img src={fat_exer} alt="fat_exer" />
                    </div>
                    Atenção! Não se pode operar nada com fatorial sem antes tirar os termos
                    do fatorial, exceto quando os fatoriais que estão operando são iguais, aí
                    podemos multiplicar e dividir. Multiplicar não tem muitos usos, mas dividir
                    vai ser bastante usado nas fórmulas mais a frente:
                    <div className="calculation">
                        <img src={fat_exer2} alt="fat_exer2" />
                    </div>
                </p>
            </li>
            <li>
                <h2>Permutação</h2>
                <p>
                    Permutação é usada quando para distribuir n opções em n lugares, ou seja,
                    quando seu único objetivo é trocar as coisas de lugar.
                </p>
                <br />
                <h4>Fórmula geral</h4>
                <p>
                    <div className="calculation">
                        <img src={permutacao_formula} alt="permutacao_formula" />
                    </div>
                    Onde n é o número de itens a permutar.
                </p>
                <br />
                <h4>Exemplo</h4>
                <h5>
                    Mariazinha tem uma caixa com 8 lápis de cores diferentes, mas ah não! Ela derrubou todos
                    eles no chão! Agora ela vai ter que devolver todos os lápis pra caixa! De
                    quantas maneiras diferentes ela pode colocar os lápis na caixa novamente?
                </h5>
                <br />
                <p>
                    Como quaremos colocar os 8 lápis em 8 lugares, mudando apenas a ordem,
                    usamos a permutação:
                    <div className="calculation">
                        <img src={permutacao_exer} alt="permutacao_exer" />
                    </div>
                </p>
                <br />
                <p>Existem ainda casos especiais de permutação:</p>
                <ol>
                    <li>
                        <h3>Permutação com repetição</h3>
                        <p>
                            Permutação com repetição é o caso onde um ou mais elementos é repetido.
                        </p>
                        <br />
                        <h4>Fórmula</h4>
                        <p>
                            <div className="calculation">
                                <img src={permutacao_repeticao_formula} alt="permutacao_repeticao_formula" />
                            </div>
                            Onde n é o número de termos e a<sub>i</sub> é o número de repetições para cada
                            termo repetido.
                        </p>
                        <br />
                        <h4>Exemplo</h4>
                        <h5>
                            Quantos anagramas existem para a palavra "banana"?
                        </h5>
                        <br />
                        <p>
                            Percebemos que essa palavra tem 6 letras, das quais o 'a' se repete 3 vezes e
                            o 'n' se repete 2 vezes. Portanto a quantidade de anagramas é:
                            <div className="calculation">
                                <img src={permutacao_repeticao_exer} alt="permutacao_repeticao_exer" />
                            </div>
                        </p>
                    </li>
                    <li>
                        <h3>Princípio de paus e bolas</h3>
                        <p>
                            Este princípio é uma forma de facilitar o entendimento de certos tipos de questão que envolvem itens entre outros itens. Nada mais é que uma permutação com repetição.
                        </p>
                        <br />
                        <h4>Fórmula</h4>
                        <p>
                            O método funciona assim:<br />Primeiro, desenhamos os itens que vamos distribuir como paus.<br />
                            ||||||||<br />
                            Depois, desenhamos os separadores entre eles como bolas:<br />
                            |||•||||•|<br />
                            Assim temos um problema de permutação com repetição.
                        </p>
                        <br />
                        <h4>Exemplo</h4>
                        <h5>
                            Uma loja de veículos oferece apenas três modelos de um certo automóvel: um popular básico, um cupê médio e um sedã luxuoso. Em uma determinada semana houve a venda de 9 veiculos nessa loja, sem o controle do gerente. Ele agora quer saber quantas unidades de cada modelo foram vendidas. 0 popular, 4 cupes e 5 sedãs? Ou teria sido 3 populares, 2 cupes e 4 sedãs? Ou ...? De quantas maneiras distintas pode ter ocorrido a venda daquela semana?
                        </h5>
                        <br />
                        <p>
                            Podemos considerar esse caso como, para cada tipo de carro, exista um espaço e separadores entre os tipos. É um caso de paus e bolas. Usando o exemplo do próprio enunciado:<br />
                            •||||•|||||<br />
                            |||•||•||||<br />
                            Assim, usando a permutação com repetição:
                            <div className="calculation">
                                <img src={paus_bolas} alt="paus_bolas" />
                            </div>
                        </p>
                    </li>
                    <li>
                        <h3>Permutação Cíclica</h3>
                        <p>
                            Permutação cíclica ou circular é o caso no qual o último elemento é
                            adjacente ao primeiro.
                        </p>
                        <br />
                        <h4>Fórmula</h4>
                        <p>
                            <div className="calculation">
                                <img src={permutacao_circular_formula} alt="permutacao_circular_formula" />
                            </div>
                        </p>
                        <br />
                        <h4>Exemplo</h4>
                        <h5>
                            Cinco amigos foram a um restaurante e escolheram sentar numa grande
                            mesa redonda que o restuarante tem. De quantas maneiras diferentes
                            esse amigos podem sentar à essa mesa?
                        </h5>
                        <br />
                        <p>
                            Como a distribuição é circular, podemos usar a permutação circular
                            para calcular o resultado.
                            <div className="calculation">
                                <img src={permutacao_circular_exer} alt="permutacao_circular_exer" />
                            </div>
                        </p>
                    </li>
                    <li>
                        <h3>Permutação caótica</h3>
                        <p>
                            Permutação caótica ou desarranjo é uma permutação onde nenhum elemento pode estar
                            em sua posição original.
                        </p>
                        <br />
                        <h4>Fórmula</h4>
                        <p>
                            <div className="calculation">
                                <img src={permutacao_caotica_formula} alt="permutacao_caotica_formula" />
                            </div>
                        </p>
                        <br />
                        <h4>Exemplo</h4>
                        <h5>
                            Quantos desarranjos existem para a palavra "lua"?
                        </h5>
                        <br />
                        <p>
                            A questão busca os desarranjos, isso significa que o 'l' não pode ser a primeria letra,
                            'u' não pode ser a segunda letra e 'a' não pode ser a primeira letra. Usando a fórmula de  desarranjo:
                            <div className="calculation">
                                <img src={desarranjo_exer} alt="desarranjo_exer" />
                            </div>
                        </p>
                    </li>
                </ol>
            </li>
            <li>
                <h2>Arranjo</h2>
                <p>
                    Arranjo é quando se quer distribuir n itens em p espaços. Leva em consideração a ordem, ou seja, AB e BA são elementos diferentes.
                </p>
                <br />
                <h4>Fórmula</h4>
                <p>
                    <div className="calculation">
                        <img src={arranjo_formula} alt="arranjo_formula" />
                    </div>
                </p>
                <h4>Exemplo</h4>
                <h5>
                    Para que uma turma de 10 alunos possa participar da gincana da escola, ela deve formar uma comissão administrativa. Essa comissão é composta de um líder esportivo, um líder artístico, um líder organizador e um líder financeiro. De quantas maneiras diferentes podemos organizar essa comissão?
                </h5>
                <br />
                <p>
                    Perceba que todas as posições da comissão são diferentes, portanto a ordem de escolher os integrantes é impoortante. Assim, trata-se de uma questão de arranjo:
                    <div className="calculation">
                        <img src={arranjo_exer} alt="arranjo_exer" />
                    </div>
                </p>
            </li>
            <li>
                <h2>Combinação</h2>
                <p>
                    Combinação é quando se quer distribuir n itens em p espaços. Não leva em consideração a ordem, ou seja, AB e BA são elementos idênticos.
                </p>
                <br />
                <h4>Fórmula</h4>
                <p>
                    <div className="calculation">
                        <img src={combinacao_formula} alt="combinacao_formula" />
                    </div>
                </p>
                <h4>Exemplo</h4>
                <h5>
                    Um Hospital precisa de plantonistas para poder cobrir o Carnaval este ano. Esse hospital dispõe de 4 médicos e 6 enfermeiras e a equipe de plantão deve ser formada por 2 médicos e 4 enfermeiras. Quantas equipes de plantão diferentes podem ser formadas?
                </h5>
                <br />
                <p>
                    A ordem dos médicos na equipe de plantão não importa, idem para as enfermeiras. Sendo assim, podemos fazer uma combinação de médicos e enfermeiras:
                    <div className="calculation">
                        <img src={combinacao_exer} alt="combinacao_exer" />
                    </div>
                </p>
            </li>
        </ol>
    </div>
)

export default Combinatoria;