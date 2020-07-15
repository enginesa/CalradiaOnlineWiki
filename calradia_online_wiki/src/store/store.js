import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        spyContent: [
            //yeni oyuncular
            {
              name: "Yeni Oyuncular",
                mainContent:[
                    {
                        key:"Baslangic",
                        name: "Başlangıç",
                        comment: "Başalngıç için burası iyi yapılmış",
                        subContent: [
                            {
                                key:"Nufus",
                                name: "Nüfus",
                                comment: "",
                            }, {
                                key:"Moral",
                                name: "Moral",
                                comment: "",
                            },{
                                key:"Istıkrar",
                                name: "İstikrar",
                                comment: "",
                            },
                            {
                                key:"Ticaret",
                                name: "Ticaret",
                                comment: "",
                            }
                        ]
                    },
                ],
            },
            //birlik işlemleri
            {
                name: "Birlik İşemleri",
                mainContent:[
                    {
                        key:"Klan",
                        name: "Klan",
                        comment: "Başalngıç için burası iyi yapılmış",
                        subContent: [
                            {
                                key:"Klan-Ozellikleri",
                                name: "Özellikler",
                                comment: "",
                            },
                            {
                                key:"Klan-Rolleri",
                                name: "Roller",
                                comment: "",
                            } ,{
                                key:"Klan-Diplomasi",
                                name: "Diplomasi",
                                comment: "",
                            }
                        ]
                    },
                    {
                        key:"Hane",
                        name: "Hane",
                        comment: "Başalngıç için burası iyi yapılmış",
                        subContent: [
                            {
                                key:"Ortalat",
                                name: "Orta Alt",
                                comment: "temel olarak ",
                            }
                        ]
                    }
                ],
            },

        ]

    },
    getters: {
        getSpyContent(state) {
            return state.spyContent;
        }
    },
    mutations: {
        setSpyContent(){
            console.log("geldii");
        }
    },
    actions: {},

})

export default store