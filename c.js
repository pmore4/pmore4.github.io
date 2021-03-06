!(function (d3) {




var bothData=[
{"Owner":"SHELL","Month":"Jan","Id":"42363","Percent":"73.4"},
{"Owner":"SHELL","Month":"Jan","Id":"42390","Percent":"58.9"},
{"Owner":"SHELL","Month":"Jan","Id":"42394","Percent":"74.2"},
{"Owner":"SHELL","Month":"Jan","Id":"42874","Percent":"41.2"},
{"Owner":"BP","Month":"Jan","Id":"42901","Percent":"1.2"},
{"Owner":"BP","Month":"Jan","Id":"42370","Percent":"69"},
{"Owner":"BP","Month":"Jan","Id":"42374","Percent":"37"},
{"Owner":"BP","Month":"Jan","Id":"42880","Percent":"95"},
{"Owner":"BP","Month":"Jan","Id":"42887","Percent":"40"},
{"Owner":"CHEVRON","Month":"Jan","Id":"42396","Percent":"0"},
{"Owner":"CHEVRON","Month":"Jan","Id":"42876","Percent":"41.4"},
{"Owner":"CHEVRON","Month":"Jan","Id":"42912","Percent":"51.8"},
{"Owner":"CHEVRON","Month":"Jan","Id":"42934","Percent":"43"},
{"Owner":"NOBLE","Month":"Jan","Id":"42927","Percent":"78.3"},
{"Owner":"NOBLE","Month":"Jan","Id":"42931","Percent":"83.2"},
{"Owner":"CONOCO","Month":"Jan","Id":"42368","Percent":"90.9"},


{"Owner":"SHELL","Month":"Feb","Id":"42363","Percent":"64.8"},
{"Owner":"SHELL","Month":"Feb","Id":"42390","Percent":"59.4"},
{"Owner":"SHELL","Month":"Feb","Id":"42394","Percent":"74.1"},
{"Owner":"SHELL","Month":"Feb","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Feb","Id":"42901","Percent":"0.1"},
{"Owner":"BP","Month":"Feb","Id":"42370","Percent":"70"},
{"Owner":"BP","Month":"Feb","Id":"42374","Percent":"34"},
{"Owner":"BP","Month":"Feb","Id":"42880","Percent":"93"},
{"Owner":"BP","Month":"Feb","Id":"42887","Percent":"30"},
{"Owner":"CHEVRON","Month":"Feb","Id":"42396","Percent":"0"},
{"Owner":"CHEVRON","Month":"Feb","Id":"42876","Percent":"52.2"},
{"Owner":"CHEVRON","Month":"Feb","Id":"42912","Percent":"51.7"},
{"Owner":"CHEVRON","Month":"Feb","Id":"42934","Percent":"36.5"},
{"Owner":"NOBLE","Month":"Feb","Id":"42927","Percent":"83.6"},
{"Owner":"NOBLE","Month":"Feb","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"Feb","Id":"42368","Percent":"87.3"},

{"Owner":"SHELL","Month":"Mar","Id":"42363","Percent":"74.6"},
{"Owner":"SHELL","Month":"Mar","Id":"42390","Percent":"61.4"},
{"Owner":"SHELL","Month":"Mar","Id":"42394","Percent":"74.2"},
{"Owner":"SHELL","Month":"Mar","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Mar","Id":"42901","Percent":"0"},
{"Owner":"BP","Month":"Mar","Id":"42370","Percent":"74"},
{"Owner":"BP","Month":"Mar","Id":"42374","Percent":"38"},
{"Owner":"BP","Month":"Mar","Id":"42880","Percent":"95"},
{"Owner":"BP","Month":"Mar","Id":"42887","Percent":"14"},
{"Owner":"CHEVRON","Month":"Mar","Id":"42396","Percent":"0"},
{"Owner":"CHEVRON","Month":"Mar","Id":"42876","Percent":"46.5"},
{"Owner":"CHEVRON","Month":"Mar","Id":"42912","Percent":"58.8"},
{"Owner":"CHEVRON","Month":"Mar","Id":"42934","Percent":"43.5"},
{"Owner":"NOBLE","Month":"Mar","Id":"42927","Percent":"77.2"},
{"Owner":"NOBLE","Month":"Mar","Id":"42931","Percent":"50"},
{"Owner":"CONOCO","Month":"Mar","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"Apr","Id":"42363","Percent":"76.7"},
{"Owner":"SHELL","Month":"Apr","Id":"42390","Percent":"64.1"},
{"Owner":"SHELL","Month":"Apr","Id":"42394","Percent":"74.2"},
{"Owner":"SHELL","Month":"Apr","Id":"42874","Percent":"0.0"},
{"Owner":"SHELL","Month":"Apr","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Apr","Id":"42901","Percent":"0.0"},
{"Owner":"BP","Month":"Apr","Id":"42370","Percent":"68"},
{"Owner":"BP","Month":"Apr","Id":"42374","Percent":"39"},
{"Owner":"BP","Month":"Apr","Id":"42880","Percent":"94"},
{"Owner":"BP","Month":"Apr","Id":"42887","Percent":"10"},
{"Owner":"CHEVRON","Month":"Apr","Id":"42396","Percent":"87.4"},
{"Owner":"CHEVRON","Month":"Apr","Id":"42876","Percent":"50.3"},
{"Owner":"CHEVRON","Month":"Apr","Id":"42912","Percent":"52.8"},
{"Owner":"CHEVRON","Month":"Apr","Id":"42934","Percent":"45.6"},
{"Owner":"NOBLE","Month":"Apr","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Apr","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"Apr","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"May","Id":"42363","Percent":"75.5"},
{"Owner":"SHELL","Month":"May","Id":"42390","Percent":"63.3"},
{"Owner":"SHELL","Month":"May","Id":"42394","Percent":"74.3"},
{"Owner":"SHELL","Month":"May","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"May","Id":"42901","Percent":"0.0"},
{"Owner":"BP","Month":"May","Id":"42370","Percent":"69"},
{"Owner":"BP","Month":"May","Id":"42374","Percent":"40"},
{"Owner":"BP","Month":"May","Id":"42880","Percent":"96"},
{"Owner":"BP","Month":"May","Id":"42887","Percent":"18"},
{"Owner":"CHEVRON","Month":"May","Id":"42396","Percent":"87.5"},
{"Owner":"CHEVRON","Month":"May","Id":"42876","Percent":"54.1"},
{"Owner":"CHEVRON","Month":"May","Id":"42912","Percent":"56.7"},
{"Owner":"CHEVRON","Month":"May","Id":"42934","Percent":"43.5"},
{"Owner":"NOBLE","Month":"May","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"May","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"May","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"Jun","Id":"42363","Percent":"66.2"},
{"Owner":"SHELL","Month":"Jun","Id":"42390","Percent":"65.7"},
{"Owner":"SHELL","Month":"Jun","Id":"42394","Percent":"74.2"},
{"Owner":"SHELL","Month":"Jun","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Jun","Id":"42901","Percent":"96.8"},
{"Owner":"BP","Month":"Jun","Id":"42370","Percent":"69"},
{"Owner":"BP","Month":"Jun","Id":"42374","Percent":"42"},
{"Owner":"BP","Month":"Jun","Id":"42880","Percent":"98"},
{"Owner":"BP","Month":"Jun","Id":"42887","Percent":"50"},
{"Owner":"CHEVRON","Month":"Jun","Id":"42396","Percent":"87.5"},
{"Owner":"CHEVRON","Month":"Jun","Id":"42876","Percent":"52.6"},
{"Owner":"CHEVRON","Month":"Jun","Id":"42912","Percent":"55.3"},
{"Owner":"CHEVRON","Month":"Jun","Id":"42934","Percent":"36"},
{"Owner":"NOBLE","Month":"Jun","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Jun","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"Jun","Id":"42368","Percent":"91"},

{"Owner":"SHELL","Month":"Jul","Id":"42363","Percent":"77.5"},
{"Owner":"SHELL","Month":"Jul","Id":"42390","Percent":"64.3"},
{"Owner":"SHELL","Month":"Jul","Id":"42394","Percent":"74.2"},
{"Owner":"SHELL","Month":"Jul","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Jul","Id":"42901","Percent":"96.8"},
{"Owner":"BP","Month":"Jul","Id":"42370","Percent":"66"},
{"Owner":"BP","Month":"Jul","Id":"42374","Percent":"43"},
{"Owner":"BP","Month":"Jul","Id":"42880","Percent":"94"},
{"Owner":"BP","Month":"Jul","Id":"42887","Percent":"14"},
{"Owner":"CHEVRON","Month":"Jul","Id":"42396","Percent":"87.5"},
{"Owner":"CHEVRON","Month":"Jul","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Jul","Id":"42912","Percent":"61.4"},
{"Owner":"CHEVRON","Month":"Jul","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Jul","Id":"42927","Percent":""},
{"Owner":"NOBLE","Month":"Jul","Id":"42931","Percent":"89.1"},
{"Owner":"CONOCO","Month":"Jul","Id":"42368","Percent":"91.3"},

{"Owner":"SHELL","Month":"Aug","Id":"42363","Percent":"0.0"},
{"Owner":"SHELL","Month":"Aug","Id":"42390","Percent":"0.0"},
{"Owner":"SHELL","Month":"Aug","Id":"42394","Percent":"0.0"},
{"Owner":"SHELL","Month":"Aug","Id":"42874","Percent":"92.65"},
{"Owner":"BP","Month":"Aug","Id":"42901","Percent":"97.9"},
{"Owner":"BP","Month":"Aug","Id":"42370","Percent":"70"},
{"Owner":"BP","Month":"Aug","Id":"42374","Percent":"40"},
{"Owner":"BP","Month":"Aug","Id":"42880","Percent":"97"},
{"Owner":"BP","Month":"Aug","Id":"42887","Percent":"3.2"},
{"Owner":"CHEVRON","Month":"Aug","Id":"42396","Percent":"87.0"},
{"Owner":"CHEVRON","Month":"Aug","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Aug","Id":"42912","Percent":"60.9"},
{"Owner":"CHEVRON","Month":"Aug","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Aug","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Aug","Id":"42931","Percent":"88.6"},
{"Owner":"CONOCO","Month":"Aug","Id":"42368","Percent":"93.4"},

{"Owner":"SHELL","Month":"Sep","Id":"42363","Percent":"0.0"},
{"Owner":"SHELL","Month":"Sep","Id":"42390","Percent":"0.0"},
{"Owner":"SHELL","Month":"Sep","Id":"42394","Percent":"0.0"},
{"Owner":"SHELL","Month":"Sep","Id":"42874","Percent":"89.2"},
{"Owner":"BP","Month":"Sep","Id":"42901","Percent":"0"},
{"Owner":"BP","Month":"Sep","Id":"42370","Percent":"0"},
{"Owner":"BP","Month":"Sep","Id":"42374","Percent":"40"},
{"Owner":"BP","Month":"Sep","Id":"42880","Percent":"96"},
{"Owner":"BP","Month":"Sep","Id":"42887","Percent":"7.5"},
{"Owner":"CHEVRON","Month":"Sep","Id":"42396","Percent":"0"},
{"Owner":"CHEVRON","Month":"Sep","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Sep","Id":"42912","Percent":"50.3"},
{"Owner":"CHEVRON","Month":"Sep","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Sep","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Sep","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"Sep","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"Oct","Id":"42363","Percent":"0.0"},
{"Owner":"SHELL","Month":"Oct","Id":"42390","Percent":"0.0"},
{"Owner":"SHELL","Month":"Oct","Id":"42394","Percent":"0.0"},
{"Owner":"SHELL","Month":"Oct","Id":"42874","Percent":"93.9"},
{"Owner":"BP","Month":"Oct","Id":"42901","Percent":"95.4"},
{"Owner":"BP","Month":"Oct","Id":"42370","Percent":"69"},
{"Owner":"BP","Month":"Oct","Id":"42374","Percent":"0"},
{"Owner":"BP","Month":"Oct","Id":"42880","Percent":"92"},
{"Owner":"BP","Month":"Oct","Id":"42887","Percent":"5.6"},
{"Owner":"CHEVRON","Month":"Oct","Id":"42396","Percent":"86.5"},
{"Owner":"CHEVRON","Month":"Oct","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Oct","Id":"42912","Percent":"60.4"},
{"Owner":"CHEVRON","Month":"Oct","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Oct","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Oct","Id":"42931","Percent":"0"},
{"Owner":"CONOCO","Month":"Oct","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"Nov","Id":"42363","Percent":"0.0"},
{"Owner":"SHELL","Month":"Nov","Id":"42390","Percent":"0.0"},
{"Owner":"SHELL","Month":"Nov","Id":"42394","Percent":"0.0"},
{"Owner":"SHELL","Month":"Nov","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Nov","Id":"42901","Percent":"94.5"},
{"Owner":"BP","Month":"Nov","Id":"42370","Percent":"66"},
{"Owner":"BP","Month":"Nov","Id":"42374","Percent":"0"},
{"Owner":"BP","Month":"Nov","Id":"42880","Percent":"33"},
{"Owner":"BP","Month":"Nov","Id":"42887","Percent":"1.5"},
{"Owner":"CHEVRON","Month":"Nov","Id":"42396","Percent":"87.4"},
{"Owner":"CHEVRON","Month":"Nov","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Nov","Id":"42912","Percent":"0"},
{"Owner":"CHEVRON","Month":"Nov","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Nov","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Nov","Id":"42931","Percent":"0.2"},
{"Owner":"CONOCO","Month":"Nov","Id":"42368","Percent":"0"},

{"Owner":"SHELL","Month":"Dec","Id":"42363","Percent":"0.0"},
{"Owner":"SHELL","Month":"Dec","Id":"42390","Percent":"0.0"},
{"Owner":"SHELL","Month":"Dec","Id":"42394","Percent":"0.0"},
{"Owner":"SHELL","Month":"Dec","Id":"42874","Percent":"0.0"},
{"Owner":"BP","Month":"Dec","Id":"42901","Percent":"95.2"},
{"Owner":"BP","Month":"Dec","Id":"42370","Percent":"70"},
{"Owner":"BP","Month":"Dec","Id":"42374","Percent":"0"},
{"Owner":"BP","Month":"Dec","Id":"42880","Percent":"0"},
{"Owner":"BP","Month":"Dec","Id":"42887","Percent":"1"},
{"Owner":"CHEVRON","Month":"Dec","Id":"42396","Percent":"87.4"},
{"Owner":"CHEVRON","Month":"Dec","Id":"42876","Percent":"0"},
{"Owner":"CHEVRON","Month":"Dec","Id":"42912","Percent":"0"},
{"Owner":"CHEVRON","Month":"Dec","Id":"42934","Percent":"0"},
{"Owner":"NOBLE","Month":"Dec","Id":"42927","Percent":"0"},
{"Owner":"NOBLE","Month":"Dec","Id":"42931","Percent":"0.9"},
{"Owner":"CONOCO","Month":"Dec","Id":"42368","Percent":"0"}
];
//make one for each ID
var shellData = [];
var bpData = [];
var nobleData= [];
var conocoData=[];
var chevronData = [];
var color = d3.scaleOrdinal(d3.schemeCategory20);
//var color =d3. scaleSequential(d3.interpolateInferno).domain([0,20]);
for(var i = 0; i < bothData.length; i++){
	if(bothData[i]["Owner"] === "SHELL"){
		shellData.push(bothData[i]);
	}else if (bothData[i]["Owner"] === "BP"){
		bpData.push(bothData[i]);
	}else if (bothData[i]["Owner"] === "NOBLE"){
		nobleData.push(bothData[i]);
	}else if (bothData[i]["Owner"] === "CONOCO"){
		conocoData.push(bothData[i]);
	}else if (bothData[i]["Owner"] === "CHEVRON"){
		chevronData.push(bothData[i]);
	}
}
console.log(shellData);
//functions for toggling between data
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
	//left axis
	chart.select('.y')
		  .call(yAxis)
	//bottom axis
	chart.select('.xAxis')
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});
			
}//end update

//set up chart
var margin = {top: 20, right: 20, bottom: 95, left: 50};
var width = 800;
var height = 500;

var chart = d3.select("ccontent").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xChart = d3.scaleBand()
				.range([0, width]);
				
var yChart = d3.scaleLinear()
				.range([height, 0]);

var xAxis = d3.axisBottom(xChart);
var yAxis = d3.axisLeft(yChart);

//set up axes
//left axis
	chart.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		  
	//bottom axis
	chart.append("g")
		.attr("class", "xAxis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function(d){
				return "rotate(-65)";
			});

//add labels
chart
	.append("text")
	.attr("transform", "translate(-35," +  (height+margin.bottom)/2 + ") rotate(-90)")
	.text("% Good");
		
chart
	.append("text")
	.attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom - 5) + ")")
	.text("Month");

//use bothData to begin with
update(bothData);

})(d3);