import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Wiki from './../views/Wiki'

Vue.use(VueRouter)

const routes = [
    {path: '', component: Home, name: "Ana Sayfa"},
    // {path: '/wiki', component: Wiki,name:"Wiki"},

    {
        path: '/wiki/:key', component: Wiki, name: "WikiKey",realName:"Ana Sayfa",
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '/wiki',
                component: Wiki
                , name: "Wiki"
            }
        ]
    },
    {path: '*', redirect: {name: "Ana Sayfa"}}


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    }
})

export default router
