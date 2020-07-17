<template>
    <div class="mainSpyContainer">
        <BinaSayilari></BinaSayilari>
        <DepoKapasitesi></DepoKapasitesi>
        <KesifMerkezi></KesifMerkezi>
    </div>
</template>

<script>
    import BinaSayilari from './BinaSayilari';
    import DepoKapasitesi from './DepoKapasitesi';
    import KesifMerkezi from './KesifMerkezi';

    export default {
        components: {
            BinaSayilari, DepoKapasitesi, KesifMerkezi
        }
    }
</script>



