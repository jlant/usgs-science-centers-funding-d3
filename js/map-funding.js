// globals
var width, height, projection, path, svg, color, tooltip_map, legend;
var color_range = colorbrewer.RdYlBu[10];
var json_file = "data/us-states.json";
var csv_file = "data/2015-usgs-water-science-centers-funding.csv";


// events
$("#btn-total").click(function() {
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-total.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-water").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-water.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-ecosystems").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-ecosystems.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-em").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-em.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-hazards").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-hazards.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-clu").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-clu.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-css").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-css.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-eh").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-eh.csv";
	load_data();
	console.log(csv_file);
});

$("#btn-aei").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-misc").removeClass("btn btn-primary");
	$("#btn-misc").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-aei.csv";
	load_data();
	console.log(csv_file);
});


$("#btn-misc").click(function() {
	$("#btn-total").removeClass("btn btn-primary");
	$("#btn-total").addClass("btn btn-default");
	$("#btn-water").removeClass("btn btn-primary");
	$("#btn-water").addClass("btn btn-default");
	$("#btn-ecosystems").removeClass("btn btn-primary");
	$("#btn-ecosystems").addClass("btn btn-default");
	$("#btn-em").removeClass("btn btn-primary");
	$("#btn-em").addClass("btn btn-default");
	$("#btn-hazards").removeClass("btn btn-primary");
	$("#btn-hazards").addClass("btn btn-default");
	$("#btn-clu").removeClass("btn btn-primary");
	$("#btn-clu").addClass("btn btn-default");
	$("#btn-css").removeClass("btn btn-primary");
	$("#btn-css").addClass("btn btn-default");
	$("#btn-eh").removeClass("btn btn-primary");
	$("#btn-eh").addClass("btn btn-default");
	$("#btn-aei").removeClass("btn btn-primary");
	$("#btn-aei").addClass("btn btn-default");
	$(this).addClass("btn btn-primary");
	map_type = $(this).attr("id");
	csv_file = "data/2015-usgs-water-science-centers-funding-misc.csv";
	load_data();
	console.log(csv_file);
});


function init() {
	make_map();
}


function make_map() {
	// set width and height of svg element
	width = 1140;
	height = 500;

	// create projection
	projection = d3.geo.albersUsa()
			.translate([width / 2, height / 2])
			.scale([1100]);

	// create path generator; converts geojson to svg path's ("M 100 100 L 300 100 L 200 300 z")
	path = d3.geo.path()
			.projection(projection);	

	// create an svg element to the body of the html
	svg = d3.select("#map").append("svg")
		.attr("width", width)
		.attr("height", height);

	// add a tooltip
	tooltip_map = d3.select("body")
			.append("div")
			.attr("class", "tooltip_map");

	// make a legend
	legend = d3.select("#legend")
			.append("ul")
			.attr("class", "list-inline");

	// load the data
	load_data();

}  // end make_map()


function load_data() {
	queue()   // queue function loads all external data files asynchronously 
	 	.defer(d3.json, json_file)  // geometries
	  	.defer(d3.csv, csv_file)  // associated data in csv file
	  	.await(process_data);   // once all files are loaded, call the process_data function passing
	                       // the loaded objects as arguments
}  // end load_data()


function process_data(error, json_data, csv_data) {
	// function accepts any errors from the queue function as first argument, then
	// each data object in the order of chained defer() methods above
	if (error) { return console.error(error) };	

	// merge the csv data and geojson
	for (var i = 0; i < csv_data.length; i++) {

		// get the state name
		var csv_state = csv_data[i].state;

		// get the data values and convert from string to float
		var total = parseFloat(csv_data[i].total);
		var appropriated = parseFloat(csv_data[i].appropriated);
		var reimbursable = parseFloat(csv_data[i].reimbursable);
		var rank = parseFloat(csv_data[i].rank);
		var water_total = parseFloat(csv_data[i].water_total);
		var ecosystems_total = parseFloat(csv_data[i].ecosystems_total);
		var em_total = parseFloat(csv_data[i].em_total);
		var hazards_total = parseFloat(csv_data[i].hazards_total);
		var clu_total = parseFloat(csv_data[i].clu_total);
		var css_total = parseFloat(csv_data[i].css_total);
		var eh_total = parseFloat(csv_data[i].eh_total);
		var aei_total = parseFloat(csv_data[i].aei_total);
		var misc = parseFloat(csv_data[i].misc);

		// find the corresponding state inside the geojson
		for (var j = 0; j < json_data.features.length; j++) {

			// get the json state name
			var json_state = json_data.features[j].properties.name;

			if (csv_state === json_state) {

				// copy the funding data value into the the json
				json_data.features[j].properties.total = total;
				json_data.features[j].properties.appropriated = appropriated;
				json_data.features[j].properties.reimbursable = reimbursable;					
				json_data.features[j].properties.rank = rank;
				json_data.features[j].properties.water_total = water_total;
				json_data.features[j].properties.ecosystems_total = ecosystems_total;
				json_data.features[j].properties.em_total = em_total;
				json_data.features[j].properties.hazards_total = hazards_total;
				json_data.features[j].properties.clu_total = clu_total;
				json_data.features[j].properties.css_total = css_total;
				json_data.features[j].properties.eh_total = eh_total;
				json_data.features[j].properties.aei_total = aei_total;
				json_data.features[j].properties.misc = misc;					

				// stop looking through the geojson
				break;
			}
		}	
	} // end for

	update_table(json_data);
	draw_map(json_data, csv_data);
}


function draw_map(json_data, csv_data) {
	
	// create a quantize scale (function) to sort data values into buckets of color
	color = d3.scale.quantize()
			.range(color_range)
			.domain([d3.min(csv_data, function(d) {return parseFloat(d.total); }), // next minimum value greater than 0
					d3.max(csv_data, function(d) { return parseFloat(d.total); })
			]);

	// bind the data and create one path for each geojson feature
	svg.selectAll("path")
		.data(json_data.features)
		.enter()
		.append("path")
		.attr("d", path)
		.attr("fill", calculate_color);

	svg.selectAll("path")
		.data(json_data.features)
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
		.on("click", function(d) {
			tooltip_map.style("visibility", "visible")
				.style("top", (d3.event.pageY + 10) + "px")
				.style("left", (d3.event.pageX + 10) + "px")
				.html("<small>" + 
					d.properties.name + " - Mission Area Funding" + "<br>" + 
					"Water: " + d3.format("$,.2f")(d.properties.water_total) + "<br>" + 
					"Ecosystems: " + d3.format("$,.2f")(d.properties.ecosystems_total) + "<br>" + 
					"Energy: " + d3.format("$,.2f")(d.properties.em_total) + "<br>" +
					"Hazards: " + d3.format("$,.2f")(d.properties.hazards_total) + "<br>" +
                    "Climate:" + d3.format("$,.2f")(d.properties.clu_total) + "<br>" + 
                    "Core:" + d3.format("$,.2f")(d.properties.css_total) + "<br>" + 
                    "Environmental:" + d3.format("$,.2f")(d.properties.eh_total) + "<br>" + 
                    "Administration:" + d3.format("$,.2f")(d.properties.aei_total) + "<br>" + 
                    "Misc:" + d3.format("$,.2f")(d.properties.misc) + 
					"</small>"
				);
		})
	  	.on("mouseout", function(d) {
			d3.select(this)
				.transition().duration(500)
				.attr("fill", calculate_color)
				.attr("stroke-width", 1)
  				return tooltip_map.style("visibility", "hidden");
		})
  		.on("mousemove", function() {
  			return tooltip_map.style("top", (d3.event.pageY + 10) + "px")
  							  .style("left", (d3.event.pageX + 10) + "px");
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

  	paint_map();
  	make_legend();

} // end draw_map()


function calculate_color(d) {
// function to calculate a color based on the funding data

	var value = d.properties.total;

	if (value) {
		return color(value);
	} else {
		return "#ccc"; // grayish
	}
}


function paint_map() {
	
	svg.selectAll("path")
		.attr("fill", calculate_color);
}


function update_table(json_data) {

	var ky_total;
	var ky_appropriated;
	var ky_reimbursable;
	var ky_rank;

	// find Kentucky inside the geojson
	for (var j = 0; j < json_data.features.length; j++) {

		// get the json state name
		var json_state = json_data.features[j].properties.name;

		if ("Kentucky" === json_state) {

			// copy the funding data value
			ky_name = "Kentucky"
			ky_total = json_data.features[j].properties.total;
			ky_appropriated = json_data.features[j].properties.appropriated;
			ky_reimbursable = json_data.features[j].properties.reimbursable;
			ky_rank = json_data.features[j].properties.rank;

			// stop looking through the geojson
			break;
		}
	}	

	d3.select("#state_name").text(ky_name)
	d3.select("#state_total").text(d3.format("$,.2f")(ky_total))
	d3.select("#state_appropriated").text(d3.format("$,.2f")(ky_appropriated))
	d3.select("#state_reimbursable").text(d3.format("$,.2f")(ky_reimbursable))
	d3.select("#state_rank").text(d3.format("i")(ky_rank));	
}

function make_legend() {

	legend.selectAll("li.key")
		.data(color.range())
		.text(function(d) {
			var r = color.invertExtent(d);
			var format = d3.format("$,.2f");
			return format(+r[0]) + " - " + format(+r[1]);
		});
}


// run main
jQuery(document).ready(function(){
	init();
})
