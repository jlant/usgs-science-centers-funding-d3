// set width and height of svg element
var width = 1140;
var height = 500;

// create projection
var projection = d3.geo.albersUsa()
	.translate([width / 2, height / 2])
	.scale([1100]);

// create path generator; converts geojson to svg path's ("M 100 100 L 300 100 L 200 300 z")
var path = d3.geo.path()
	.projection(projection);

// create an svg element to the body of the html
var svg = d3.select("#map").append("svg")
	.attr("width", width)
	.attr("height", height);

// add a tooltip
var tooltip = d3.select("body")
	.append("div")
	.attr("class", "tooltip");

// create a quantize scale (function) to sort data values into buckets of color
var color = d3.scale.quantize()
	.range(colorbrewer.Greens[5])

// make a legend
var legend = d3.select("#legend")
	.append("ul")
	.attr("class", "list-inline");

// initial data file
var data_file = "data/2015-usgs-water-science-centers-funding-total.csv"

// events
$("#btn-total").click(function() {
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	console.log(map_type);
	data_file = get_data();
	console.log(data_file);
});

$("#btn-water").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-recharge").removeClass("btn btn-primary");
	$("#btn-recharge").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	console.log(map_type);
	data_file = get_data();
	console.log(data_file);
});

$("#btn-ecosystems").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	console.log(map_type);
	data_file = get_data();
	console.log(data_file);
});


// function to calculate a color based on the funding data
function calculate_color(d) {

	var value = d.properties.total;

	if (value) {
		return color(value);
	} else {
		return "#ccc"; // grayish
	}
}

var get_data = function(){
	if( map_type == "btn-total"){
		data_file = "data/2015-usgs-water-science-centers-funding-total.csv";
	}
	else if( map_type == "btn-water"){
		data_file = "data/2015-usgs-water-science-centers-funding-water.csv";
	}
	else if( map_type == "btn-ecosystems"){
		data_file = "data/2015-usgs-water-science-centers-funding-ecosystems.csv";
	}
	return data_file;
};

var process_data = function(){
	if( map_type == "btn-total"){
		data_file = "data/2015-usgs-water-science-centers-funding-total.csv";
	}
	else if( map_type == "btn-water"){
		data_file = "data/2015-usgs-water-science-centers-funding-water.csv";
	}
	else if( map_type == "btn-ecosystems"){
		data_file = "data/2015-usgs-water-science-centers-funding-ecosystems.csv";
	}

};

// load the funding data
d3.csv(data_file, function(funding_data) {

	// set the input domain for the color scale
	color.domain([
		// d3.min(funding_data, function(d) {	return parseFloat(d.total); }),
		3875657., // next minimum value greater than 0
		d3.max(funding_data, function(d) { return parseFloat(d.total); })
		]);

	// load the data file; note path is relative from index.html
	d3.json("data/us-states.json", function(error, json) {

		if (error) { return console.error(error) };	

		// merge the funding data and geojson
		for (var i = 0; i < funding_data.length; i++) {

			// get the state name
			var funding_data_state = funding_data[i].state;

			// get the data values and convert from string to float
			var funding_data_value = parseFloat(funding_data[i].total);
			var appropriated_data_value = parseFloat(funding_data[i].appropriated);
			var reimbursable_data_value = parseFloat(funding_data[i].reimbursable);
			var rank_data_value = parseFloat(funding_data[i].rank);

			// find the corresponding state inside the geojson
			for (var j = 0; j < json.features.length; j++) {

				// get the json state name
				var json_data_state = json.features[j].properties.name;

				if (funding_data_state === json_data_state) {

					// copy the funding data value into the the json
					json.features[j].properties.total = funding_data_value;
					json.features[j].properties.appropriated = appropriated_data_value;
					json.features[j].properties.reimbursable = reimbursable_data_value;					
					json.features[j].properties.rank = rank_data_value;					

					// stop looking through the geojson
					break;
				}
			}	
		}
		
		// bind the data and create one path for each geojson feature
		svg.selectAll("path")
			.data(json.features)
			.enter()
			.append("path")
			.attr("d", path)
			.attr("fill", calculate_color);

		svg.selectAll("path")
			.data(json.features)
			.on("mouseover", function(d) {
				d3.select(this)
					.transition().duration(500)
					.attr("fill", "orange")
					.attr("stroke-width", 3)
				d3.select("#state_name").text(d.properties.name)
				d3.select("#state_total").text(d3.format("$,.2f")(d.properties.total))
				d3.select("#state_appropriated").text(d3.format("$,.2f")(d.properties.appropriated))
				d3.select("#state_reimbursable").text(d3.format("$,.2f")(d.properties.reimbursable))
				d3.select("#state_rank").text(d3.format("i")(d.properties.rank));
			})
			.on("mouseout", function(d) {
				d3.select(this)
					.transition().duration(500)
					.attr("fill", calculate_color)
					.attr("stroke-width", 1)
		  		return tooltip.style("visibility", "hidden");
			})
		  	.on("mousemove", function() {
		  		return tooltip.style("top", (event.pageY + 10) + "px").style("left", (event.pageX + 10) + "px");
		  	})
		
		var keys = legend.selectAll("li.key")
			.data(color.range())

		keys.enter().append("li")
			.attr("class", "key")
			.style("border-top-color", String)
			.text(function(d) {
				var r = color.invertExtent(d);
				var format = d3.format("$,.2f");
				return format(+r[0]) + " - " + format(+r[1]);
			});
	});
});
