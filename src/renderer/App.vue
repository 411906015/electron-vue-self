<template>
    <div id="app">
        <router-view></router-view>
        <test1></test1>
    </div>
</template>

<script>
    import test1 from './components/testPage/test1'
    export default {
        name: 'electron-vue-self',
        components:{
            test1
        }
    }
    console.log(12323432);
</script>

<style>
    /* CSS */
</style>
