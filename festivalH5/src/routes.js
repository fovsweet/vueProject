export default function (router) {
	router.map({
		'*':{
			name:'default',
			component:require('./listInfo.vue'),
		},

		'/list':{
			name:'list',
			component:require('./listInfo.vue')
		},
		'/active':{
			name:'active',
			component:require('./activeInfo.vue')
		},
		'/prize':{
			name:'prize',
			component:require('./prizeInfo.vue')
		 }
		/*'/prize':{
			name:'prize',
			component:function (resolve) {
		      require(['./prizeInfo.vue'], resolve)
		    }
		}*/

	})
}