<template>
    <div class="mainSpyContainer">

        <Ozellikler></Ozellikler>
        <Roller></Roller>
        <Diplomasi></Diplomasi>
    </div>
</template>

<script>
    import Ozellikler from './Ozellikler';
    import Roller from './Roller';
    import Diplomasi from './Diplomasi';

    export default {
        components: {
            Ozellikler, Roller, Diplomasi
        }
    }
</script>



