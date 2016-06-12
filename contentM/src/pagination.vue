<script>
	export default {
		props: ['cur', 'all', 'listall'],
        data: function(){
            
        },
        computed: {
            indexs: function(){
              var left = 1
              var right = this.all
              var ar = [] 
              if(this.all>= 11){
                if(this.cur > 5 && this.cur < this.all-4){
                        left = this.cur - 5
                        right = this.cur + 4
                }else{
                    if(this.cur<=5){
                        left = 1
                        right = 10
                    }else{
                        right = this.all
                        left = this.all -9
                    }
                }
             }
            while (left <= right){
                ar.push(left)
                left ++
            }   
            return ar
           }
        },
        methods: {
            btnClick: function(data){
                if(data != this.cur){
                    this.cur = data 
                    this.$dispatch('btn-click',data) 
                }
            }
        }
    }
</script>

<template>
	<div class="pageBar">
        <ul>
       		<a v-if="cur!=1" v-on:click="cur--">上一页</a>
        	<template v-for="index in indexs">
            <a v-on:click="btnClick(index)" v-bind:class="{ active: cur == index}">{{ index }}</a>
            </template> 
            <a v-if="cur!=all" v-on:click="cur++">下一页</a>
            <span>共<b>{{all}}</b>页&emsp;<b>{{listall}}</b>项</span>
        </ul>
    </div>
</template>

<style lang="less">
	.pageBar{
		margin-top: 20px;

		a{
			font-size: 14px;
			min-width: 25px;
			box-sizing: border-box;
			display: inline-block;
			padding: 1px 5px;
			margin:0 5px 0 0;
			border:1px solid #ddd;
			cursor: pointer;
			color: #666;	

			.active{
				background-color: #63a8eb;
				border: 1px solid #63a8eb;
				color: white;
			}
		}

		a:hover{
			background-color: #63a8eb;
			border: 1px solid #63a8eb;
			color: white;
		}
	}

</style>