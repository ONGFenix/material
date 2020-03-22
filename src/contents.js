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
                                name: "Khan Academy - Video aulas",
                                link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/v/factorial-and-counting-seat-arrangements',
                            },
                            {
                                name: "PDF do livro de combinatória do Gelson/Iezzi",
                                link: 'http://fuvestibular.com.br/apostilas/fundamentos-da-matematica-elementar/vol-5/',
                            },
                            {
                                name: "Calculadora combinatória com explicação",
                                link: 'http://www.matematicadidatica.com.br/CalculadoraArranjoCombinacaoSimples.aspx'
                            },
                        ],
                        exercicios: {
                            fixacao: [
                                {
                                    name: "Exercício permutação",
                                    link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/e/permutations_1'
                                },
                                {
                                    name: "Exercício combinação",
                                    link: 'https://pt.khanacademy.org/math/precalculus/prob-comb/combinations/e/combinations_1'
                                },
                                {
                                    name: "Exercício arranjo",
                                    link: 'https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-arranjo-simples.htm'
                                },
                            ],
                            propostos: [
                                {
                                    name: "Enem",
                                    link: 'https://forms.gle/i3bKeAH8rDJTydv68'
                                },
                                {
                                    name: "Fuvest",
                                    link: 'https://forms.gle/uf6A2cbotrE7wduY7'
                                },
                                {
                                    name: "Unesp",
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
                link: '/qui/frente2',
                assuntos:[]
            },
            {
                name: "Frente 3",
                link: '/qui/frente3',
                assuntos:[]
            },
            {
                name: "Frente 4",
                link: '/qui/frente4',
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
                name: "Fisica",
                link:  '/geo/fisica',
                assuntos:[
                    {
                        name: "Principais conceitos da Geografia Física",
                        hyperlink: true,
                        material: "https://drive.google.com/file/d/1Rbt77Nv_KTKli9gqvXrcGuxevZSRocvs/view?usp=sharing",
                        referencias: [
                        ],
                        exercicios: {
                            fixacao: [
                            ],
                            propostos: [
                            
                            ],
                            discursivos: ""
                        }
                    },
                    {
                        name: "Criação do universo e tectônica de placas",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=12x-4ttYc8sjfdUR7ONVuDpU-IQqrUupQ",
                        referencias: [
                          {
                            name: "Lista de exercícios - aula 01",
                            link: "https://drive.google.com/open?id=1MpLQxJRNqlVVmfxYsDc4OMSz7wtDI1zY"
                          },
                          {
                            name: "Cap.02 - Para entender a Terra",
                            link: "https://drive.google.com/open?id=1ZpLgMpsqs7WKuxypG2aObZDkXzQLAkRI"
                          }
                        ],
                        exercicios: {
                          fixacao: [
                            {
                              name: "Lista de exercícios - aula 01",
                              link: "https://drive.google.com/open?id=1MpLQxJRNqlVVmfxYsDc4OMSz7wtDI1zY"
                            }
                          ],
                          propostos: [
                            {
                              name: "Lista de exercícios - aula 01",
                              link: "https://drive.google.com/open?id=1MpLQxJRNqlVVmfxYsDc4OMSz7wtDI1zY"
                            }
                          ],
                          discursivos: ""
                        }
                    },
                    {
                        name: "Minerais e formação de rochas",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=12x-4ttYc8sjfdUR7ONVuDpU-IQqrUupQ",
                        referencias: [
                          {
                            name: "Cap.03 - Para entender a Terra",
                            link: "https://drive.google.com/open?id=1UBpf-_IuMlx0_cs-Dv7GvejuB-04RngQ"
                          },
                          {
                            name: "Cap.04 - Para entender a Terra",
                            link: "https://drive.google.com/open?id=1pQzr7UiTKpfcoZ8t1_v70biTtv09549F"
                          }
                        ],
                        exercicios: {
                          fixacao: [
                            {
                              name: "Cap.03 - Para entender a Terra",
                              link: "https://drive.google.com/open?id=1UBpf-_IuMlx0_cs-Dv7GvejuB-04RngQ"
                            }
                          ],
                          propostos: [
                            {
                              name: "Cap.03 - Para entender a Terra",
                              link: "https://drive.google.com/open?id=1UBpf-_IuMlx0_cs-Dv7GvejuB-04RngQ"
                            }
                          ],
                          discursivos: ""
                        }
                    },
                ]
            },
            {
                name: "Geopolítica",
                link: '/geo/politica',
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