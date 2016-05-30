<script>
	import imgjcrop from './imgJcrop';
	import gallery from './gallery';
	import store from '../vuex/store.js';
	export default {
		vuex:{
			getters:{
				show:state => state.dialog.addimg
			},
		},
		data (){
			return {
				datas:store.state,
				currentView:'',
			}
		},
		 watch:{
			'datas.dialog.addimg':function(val,oldVal){
				if(val){
					this.currentView = 'imgjcrop'
				}else if(!val){
					this.currentView = ''
				}
			}
		},
		components:{
			imgjcrop,gallery
		},
		events: {
			'change-components': function(val) {
				this.currentView = val;
			}
		}
	}
</script>

<template>
	 <div style="z-index:9999" class="moimg-mask" v-show="show" transition="moimg">
	    <div class="modal-dialog moimg-wrapper">
	    <!-- 可脱离部分 start -->
			<components :is="currentView"></components>
		<!-- 可脱离部分 end -->
	    </div>
    </div>
</template>
<style lang="less">

</style>