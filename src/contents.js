const contents = [
    {
        materia: 'Matemática',
        link: '/math',
        frentes:[
            {
                name: "Frente 1",
                link: '/math/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/math/frente2',
                assuntos:[]
            },
            {
                name: "Frente 3",
                link: '/math/frente3',
                assuntos:[]
            },
            {
                name: "Frente 4",
                link: '/math/frente4',
                assuntos:[]
            },
            {
                name: "Frente 5",
                link: '/math/frente5',
                assuntos: [
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
            }
        ]
    },
    {
        materia: "Física",
        link: '/fis',
        frentes:[
            {
                name: "Frente 1",
                link: '/fis/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/fis/frente2',
                assuntos:[]
            },
            {
                name: "Frente 3",
                link: '/fis/frente3',
                assuntos:[]
            },
            {
                name: "Frente 4",
                link: '/fis/frente4',
                assuntos:[]
            },
            {
                name: "Frente 5",
                link: '/fis/frente5',
                assuntos:[]
            },
        ]
    },
    {
        materia: "Química",
        link: '/qui',
        frentes:[
            {
                name: "Frente 1",
                link: '/qui/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/qui/frente1',
                assuntos:[]
            },
            {
                name: "Frente 3",
                link: '/qui/frente1',
                assuntos:[]
            },
            {
                name: "Frente 4",
                link: '/qui/frente1',
                assuntos:[]
            },
        ]
    },
    {
        materia: "Português",
        link: '/port',
        frentes:[
            {
                name: "Literatura",
                link: '/port/lit',
                assuntos:[]
            },
            {
                name: "Estudo dos livros",
                link: '/port/book',
                assuntos:[]
            },
            {
                name: "Redação",
                link: '/port/red',
                assuntos:[]
            }
        ]
    },
    {
        materia: "Biologia",
        link: '/bio',
        frentes:[
            {
                name: "Frente 1",
                link: '/bio/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/bio/frente2',
                assuntos:[]
            },
            {
                name: "Frente 3",
                link: '/bio/frente3',
                assuntos:[]
            },
            {
                name: "Frente 4",
                link: '/bio/frente4',
                assuntos:[]
            },
        ]
    },
    {
        materia: "História",
        link: '/his',
        frentes:[
            {
                name: "Frente 1",
                link:  '/his/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/his/frente2',
                assuntos:[]
            }
        ]
    },
    {
        materia: "Geografia",
        link: '/geo',
        frentes:[
            {
                name: "Frente 1",
                link:  '/geo/frente1',
                assuntos:[]
            },
            {
                name: "Frente 2",
                link: '/geo/frente2',
                assuntos:[]
            }
        ]
    },
    {
        materia: "Filosofia/Sociologia",
        link: '/fil',
        frentes:[
            {
                name: "Frente única",
                link: '/fil/frente',
                assuntos:[]
            }
        ]
    }
]

export default contents