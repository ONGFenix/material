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
                name: "Ecologia e botânica",
                link: '/bio/eco',
                assuntos:[
                    
                ]
            },
            {
                name: "Biologia Molecular e Genética",
                link: '/bio/gen',
                assuntos:[
                    {
                        name: "Aula 2 - Biologia Molecular e Genética - Célula pro e eucariótica",
                        hyperlink: true,
                        material: "https://drive.google.com/drive/folders/1SRi8B7FbicYFbNnMS6D6E3o5khGqdY8r",
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
                        name: "Aula 3 - Biologia Molecular e Genética - Organelas",
                        hyperlink: true,
                        material: "https://drive.google.com/drive/folders/1SRi8B7FbicYFbNnMS6D6E3o5khGqdY8r",
                        referencias: [
                          
                        ],
                        exercicios: {
                          fixacao: [
                            
                          ],
                          propostos: [
                            
                          ],
                          discursivos: "https://drive.google.com/drive/folders/1SRi8B7FbicYFbNnMS6D6E3o5khGqdY8r"
                        }
                    },
                    {
                        name: "Aula 4 - Biologia Molecular e Genética -  Ácidos Nucléicos",
                        hyperlink: true,
                        material: "https://drive.google.com/drive/folders/1SRi8B7FbicYFbNnMS6D6E3o5khGqdY8r",
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
                ]
            },
            {
                name: "Biologia Molecular e Evolução",
                link: '/bio/evo',
                assuntos:[]
            },
            {
                name: "Seres Vivos e Fisiologia",
                link: '/bio/fisi',
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
                        name: "Aula 00 - Conceitos básicos de Geografia",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=1Rbt77Nv_KTKli9gqvXrcGuxevZSRocvs",
                        referencias: [
                          {
                            name: "Vídeo_01_Conceitos básicos de Geografia",
                            link: "https://www.youtube.com/watch?v=aR1OZIaEz4E&t=5s"
                          },
                          {
                            name: "Dica_01_Estudos com resultado",
                            link: "https://www.youtube.com/watch?v=QR_d6q135Ik&t=3s"
                          }
                        ],
                        exercicios: {
                          fixacao: [],
                          propostos: [],
                          discursivos: ""
                        }
                    },
                    {
                        name: "Aula 01 - Origem do universo e do planeta Terra",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=1EuLufv9N5xxLMYjBcIEscg9WO5IL2Dyc",
                        referencias: [
                          {
                            name: "Lista_de_exercícios_01 - Placas tectônicas",
                            link: "https://drive.google.com/open?id=1MpLQxJRNqlVVmfxYsDc4OMSz7wtDI1zY"
                          },
                          {
                            name: "Vídeo_01_Origem do universo",
                            link: "https://www.youtube.com/watch?v=da6BYRdXsyA&feature=youtu.be"
                          },
                          {
                            name: "Vídeo_02_Origem do planeta Terra",
                            link: "https://youtu.be/aiEr4wTNmnA"
                          },
                          {
                            name: "Vídeo_03_Teoria da deriva continental",
                            link: "https://www.youtube.com/watch?v=zwNAIUmQK1s&t=1s"
                          },
                          {
                            name: "Leitura_01_Para Entender a Terra - Cap 1",
                            link: "https://drive.google.com/open?id=1yddJNIfILfGWDwE4Ek0MnvKmn4G-OQys"
                          },
                          {
                            name: "Leitura_02 - Para entender a Terra - Cap 2",
                            link: "https://drive.google.com/open?id=1ZpLgMpsqs7WKuxypG2aObZDkXzQLAkRI"
                          }
                        ],
                        exercicios: {
                          fixacao: [],
                          propostos: [
                            {
                              name: "Lista_de_exercícios_01 - Placas tectônicas",
                              link: "https://drive.google.com/open?id=1MpLQxJRNqlVVmfxYsDc4OMSz7wtDI1zY"
                            }
                          ],
                          discursivos: ""
                        }
                    },
                    {
                        name: "Aula_02 - Minerais e rochas",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=1ZpGlV6QtEcyzrQ7hK66L_PcGHdFOVDvW",
                        referencias: [
                          {
                            name: "Lista_de_exercícios_02 - Minerais e rochas",
                            link: "https://drive.google.com/open?id=1UBpf-_IuMlx0_cs-Dv7GvejuB-04RngQ"
                          },
                          {
                            name: "Leitura_02 - Para Entender a Terra - cap 3",
                            link: "https://drive.google.com/open?id=1JbLH01mbjVGaoDhebgwztjjRmXke5wvh"
                          },
                          {
                            name: "Leitura_03 - Para Entender a Terra - Cap 4",
                            link: "https://drive.google.com/open?id=1c7arzIHYncxp5TyPjzQ2WjkCjL4QJN_x"
                          },
                          {
                            name: "Leitura_04 - Para Entender a Terra - Cap 5",
                            link: "https://drive.google.com/open?id=1zqGiAdcXAw-LbNFZKQBocc8j-kTfOdVc"
                          },
                          {
                            name: "Leitura_05 - Para Entender a Terra - Cap 8",
                            link: "https://drive.google.com/open?id=1uuHd00Q_OwXBAFTZAOsRliFQiWT33Oyr"
                          },
                          {
                            name: "Leitura_06 - Para Entender a Terra - Cap 9",
                            link: "https://drive.google.com/open?id=1gRfhjNSUytTzOucPS04XJ0Ps50bZNZ2s"
                          },
                          {
                            name: "Vídeo_01 - Tipos de rochas",
                            link: "https://www.youtube.com/watch?v=iDIm36aqYws&feature=youtu.be"
                          }
                        ],
                        exercicios: {
                          fixacao: [],
                          propostos: [
                            {
                              name: "Lista_de_exercícios_02 - Minerais e rochas",
                              link: "https://drive.google.com/open?id=1UBpf-_IuMlx0_cs-Dv7GvejuB-04RngQ"
                            }
                          ],
                          discursivos: ""
                        }
                    },
                    {
                        name: "Aula_03 - Recursos minerais no Brasil e no mundo",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=1fqctsbZo_-trw_Iw0iHlQofwGoGYYKd5",
                        referencias: [
                            {
                            name: "Lista-de-exercícios_03 - Recursos minerais no Brasil e no mundo",
                            link: "https://drive.google.com/open?id=1I7lRDl37N9avqIedqAH7qmG80hsCLdxQ"
                            },
                            {
                            name: "Vídeo_01 - Recursos minerais do Brasil",
                            link: "https://www.youtube.com/watch?v=pnBUBNPxMLI&feature=youtu.be"
                            }
                        ],
                        exercicios: {
                            fixacao: [],
                            propostos: [
                            {
                                name: "Lista-de-exercícios_03 - Recursos minerais no Brasil e no mundo",
                                link: "https://drive.google.com/open?id=1I7lRDl37N9avqIedqAH7qmG80hsCLdxQ"
                            }
                            ],
                            discursivos: ""
                        }
                    },
                    {
                        name: "Aula_04 - Geomorfologia e escalas de unidades geomorfológicas",
                        hyperlink: true,
                        material: "https://drive.google.com/open?id=1LBNGp4x4a5eDF8B0UzPBuBNW6TzvARkm",
                        referencias: [
                          {
                            name: "Lista-de-exercícios_04 - Geomorfologia e escalas de unidades geomorfológicas",
                            link: "https://drive.google.com/open?id=1OVZbpxFuNv6mZCWqu3hzglBfWi0ZJbPk"
                          },
                          {
                            name: "Leitura_02 - Para Entender a Terra - Cap 10",
                            link: "https://drive.google.com/open?id=11_I0js6el6eBcVH4MKxhW5CVFXyb6M21"
                          },
                          {
                            name: "Leitura_03 - Para Entender a Terra - Cap 11",
                            link: "https://drive.google.com/open?id=1ystXZ5r7A1KLlB0zMrj2it9NR416wmJP"
                          },
                          {
                            name: "Leitura_04 - Apostila Poliedro - págs 53 a 99",
                            link: "https://drive.google.com/open?id=1AeyRhVuUfvrmKg2UPnZ_AW6_eWP8Kw5K"
                          },
                          {
                            name: "Vídeo_01 - Geologia e geomorfologia",
                            link: "https://www.youtube.com/watch?v=eNC-NXx1pUw"
                          }
                        ],
                        exercicios: {
                          fixacao: [],
                          propostos: [
                            {
                              name: "Lista-de-exercícios_04 - Geomorfologia e escalas de unidades geomorfológicas",
                              link: "https://drive.google.com/open?id=1OVZbpxFuNv6mZCWqu3hzglBfWi0ZJbPk"
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