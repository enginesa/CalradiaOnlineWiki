<template>
    <div class="mainSpyContainer">


        <Kale></Kale>
        <Sehir></Sehir>
        <KaleSehirBinalari></KaleSehirBinalari>
        <MulkKapasitesi></MulkKapasitesi>

    </div>
</template>

<script>
    import Kale from './Kale';
    import Sehir from './Sehir';
    import KaleSehirBinalari from './KaleSehirBinalari';
    import MulkKapasitesi from './MulkKapasitesi';

    export default {
        components: {
            Kale,Sehir,KaleSehirBinalari,MulkKapasitesi,
        }
    }
</script>



