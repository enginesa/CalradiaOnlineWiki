<template>
    <b-container fluid>
        <b-row>
            <b-col cols="3">
                <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column navbarLeft">


                    <b-nav pills vertical v-b-scrollspy="200">

                        <div class="navbarLeftHeader" v-for="(item,index) in getSpyContent" :key="index">

                            <b-navbar-brand>{{item.name}}</b-navbar-brand>

                            <router-link tag="li" :to="{ name: 'WikiKey', params: { key: item2.key }}"
                                         v-for="(item2,index2) in item.mainContent" :key="index2">
                                <a :class="{active:isSpyContent(item2.key)}"> {{item2.name}}</a>

                                <b-nav pills vertical v-if="item2.subContent && isSpyContent(item2.key)">
                                    <b-nav-item class="ml-3 my-1" :href="'#'+item3.key"
                                                v-for="(item3,index3) in item2.subContent" :key="index3">
                                        {{item3.name}}
                                    </b-nav-item>
                                </b-nav>

                            </router-link>

                        </div>

                    </b-nav>
                </b-navbar>
            </b-col>

            <b-col cols="6" offset-md="1">
                <b-breadcrumb :items="topRoadItems"></b-breadcrumb>

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
            Default: () => import("../components/pages/wiki/Default"),
            Baslangic: () => import("../components/pages/wiki/baslangic/Baslangic"),

            Klan: () => import("../components/pages/wiki/Klan/Klan"),





        },
        data() {
            return {
                urlKey: '',
                selectedComponent: 'Default',
                selectedSpyIndex:'',
                topRoadItems: [
                    {
                        text: 'Ana Sayfa',
                        to: {name: "Home"}

                    },
                    {
                        text: 'Wiki',
                        to: {name: "Wiki"}
                    }

                ]

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
                this.selectedComponent = this.urlKey;

                if(this.urlKey)this.selectedSpyIndex= this.getOneKeySpyContent();
            },
            breadCrumbChange() {
                if (this.urlKey && this.topRoadItems.length === 3) this.topRoadItems.pop();

                if (this.urlKey && this.topRoadItems.length === 2) {
                    var urlInfo = this.getOneKeySpyContent();

                    this.topRoadItems.push({
                        text: urlInfo.name,
                        active: false
                    })
                } else if (!this.urlKey && this.topRoadItems.length === 3) {
                    this.topRoadItems.pop();
                }

            },
            getOneKeySpyContent() {
                //url parama göre bilgiyi getirir
                var content = this.getSpyContent;

                var par = "";

                if (this.urlKey) {
                    for (var i = 0; i < content.length; i++) {

                        var mainContent = content[i]["mainContent"] ? content[i]["mainContent"] : "";

                        if (mainContent) {
                            for (var j = 0; j < mainContent.length; j++) {

                                if (this.urlKey === mainContent[j]["key"]) {
                                    par = mainContent[j];
                                    break;
                                }

                            }
                        }
                    }
                }

                return par;
            }

        },
        created() {
            // this.$root.$on("bv::scrollspy::activate", this.onActivate);
            this.routeGetKey();
            this.breadCrumbChange();


        },
        watch: {
            '$route.params.key': function () {
                this.routeGetKey();
                this.breadCrumbChange();

            },
        }

    }
</script>

<style scoped>
    .breadcrumb {
        background-color: transparent !important;
        margin-top: 80px;
        margin-bottom: 0px;
        padding: 0;
    }
</style>

