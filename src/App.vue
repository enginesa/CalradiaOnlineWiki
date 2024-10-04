<template>
    <div id="app">
        <!--<h1>geldi</h1>-->


        <MobilNavbarLeft></MobilNavbarLeft>
        <AppHeader></AppHeader>

        <router-view></router-view>

    </div>
</template>


<script>
    require('./assets/js/standart');

    import AppHeader from './components/shared/AppHeader';

    import MobilNavbarLeft from './components/shared/MobilNavbarLeft';

    import wikiMixins from './mixins/wikiMixins';


    export default {
        mixins: [wikiMixins],
        metaInfo() {
            return {
                title: 'Calradia Online ' + this.metaTitle,
            }

        },
        data() {
            return {
                metaTitle: ""
            }
        },


        components: {
            AppHeader, MobilNavbarLeft
        },
        methods: {
            metaChange() {
                var urlContent = this.getOneKeySpyContent();

                if (urlContent.name) {
                    this.metaTitle = urlContent.name;
                } else {
                    this.metaTitle = this.$route.name;
                }
            }
        },

        created() {
            this.metaChange();

        },
        watch: {
            '$route.params': function () {

                this.metaChange();
            },
        }

    }


</script>

<style>
    @import './assets/css/style.css';
    @import './assets/css/responsive.css';

</style>