import Vue from 'vue';
import mystore from './myStoreIndex';
import cacl from 'cacl';
import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';
//import vueDrapLoad from 'vue-drapload';

//Vue.use(vueDrapLoad,config);
Vue.use(infiniteScroll)
Vue.use(lazyload)
new Vue(mystore);

