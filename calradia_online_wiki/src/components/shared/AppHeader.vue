<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="bgRed mainNavbar" fixed="top">

            <b-navbar-toggle target="" v-b-toggle.sidebar-backdrop></b-navbar-toggle>

            <router-link tag="b-navbar-brand" class="navbarLogo mx-auto" :to="{ name: 'Ana Sayfa'}" exact>
                <img src="../../assets/images/logo.png" width="54">
            </router-link>


            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <router-link tag="b-nav-item" active-class="active" :to="{ name: item.urlName}" :exact="item.isExact" v-for="(item,index) in getNavbarItem" :key="index">
                        {{item.name}}
                    </router-link>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'getNavbarItem',
            ]),

        },

    }
</script>

<style>
    .mainNavbar{
        padding: 0 5px !important;
        box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
    }
    .mainNavbar .navbarLogo{
        margin-right: 0;
    }
    .navbar-toggler{
        position: absolute;
    }
</style>