import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        spyContent: [
            {
              name: "Yeni Oyuncular",
                mainContent:[
                    {
                        key:"baslangic",
                        name: "Başlangıç",
                        comment: "Başalngıç için burası iyi yapılmış",
                        subContent: [
                            {
                                key:"temel",
                                name: "Temel",
                                comment: "temel olarak ",
                            }
                        ]
                    },
                    {
                        key:"orta",
                        name: "Orta",
                        comment: "Başalngıç için burası iyi yapılmış",
                        subContent: [
                            {
                                key:"ortalat",
                                name: "Orta Alt",
                                comment: "temel olarak ",
                            }
                        ]
                    }
                ],
            },
            {
                name:"test",
            }

        ]

    },
    getters: {
        getSpyContent(state) {
            return state.spyContent;
        }
    },
    mutations: {},
    actions: {},

})

export default store