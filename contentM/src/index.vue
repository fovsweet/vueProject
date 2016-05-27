<script>
    import nave from './nave';
    import sidebar from './sidebar';
    import listinfo from './listInfo';
    import catedia from './dialogAddcate';
    import confirmdia from './confirmDia';
    import store from '../vuex/store.js';
    import { initCateList } from '../vuex/actions.js'
    export default {
        store,
        el: '#app',
        vuex: {
            getters: {
              navData: state => state.nave
            },
            actions:{
                initCateList
            }
        },
        components: {
            nave,sidebar,listinfo,catedia,confirmdia
        },
        created (){
            this.initCateList()
        }
    };

</script>

<template>
   <div class="container clearfix">
       <div id="setting">
           <nave :tit="navData.indexTitle" :links="navData.links"></nave>
       </div>
       <div class="info">
           <sidebar></sidebar>
           <listinfo></listinfo>
       </div>
       <catedia></catedia>
       <confirmdia></confirmdia>
   </div> 
</template>

<style lang="less">
   .btn-default{outline: none;}
   .info{display: flex; margin-top: 20px;}
   .info .info-list{width: auto; flex: 1; height: 200px; padding-top: 10px }
   .info .sideBar{width:230px;  margin-right: 20px; padding-right: 10px; padding-top: 10px; border-right: 1px solid #ddd}
</style>