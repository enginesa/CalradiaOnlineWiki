<template>
    <div class="mainSpyContainer">
        <Nufus></Nufus>
        <Moral></Moral>
        <Istıkrar></Istıkrar>
        <Ticaret></Ticaret>
    </div>
</template>

<script>
    import Nufus from './Nufus';
    import Moral from './Moral';
    import Istıkrar from './Istıkrar';
    import Ticaret from './Ticaret';

    export default {
        components: {
            Nufus, Moral, Istıkrar, Ticaret
        }
    }
</script>



