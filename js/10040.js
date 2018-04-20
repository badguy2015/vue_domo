var vm = new Vue({
	el:"#app-5",
	data:{
		message:'AbCdE',
	},
	methods: {
		// var _that = this;
    	clickme:function () {
		      		this.message = this.message.split('').reverse().join('');
    			}
  }
});