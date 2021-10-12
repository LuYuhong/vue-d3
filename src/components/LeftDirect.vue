<template>
	<div class = "topheader">
        <ul id="leftUl1" @click="changeShowPageType(1)">1</ul>
        <ul id="leftUl2" @click="changeShowPageType(2)">2</ul>
        <ul id="leftUl3" @click="changeShowPageType(3)">3</ul>
        <ul id="leftUl4" @click="changeShowPageType(4)">4</ul>
	</div>
  
</template>



<script>
import eventBus from '@/eventBus.js'


export default {
    type: 1,
    data () {
        return {
            msg: 'header-------------------',
            type:2
        }
    },
    methods: {
        changeShowPageType(message){
            this.type = message;
            eventBus.$emit('changeShowPageType', this.type);
            for(var i = 1; i <= 4; i++){
                var element = document.getElementById("leftUl" + i);
                if(this.type == i){
                    element.className = 'ulSelect';
                }else{
                    element.className = 'ulNotSelect';
                }
            }
        }
    },
    mounted(){
        for(var i = 1; i <= 4; i++){
            if(i == 1){
                var element = document.getElementById("leftUl1");
                element.className = 'ulSelect';
            }else{
                var element = document.getElementById("leftUl" + i);
                element.className = 'ulNotSelect';
            }
        }
    },
    created(){
       
        
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

.ulNotSelect{
    width: 100%;
    height: 50px;
    font-size: 20px;
    text-align: center;
    background-color:sandybrown;
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

.ulSelect{
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
