import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        navbarItem:[
            {
                name: "Ana Sayfa",
                urlName:"Ana Sayfa",
                isExact:true,
            },
            {
                name: "Wiki",
                urlName:"Wiki",
                isExact:false,
            }
        ],


        spyContent: [
            //Köy Hakkında
            {
                name: "Genel",
                mainContent: [
                    {
                        key: "Baslangic",
                        name: "Başlangıç",
                        comment: "",
                        subContent: [
                            {
                                key: "Nufus",
                                name: "Nüfus",
                                comment: "",
                            }, {
                                key: "Moral",
                                name: "Moral",
                                comment: "",
                            }, {
                                key: "Istıkrar",
                                name: "İstikrar",
                                comment: "",
                            },
                            {
                                key: "Koy-Ekonomisi",
                                name: "Köy Ekonomisi",
                                comment: "",
                            }
                        ]
                    },
                    {
                        key: "Insaat",
                        name: "İnşaat",
                        comment: "",
                        subContent: [
                            {
                                key: "Bina-Sayilari",
                                name: "Bina Sayıları",
                                comment: "",
                            },
                            {
                                key: "Depo-Kapasitesi",
                                name: "Depo Kapasitesi",
                                comment: "",
                            },
                            {
                                key: "Kesif-Merkezi",
                                name: "Keşif Merkezi",
                                comment: "",
                            },{
                                key: "Ticaret-Merkezi",
                                name: "Ticaret Merkezi",
                                comment: "",
                            },


                        ]
                    },
                    {
                        key: "Sandik",
                        name: "Sandık",
                        comment: "",
                        subContent: [
                            {
                                key: "Turler",
                                name: "Türler",
                                comment: "",
                            },
                        ]
                    },        {
                        key: "Yeni-Koy",
                        name: "Yeni Köy",
                        comment: "",
                        subContent: [
                            {
                                key: "Bos-Arazi",
                                name: "Boş Arazi",
                                comment: "",
                            },



                        ]
                    },
                ],
            },

            //Harita Üzerinde İşlemler
            {
                name: "Harita Üzerinde İşlemler",
                mainContent: [
                    {
                        key: "Mulkler",
                        name: "Mülkler",
                        comment: "",
                        subContent: [
                            {
                                key: "Kale",
                                name: "Kale",
                                comment: "",
                            }, {
                                key: "Sehir",
                                name: "Şehir",
                                comment: "",
                            }, {
                                key: "Kale-Sehir-Binalari",
                                name: "Kale ve Şehir Binaları",
                                comment: "",
                            }, {
                                key: "Mulk-Kapasitesi",
                                name: "Mülk Kapasitesi",
                                comment: "",
                            },

                        ]
                    },
                    {
                        key: "Kesif-Eri",
                        name: "Keşif Eri",
                        comment: "",
                        subContent: [
                            {
                                key: "kEgit",
                                name: "Eğit",
                                comment: "",
                            },
                            {
                                key: "Casusluk",
                                name: "Casusluk",
                                comment: "",
                            }

                        ]
                    }, {
                        key: "Tuccar",
                        name: "Tüccar",
                        comment: "",
                        subContent: [
                            {
                                key: "tEgit",
                                name: "Eğit",
                                comment: "",
                            }

                        ]
                    },
                    {
                        key: "Haydutlar",
                        name: "Haydutlar",
                        comment: "",
                        subContent: [
                            {
                                key: "hTurler",
                                name: "Türler",
                                comment: "",
                            }

                        ]
                    }, {
                        key: "Bosslar",
                        name: "Bosslar",
                        comment: "",
                        subContent: [
                            {
                                key: "bTurler",
                                name: "Türler",
                                comment: "",
                            }

                        ]
                    },

                ],
            },

            //birlik işlemleri
            {
                name: "Birlik İşlemleri",
                mainContent: [
                    {
                        key: "Zafere-Ulasan-Yol",
                        name: "Zafere Ulaşan Yol",
                        comment: "",
                        subContent: [
                            {
                                key: "Zafer",
                                name: "Zafer",
                                comment: "",
                            },
                        ]
                    },
                    {
                        key: "Klan",
                        name: "Klan",
                        comment: "",
                        subContent: [
                            {
                                key: "Klan-Ozellikleri",
                                name: "Özellikler",
                                comment: "",
                            },
                            {
                                key: "Klan-Rolleri",
                                name: "Roller",
                                comment: "",
                            }, {
                                key: "Klan-Diplomasi",
                                name: "Diplomasi",
                                comment: "",
                            }
                        ]
                    },
                    {
                        key: "Hane",
                        name: "Hane",
                        comment: "",
                        subContent: [
                            {
                                key: "Hakkinda",
                                name: "Hakkında",
                                comment: "",
                            },
                            {
                                key: "San-Yarisi",
                                name: "Şan Yarışı",
                                comment: "",
                            },
                            {
                                key: "Elenme",
                                name: "Elenme",
                                comment: "",
                            },
                            {
                                key: "Zafer",
                                name: "Zafer",
                                comment: "",
                            }
                        ]
                    }
                ],
            },

            //Savaş
            {
                name: "Savaş",
                mainContent: [
                    {
                        key: "Birlikler",
                        name: "Birlikler",
                        comment: "",
                        subContent: [
                            {
                                key: "Turler",
                                name: "Türler",
                                comment: "",
                            }, {
                                key: "Avantajlar",
                                name: "Avantajlar",
                                comment: "",
                            }

                        ]
                    },
                    {
                        key: "Savas-Duzeni",
                        name: "Savaş Düzeni",
                        comment: "",
                        subContent: [
                            {
                                key: "Duzen",
                                name: "Düzen",
                                comment: "",
                            }

                        ]
                    }, {
                        key: "Saldiri-Yonu",
                        name: "Saldırı Yönü",
                        comment: "",
                        subContent: [
                            {
                                key: "Yon",
                                name: "Yön",
                                comment: "",
                            }

                        ]
                    }, {
                        key: "Taktikler",
                        name: "Taktikler",
                        comment: "",
                        subContent: [
                            {
                                key: "Turler-1",
                                name: "Türler",
                                comment: "",
                            }

                        ]
                    },


                ],
            },

            //Market
            {
                name: "Market",
                mainContent: [
                    {
                        key: "Premium",
                        name: "Premium",
                        comment: "",
                        subContent: [
                            {
                                key: "Ozellikler",
                                name: "Özellikler",
                                comment: "",
                            }

                        ]
                    },



                ],
            },
        ]

    },
    getters: {
        getSpyContent(state) {
            return state.spyContent;
        },
        getNavbarItem(state) {
            return state.navbarItem;
        }
    },
    mutations: {
        setSpyContent() {
            console.log("geldii");
        }
    },
    actions: {},

})

export default store