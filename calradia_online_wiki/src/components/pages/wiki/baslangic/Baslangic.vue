<template>
    <div class="mainSpyContainer">
        <Nufus></Nufus>
        <Moral></Moral>
        <Istıkrar></Istıkrar>
        <DepoKapasitesi></DepoKapasitesi>
        <KoyEkonomisi></KoyEkonomisi>
        <KesifMerkezi></KesifMerkezi>
    </div>
</template>

<script>
    import Nufus from './Nufus';
    import Moral from './Moral';
    import Istıkrar from './Istıkrar';
    import DepoKapasitesi from './DepoKapasitesi';
    import KoyEkonomisi from './KoyEkonomisi';
    import KesifMerkezi from './KesifMerkezi';

    export default {
        components: {
            Nufus, Moral, Istıkrar, DepoKapasitesi, KoyEkonomisi,KesifMerkezi
        }
    }
</script>



