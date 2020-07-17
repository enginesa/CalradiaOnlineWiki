<template>
    <div class="mainSpyContainer">
        <BinaSayilari></BinaSayilari>
        <DepoKapasitesi></DepoKapasitesi>
        <KesifMerkezi></KesifMerkezi>
        <TicaretMerkezi></TicaretMerkezi>
    </div>
</template>

<script>
    import BinaSayilari from './BinaSayilari';
    import DepoKapasitesi from './DepoKapasitesi';
    import KesifMerkezi from './KesifMerkezi';
    import TicaretMerkezi from './TicaretMerkezi';

    export default {
        components: {
            BinaSayilari, DepoKapasitesi, KesifMerkezi,TicaretMerkezi
        }
    }
</script>



