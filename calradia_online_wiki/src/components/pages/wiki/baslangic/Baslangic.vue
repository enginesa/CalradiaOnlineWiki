<template>
    <div class="mainSpyContainer">
        <Nufus></Nufus>
        <Moral></Moral>
        <Istıkrar></Istıkrar>
        <KoyEkonomisi></KoyEkonomisi>
    </div>
</template>

<script>
    import Nufus from './Nufus';
    import Moral from './Moral';
    import Istıkrar from './Istıkrar';
    import KoyEkonomisi from './KoyEkonomisi';

    export default {
        components: {
            Nufus, Moral, Istıkrar, KoyEkonomisi
        }
    }
</script>



