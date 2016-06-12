import Vue from 'vue';
import mydrap from './myDrapIndex';
import cacl from 'cacl';
//import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';
import vueDrapLoad from 'vue-drapload';

 var config = {
    domUp: {                                                            // 上方DOM
      initialCall: function () {
        var me = this
        me.dom.innerHTML = '<div class="dropload-refresh">我的下拉</div>'
      },
      loadingCall: function () {
        var me = this
        me.dom.innerHTML = '<div class="dropload-load"><span class="loading"></span>拼命加载中...</div>'
      },
      loadEndCall: function () {
        var me = this
        me.dom.innerHTML = '<div class="dropload-load">总算完成了</div>'
      },
      pullingCall: function (_absMoveY) {
        var me = this
        if (_absMoveY <= me.distance) {
          // 下拉过程
          me.initialCall()
        } else if (_absMoveY > me.distance
                && _absMoveY <= me.distance * 2) {
          // 可以释放更新
          me.dom.innerHTML = '<div class="dropload-update">禽兽放开我</div>'
        }
      }
    }
  }
  Vue.use(vueDrapLoad, config)

//Vue.use(infiniteScroll)
Vue.use(lazyload)
new Vue(mydrap);

