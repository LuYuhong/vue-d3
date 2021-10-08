<template>
	<div class = "topheader">
        <ul @click="changeShowPageType(1)">1</ul>
        <ul @click="changeShowPageType(2)">2</ul>
        <ul @click="changeShowPageType(3)">3</ul>
        <ul @click="changeShowPageType(4)">4</ul>
	</div>
  
</template>



<script>
import eventBus from '@/eventBus.js'


export default {
    type: 2,
    data () {
        return {
            msg: 'header-------------------',
            type:2
        }
    },
    methods: {
        changeShowPageType(message){
            eventBus.$emit('changeShowPageType', message);
            console.log(this.type);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topheader{
	width: 15%;
	height: 950px;
	background-color: cyan;
    float: left;
}

.topheader ul{
    width: 100%;
    height: 50px;
    font-size: 20px;
    text-align: center;
    background-color: red;
    padding-inline-start: 0;
    margin-block-start:0;
    margin-block-end:0;
    line-height: 50px;
    display: table;
    margin: 0 auto;

    border-color:#000;
    border-width: 2px;
    border-style: solid;
    
}
.body{
	margin: 0;
	padding: 0;
}

</style>
