<template>
	<div class="ShowPageChild1">
        <svg>
        </svg>
	</div>		
</template>


<script>
import * as d3 from 'd3';

export default {
	data () {
    	return{
            width: 400,
            height: 400,
            padding: {left:30, right:30, top:20, bottom:20},
            edges: [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
                    { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
                    { source : 1 , target: 5 } , { source : 1 , target: 6 } ],
            nodes: [ { name: "桂林" }, { name: "广州" },
              { name: "厦门" }, { name: "杭州" },
              { name: "上海" }, { name: "青岛" },
              { name: "天津" } ],
        }
	},
  	methods:{
		draw() {
            var svg = d3.select("body div.ShowPageChild1")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("fill", "red")
            .style("border", "1px dashed #ccc");

            console.log('svg', svg._groups[0][0])
            console.log('select', d3.select("body div.ShowPageChild1"))
            console.log('force', d3.event)

            var force = d3.forceSimulation(this.nodes)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(this.edges))
            .force(
                "center",
                d3.forceCenter().x(this.width / 2).y(this.height / 2)
            );

            var edges = svg
                .selectAll("line")
                .data(this.edges)
                .enter()
                .append("line")
                .style("stroke", "#ccc")
                .style("stroke-width", 1);
        
            var nodes = svg
                .selectAll("circle")
                .data(this.nodes)
                .enter()
                .append("circle")
                .attr("r", 6)
                .style("fill", function(d, i) {});
        
            var svg_texts = svg.selectAll("text")
                .data(this.nodes)
                .enter()
                .append("text")
                .style("fill", "black")
                .attr("dx", 20)
                .attr("dy", 8)
                .text(function(d){
                return d.name;
            });
                
            force.on("tick", 
            function() {
                edges
                .attr("x1", function(d) {
                    return d.source.x;
                })
                .attr("y1", function(d) {
                    return d.source.y;
                })
                .attr("x2", function(d) {
                    return d.target.x;
                })
                .attr("y2", function(d) {
                    return d.target.y;
                });
                nodes.attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                })
                svg_texts.attr("x", function(d){ return d.x; })
                       .attr("y", function(d){ return d.y; });
            }); 
        }
	},
	created(){
	
	},
    mounted() {
        //在 body 里添加一个 SVG 画布   
        console.log("ttt")
        
        this.draw();
        
        console.log("end");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

.ShowPageChild1{
    width: 100%;
    height: 950px;
    /* background-color: royalblue; */
}

.body{
	margin: 0;
	padding: 0;
}
	
</style>
