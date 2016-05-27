<script>
	import { closeDialog,delCateList } from '../vuex/actions.js';
	export default {
		vuex:{
			getters: {
              show: state => state.dialog.confirm,
              confirm:state => state.confirmDia
            },
            actions:{
            	closeDialog,delCateList
            }
		}
	}
</script>

<template>
	<div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
       <div class="modal-container">
            <div class="modal-head">
                <div class="modal-title"><slot name="header">{{confirm.title}}</slot></div>
                <span class="modal-close" @click="closeDialog('confirm')"></span>
            </div>
           <div class="modal-content">
                <slot name="body">{{confirm.tips}}</slot>
           </div>
           <div class="modal-foot">
                <button type="button" v-show="confirm.cancel"  class="btn-cancel" @click="closeDialog('confirm')">取&emsp;消</button>
                <button type="button" v-show="confirm.confirm"  class="btn-save" @click="delCateList(confirm.actions)">确&emsp;认</button>
           </div>
       </div>
    </div>
  </div>
</template>

<style lang="less">

.modal-container {
    width: 426px;
    margin: 0px auto;
    padding: 0px 30px 30px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-content {
    font-size: 14px;
    padding: 20px;
}
.modal-enter .modal-container,
.modal-leave .modal-container,
.moimg-enter .moimg-container,
.moimg-leave .moimg-container{
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
	}


</style>