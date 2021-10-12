<template>
	<div class="ShowPageChild3"> 	
      
	</div>	
</template>

<script>
export default {
	data () {
    	return{

        }
	},
  	methods:{
		start(){
			var arr = [1,2,3];
			arr.toString();
			console.log(arr);
		}
	},
	created(){
		this.start();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ShowPageChild3{
    width: 100%;
    height: 950px;
    background-color:thistle;
}

.body{
	margin: 0;
	padding: 0;
}

</style>
