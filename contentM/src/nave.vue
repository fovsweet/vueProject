<script>
	export default{
		props:['tit','links']
	}
</script>

<template>
	<h1 class="page_header">{{tit}}</h1>
	<div class="tab">
		<template v-for="entry in links">
			<a href="{{entry.hr}}" class="{{entry.act}}">{{entry.link}}</a>
		</template>
	</div>
</template>

<style lang='less'>
</style>