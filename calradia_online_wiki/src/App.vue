<template>
    <div id="app">
        <!--<h1>geldi</h1>-->
        <AppHeader></AppHeader>
        <router-view></router-view>

    </div>
</template>


<script>
    require('./assets/js/standart');

    // const $=window.$;

    import AppHeader from './components/shared/AppHeader';

    export default {
        components: {
            AppHeader,
        },

        mounted() {

        }

    }
</script>

<style>
    @import './assets/css/style.css';
    @import './assets/css/responsive.css';

</style>