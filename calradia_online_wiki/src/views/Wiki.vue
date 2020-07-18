<template>
    <b-container fluid>
        <b-row>

            <b-col cols="3" class="d-none d-md-block d-lg-block .d-xl-none">
                <NavbarLeft></NavbarLeft>

            </b-col>

            <b-col sm="12" md="7" lg="6" offset-md="1">
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
    import NavbarLeft from '../components/shared/NavbarLeft';


    import wikiMixins from '../mixins/wikiMixins';


    export default {
        mixins: [wikiMixins],
        components: {
            SpyContainer,
            NavbarLeft,
            Default: () => import("../components/pages/wiki/Default"),
            Baslangic: () => import("../components/pages/wiki/baslangic/Baslangic"),
            Sandik: () => import("../components/pages/wiki/sandik/Sandik"),
            YeniKoy: () => import("../components/pages/wiki/yeniKoy/YeniKoy"),
            Klan: () => import("../components/pages/wiki/klan/Klan"),
            Hane: () => import("../components/pages/wiki/hane/Hane"),
            Mulkler: () => import("../components/pages/wiki/mulkler/Mulkler"),
            KesifEri: () => import("../components/pages/wiki/kesifEri/KesifEri"),
            Tuccar: () => import("../components/pages/wiki/tuccar/Tuccar"),
            Haydutlar: () => import("../components/pages/wiki/haydutlar/Haydutlar"),
            Bosslar: () => import("../components/pages/wiki/bosslar/Bosslar"),
            ZafereUlasanYol: () => import("../components/pages/wiki/zafereUlasanYol/ZafereUlasanYol"),
            Birlikler: () => import("../components/pages/wiki/birlikler/Birlikler"),
            SavasDuzeni: () => import("../components/pages/wiki/savasDuzeni/SavasDuzeni"),
            SaldiriYonu: () => import("../components/pages/wiki/saldiriYonu/SaldiriYonu"),
            Insaat: () => import("../components/pages/wiki/insaat/Insaat"),
            Taktikler: () => import("../components/pages/wiki/taktikler/Taktikler"),
            Premium: () => import("../components/pages/wiki/premium/Premium"),

        },
        data() {
            return {

                selectedComponent: 'Default',


            }
        },




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

