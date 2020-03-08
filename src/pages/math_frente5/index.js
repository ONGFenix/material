import React from 'react'

import Assunto from '../../components/assunto';


let componentContent = [
    {
        name: "Combinatória",
        hyperlink: false,
        material: '/material/combinatoria',
        referencias: [
            {
                label: "Khan Academy - Video aulas",
                link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/v/factorial-and-counting-seat-arrangements',
            },
            {
                label: "PDF do livro de combinatória do Gelson/Iezzi",
                link: 'http://fuvestibular.com.br/apostilas/fundamentos-da-matematica-elementar/vol-5/',
            },
            {
                label: "Calculadora combinatória com explicação",
                link: 'http://www.matematicadidatica.com.br/CalculadoraArranjoCombinacaoSimples.aspx'
            },
        ],
        exercicios: {
            fixacao: [
                {
                    label: "Exercício permutação",
                    link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/e/permutations_1'
                },
                {
                    label: "Exercício combinação",
                    link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinations/e/combinations_1'
                },
                {
                    label: "Exercício arranjo",
                    link: 'https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-arranjo-simples.htm'
                },
            ],
            propostos: [
                {
                    label: "Enem",
                    link: 'https://forms.gle/i3bKeAH8rDJTydv68'
                },
                {
                    label: "Fuvest",
                    link: 'https://forms.gle/uf6A2cbotrE7wduY7'
                },
                {
                    label: "Unesp",
                    link: 'https://forms.gle/5QYiCQAhKCXrBiJn7'
                },
            ],
            discursivos: 'https://drive.google.com/file/d/156cvXgF1Nf08WH74-2TNVmUyMKo7FnRU/view?usp=sharing'
        }
    },
]


const Frente5 = () => {
    console.log(componentContent);
    return (
        <div className="content">
            <Assunto content={componentContent} />
        </div>
    )
}
export default Frente5;