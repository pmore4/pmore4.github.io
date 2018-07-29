!(function (d3) {

$("bcontent").empty();


var margin = {top: 80, right: 20, bottom: 80, left:100},
    width = 1000 - margin.left ,
    height = 600 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .range([0, width-100]);

var y = d3.scaleLinear()
    .range([height, 0]);

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var cValue = function(d) { return d.GoodReadings;},
    color = d3.scaleLinear().domain([40, 65, 80]).range(["red", "gray", "green"]);
var xAxis = d3.axisBottom(x);



var yAxis = d3.axisLeft(y).ticks(16)
	.tickFormat(function (d,i){
		return [,42934,42931,42927,42912,42901,42887,42880,42876,42874,42396,42394,42390,42374,42370,42368,42363][i];
		});
		

		
var svg = d3.select("bcontent").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tooltip = d3.select("bcontent").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
	
d3.csv("DepthRange.csv", function(error, data) {
  if (error) throw error;

  // change string (from CSV) into number format
  data.forEach(function(d) {
    d.DepthRange = +d.DepthRange;
    d.Id = +d.Id;
	d.index = +d.index; 
	d.BinCount= +d.BinCount;
	d.GoodReadings = +d.GoodReadings;
    console.log(d.BinCount/5000000);
  });

  x.domain(d3.extent(data, function(d) { return d.DepthRange; })).nice();
  y.domain(d3.extent(data, function(d) { return d.index; })).nice();
 

	  
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  
  svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.bottom -5) + ")")
      .style("text-anchor", "middle")
      .text("Depth Range [meters]");
	  
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
	  
	  
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 20 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Station ID");
	  
	  
	  

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", function (d) {return (d.BinCount/5000000) ;})
      .attr("cx", function(d) { return x(d.DepthRange); })
      .attr("cy", function(d) { return y(d.index); })
      .style("fill", function(d) { return color(d.GoodReadings);})
	  .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d.Id + "<br/> (" + d.DepthRange 
	        + ", " + d.GoodReadings + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
	  });

  var legend = d3.select("svg")
      .append("g")
      .selectAll("g")
      .data(color.domain())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(20," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width +20)
      .attr("y",  100)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width + 15)
      .attr("y", 109)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d +"%"; });
////////////////////////////////	  
	svg.selectAll(".legend")
      .data([8,50,100,150])
	.enter().append("g")
      .attr("class", "legend");
      //.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  svg.append("circle")
    .attr("cx", width )
	  .attr("cy", 200)
    .attr("r",function (d) {return d/3;})
    .style("stroke","black")
	  .style("fill","none");


  // draw legend text
  legend.append("text")
      .attr("x", width)
      .attr("y",200)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text(function(d) { return d +" M";})

  svg.append("ellipse")
    .attr("cx", 517 )
    .attr("cy", 175)
    .attr("rx",100)
    .attr("ry",220)
    .style("stroke","black")
    .style("fill","none");

  svg.append("ellipse")
    .attr("cx", 275 )
    .attr("cy", 310)
    .attr("rx",100)
    .attr("ry",135)
    .style("stroke","black")
    .style("fill","none");
  svg.append("text")
    .attr("transform", "translate(590," +  0 + ") rotate(0)")
    .text("Cluster of High Throughput Data");
  svg.append("text")
    .attr("transform", "translate(50," +  160 + ") rotate(0)")
    .text("Cluster of Low Throughput Data");
  svg.append("line")
    .attr("class","line")
    .attr("x1",210)
    .attr("y1",172)
    .attr("x2",225)
    .attr("y2",212)
    .style("stroke", "black");
  svg.append("line")
    .attr("class","line")
    .attr("x1",627)
    .attr("y1",5)
    .attr("x2",590)
    .attr("y2",30)
    .style("stroke", "black");    

});

})(d3);