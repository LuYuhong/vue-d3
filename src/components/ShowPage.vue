<template>
	<div>
		<show-page-child-1 v-show="type === 1"/>
		<show-page-child-2 v-show="type === 2"/>
		<show-page-child-3 v-show="type === 3"/>
		<show-page-child-4 v-show="type === 4"/>
	</div>
	
			
</template>

<script>
import eventBus from '@/eventBus.js'
import ShowPageChild1 from '@/components/ShowPageChild1'
import ShowPageChild2 from '@/components/ShowPageChild2'
import ShowPageChild3 from '@/components/ShowPageChild3'
import ShowPageChild4 from '@/components/ShowPageChild4'

export default {
  	components: { ShowPageChild1, ShowPageChild2,ShowPageChild3,ShowPageChild4},
	data () {
    	return {
			con:"+关注",
			flag:false,
			type: 1,
    	}
	},
  	methods:{
		enter:function(){
			this.flag = !this.flag;
			if(this.flag == true){
				this.con = "已关注";
			}else if(this.flag == false){
				this.con = "+关注";
			}
		}
	},
	created(){
		eventBus.$on('changeShowPageType', message =>{
			console.log("message = ", message);
			this.type = message;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topheader{
	width: 100%;
	height: 950px;
	/* background-color:darkgoldenrod; */
}
.body{
	margin: 0;
	padding: 0;
}

</style>
