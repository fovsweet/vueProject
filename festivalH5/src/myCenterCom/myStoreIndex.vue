<script>
	var count = 0;
	export default {
	  el:'#app',
	  data: {
	    data: [],
	    busy: false
	  },
	  ready(){
	  	for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
	  },
	  methods: {
	    loadMore: function() {
	      this.busy = true;
	      setTimeout(() => {
	        for (var i = 0, j = 10; i < j; i++) {
	          this.data.push({ name: count++ });
	        }
	        this.busy = false;
	      }, 1000);
	    }
	  }
	}
</script>

<template>
<div v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
  <ul>
  	<li v-for="dat in data">{{dat.name}}</li>
  </ul>
</div>
</template>

<style lang="less">
	ul,li{
		margin:0;
		padding: 0;
		list-style: none;
	}
	li{
		width: 100%;
		height: 2rem;
		display: flex;
		-webkit-align-items:center;
	}
</style>

