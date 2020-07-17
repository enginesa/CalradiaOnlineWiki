import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        spyContent: [
            //yeni oyuncular
            {
                name: "Yeni Oyuncular",
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
                                key: "Ticaret",
                                name: "Ticaret",
                                comment: "",
                            },
                            {
                                key: "Depo-Kapasitesi",
                                name: "Depo Kapasitesi",
                                comment: "",
                            },
                            {
                                key: "Koy-Ekonomisi",
                                name: "Köy Ekonomisi",
                                comment: "",
                            }, {
                                key: "Kesif-Merkezi",
                                name: "Keşif Merkezi",
                                comment: "",
                            },
                        ]
                    },
                ],
            },
            //birlik işlemleri
            {
                name: "Birlik İşemleri",
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
                            },{
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
                    },     {
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

                ],
            }

        ]

    },
    getters: {
        getSpyContent(state) {
            return state.spyContent;
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