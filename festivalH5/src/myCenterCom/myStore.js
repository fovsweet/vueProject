import Vue from 'vue';
import mystore from './myStoreIndex';
import cacl from 'cacl';
import infinit from 'vue-infinite-scroll';
//import vueDrapLoad from 'vue-drapload';


//Vue.use(vueDrapLoad,config);
Vue.use(infinit)
new Vue(mystore);

