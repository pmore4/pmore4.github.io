
function change(value){

	if(value === 'SHELL'){
		update(shellData);
	}else if(value === 'BP'){
		update(bpData);
	}else if(value === 'CHEVRON'){
		update(chevronData);
	}else if(value === 'NOBLE'){
		update(nobleData);
	}else if(value === 'CONOCO'){
		update(conocoData);		
	}else{
		update(bothData);
	}
}

function update(data){
	//set domain for the x axis
	xChart.domain(data.map(function(d){ return d.Month; }) );
	//set domain for y axis
	yChart.domain( [0, d3.max(data, function(d){ return +d.Percent ; })] );
	
	//get the width of each bar 
	var barWidth = width / data.length;
	
	//select all bars on the graph, take them out, and exit the previous data set. 
	//then you can add/enter the new data set
	var bars = chart.selectAll(".bar")
					.remove()
					.exit()
					.data(data)		
	//now actually give each rectangle the corresponding data
	bars.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d, i){ return i * barWidth + 1 })
		.attr("y", function(d){ return yChart( d.Percent); })
		.attr("height", function(d){ return height - yChart(d.Percent); })
		.attr("width", barWidth - 1)
		.attr("fill", function(d){ 
			if(d.Id === "42363"){
				return color(d.Id);
			}else if(d.Id === "42390") {
				return color(d.Id);
			}else if(d.Id === "42394") {
				return color(d.Id);
			}else if(d.Id === "42874") {
				return color(d.Id);
			}else if(d.Id === "42901") {
				return color(d.Id);
			}else if(d.Id === "42370") {
				return color(d.Id);
			}else if(d.Id === "42374") {
				return color(d.Id);
			}else if(d.Id === "42880") {
				return color(d.Id);
			}else if(d.Id === "42887") {
				return color(d.Id);
			}else if(d.Id === "42396") {
				return color(d.Id);
			}else if(d.Id === "42876") {
				return color(d.Id);
			}else if(d.Id === "42912") {
				return color(d.Id);
			}else if(d.Id === "42934") {
				return color(d.Id);
			}else if(d.Id === "42927") {
				return color(d.Id);
			}else if(d.Id === "42931") {
				return color(d.Id);
			}else if(d.Id === "42368") {
				return color(d.Id);		
			}
		});
	}