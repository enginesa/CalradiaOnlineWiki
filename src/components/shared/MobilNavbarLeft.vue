<template>

    <b-sidebar
            id="sidebar-backdrop"
            title="Calradia Online"
            backdrop
            shadow>
        <div class="px-3 py-2">
            <nav class="navbarLeft mobilNavbarLeft">
                <b-nav pills vertical>

                    <router-link tag="b-nav-item" class="ml-3" active-class="active" :to="{ name: item.urlName}"
                                 :exact="item.isExact" v-for="(item,index) in getNavbarItem" :key="index">
                        {{item.name}}
                    </router-link>

                </b-nav>

            </nav>


            <!--            <NavbarLeft v-if="$route.fullPath==='/'"> </NavbarLeft>-->
            <component :is="selectedComponent"></component>
        </div>
    </b-sidebar>
</template>

<script>
    // import NavbarLeft from './NavbarLeft';
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                selectedComponent: ""
            }
        },
        components: {
            NavbarLeft: () => import('./NavbarLeft'),

        },
        computed: {
            ...mapGetters([
                'getNavbarItem',
            ]),

        },
        methods:{
          mobilNavbarControl(){
              // if (this.$route.fullPath === '/wiki') this.selectedComponent = 'NavbarLeft';
              // else if(this.$route.fullPath ==='/') this.selectedComponent='';
              this.selectedComponent='NavbarLeft';
          }
        },
        created() {
            this.mobilNavbarControl();

        },
        watch: {
            '$route.fullPath': function () {
this.mobilNavbarControl();

            }
        }
    }
</script>

<style scoped>
    .navbarLeft {
        position: unset !important;
        padding-left: 15px;
    }

</style>