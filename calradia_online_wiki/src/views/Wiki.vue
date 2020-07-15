<template>
    <b-container fluid>
        <b-row>
            <b-col cols="4">
                <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column navbarLeft">


                    <b-nav pills vertical v-b-scrollspy="75">

                        <div class="navbarLeftHeader" v-for="(item,index) in getSpyContent" :key="index">

                            <b-navbar-brand>{{item.name}}</b-navbar-brand>

                            <router-link tag="li" :to="{ name: 'WikiKey', params: { key: item2.key }}"
                                         v-for="(item2,index2) in item.mainContent" :key="index2">
                                <a :class="{active:isSpyContent(item2.key)}"> {{item2.name}}</a>

                                <b-nav pills vertical v-if="item2.subContent && isSpyContent(item2.key)">
                                    <b-nav-item class="ml-3 my-1" href="#item-1-1"
                                                v-for="(item3,index3) in item2.subContent" :key="index3">
                                        {{item3.name}}
                                    </b-nav-item>
                                </b-nav>

                            </router-link>

                        </div>

                    </b-nav>
                </b-navbar>
            </b-col>

            <b-col cols="8">
                <SpyContainer>
                    <keep-alive>
                        <component :is="selectedComponent"></component>
                    </keep-alive>
                </SpyContainer>

            </b-col>
        </b-row>
    </b-container>
</template>
<script>


    import SpyContainer from '../components/pages/SpyContainer';

    import {mapGetters} from 'vuex'

    export default {
        components: {
            SpyContainer,
            baslangic: () => import("../components/pages/wiki/baslangic"),
            orta: () => import("../components/pages/wiki/orta"),

        },
        data() {
            return {
                urlKey: '',
                selectedComponent: ''

            }
        },
        computed: {
            ...mapGetters([
                'getSpyContent',
            ]),

        },
        methods: {
            onActivate(target) {
                window.history.pushState("", "", target);
            },
            isSpyContent(key) {
                return this.urlKey === key
            },
            routeGetKey() {
                this.urlKey = this.$route.params.key;

                this.selectedComponent=this.urlKey;

                console.log(this.urlKey,"oluşturuldu")

            }

        },
        created() {
            // console.log(this.$root);
            this.$root.$on("bv::scrollspy::activate", this.onActivate);
            this.routeGetKey();
        },
        watch: {
            '$route.params.key': function () {
                this.routeGetKey();
            }
        }

    }
</script>

