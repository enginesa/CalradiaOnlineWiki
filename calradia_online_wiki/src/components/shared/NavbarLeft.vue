<template>
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
</template>

<script>


    import wikiMixins from '../../mixins/wikiMixins';



    export default {
        mixins: [wikiMixins],

        data() {
            return {
                // selectedComponent: 'Default',
                selectedComponent: 'Default',


            }
        },

        methods: {
            // onActivate(target) {
            //     window.history.pushState("", "", target);
            // },
            isSpyContent(key) {
                return this.urlKey === key
            },




        },
        created() {
            // this.$root.$on("bv::scrollspy::activate", this.onActivate);
            this.routeGetKey();
            this.breadCrumbChange();
        },


    }
</script>

