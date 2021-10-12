<template>
	<div id="allmap"></div>
</template>

<script>
export default {
	data () {
    	return{

        }
	},
  	methods:{
		start(){
			// var map = new BMap.Map("allmap");    // 创建Map实例
			// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
			// //添加地图类型控件
			// map.addControl(new BMap.MapTypeControl({
			// 	mapTypes:[
			// 		BMAP_NORMAL_MAP,
			// 		BMAP_HYBRID_MAP
			// 	]}));	  
			// map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
			// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		}
	},
	created(){
	
	},
	mounted() {
		//console.log("mounted:start map")
		this.start();
		//console.log("mounted:start map:end")
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ShowPageChild2{
    width: 100%;
    height: 950px;
    background-color:sienna;
}

.body{
	margin: 0;
	padding: 0;
}

</style>
