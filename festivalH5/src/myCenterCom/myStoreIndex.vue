<script>
	export default {
		el:'#app'
	}
</script>

<template>
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
	  <ul>
	    <li v-for="item in list"></li>
	  </ul>
</mt-loadmore>
</template>

