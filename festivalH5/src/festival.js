import Vue from 'vue';
import fesIndex from './fesIndex';
import cacl from 'cacl';
import vueRouter from 'vue-router';
import configRouter from './routes';

//var Vm = new Vue(fesIndex);
const app = Vue.extend(fesIndex);

Vue.use(vueRouter);

const router = new vueRouter({})

configRouter(router);
router.start(app,'#app')