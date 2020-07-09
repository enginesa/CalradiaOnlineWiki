<template>
  <div id="app">
    <AppHeader></AppHeader>
    <Home></Home>


  </div>
</template>


<script>


  import AppHeader from './components/paylasilmis/AppHeader';
  import Home from './views/Home';
  export default {

    components:{
      AppHeader,
      Home,
    }

  }
</script>

<style>

  body{
    background: url("./assets/images/repeat1.jpg");
  }


  .wt_section{
    text-align: center;
    background: url("./assets/images/repeat2.jpg");
    width: 100%;
    height: 24px;
    border: 1px solid #B8B2A9;
    line-height: 17px;
  }
</style>
