var map;
var latlng;
var infowindow;
var marker0;
var marker1;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;
var marker7;
var marker8;
var marker9;
var marker10;
var marker11;
var marker12;
var marker13;
var marker14;
var marker15;
var marker16;
var marker17;
var marker18;
var marker19;
var marker20;

$(document).ready(function() {

	//------- Google Maps ---------//
	google.maps.visualRefresh = true;
	
	// Creating a LatLng object containing the coordinate for the center of the map
	latlng = new google.maps.LatLng(37.540760, -77.436013);
	  
	// Creating an object literal containing the properties we want to pass to the map  
	var options = {  
		zoom: 14, // Intial map zoom level
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN	
	};
	  
	// Calling the constructor, thereby initializing the map  
	map = new google.maps.Map(document.getElementById('map-canvas'), options);  
	
	// Define Marker properties
	var image_work_a = new google.maps.MarkerImage('img/marker-work-a.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_work_b = new google.maps.MarkerImage('img/marker-work-b.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_work_c = new google.maps.MarkerImage('img/marker-work-c.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_work_d = new google.maps.MarkerImage('img/marker-work-d.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_a = new google.maps.MarkerImage('img/marker-eat-a.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_b = new google.maps.MarkerImage('img/marker-eat-b.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_c = new google.maps.MarkerImage('img/marker-eat-c.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_d = new google.maps.MarkerImage('img/marker-eat-d.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_e = new google.maps.MarkerImage('img/marker-eat-e.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_f = new google.maps.MarkerImage('img/marker-eat-f.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_eat_g = new google.maps.MarkerImage('img/marker-eat-g.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_a = new google.maps.MarkerImage('img/marker-interest-a.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_b = new google.maps.MarkerImage('img/marker-interest-b.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_c = new google.maps.MarkerImage('img/marker-interest-c.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_d = new google.maps.MarkerImage('img/marker-interest-d.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_e = new google.maps.MarkerImage('img/marker-interest-e.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_f = new google.maps.MarkerImage('img/marker-interest-f.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_interest_g = new google.maps.MarkerImage('img/marker-interest-g.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_homes_a = new google.maps.MarkerImage('img/marker-homes-a.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_homes_b = new google.maps.MarkerImage('img/marker-homes-b.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	var image_homes_c = new google.maps.MarkerImage('img/marker-homes-c.png',
		// This marker is 38 pixels wide by 53 pixels tall.
		new google.maps.Size(38, 53),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image
		new google.maps.Point(19, 48)
	);
	
	// Work Markers
	marker0 = new google.maps.Marker({
		position: new google.maps.LatLng(37.558066, -77.446663),
		title: 'Dovetail Construction',
		map: map,		
		icon: image_work_a  // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});

    infowindow = new google.maps.InfoWindow({
      content: ''
    });

	marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(37.54698, -77.442458),
		title: 'Emrick Flats',
		map: map,		
		icon: image_work_b
	});	
	
	marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(37.525252, -77.441959),
		title: 'Porter Street',
		map: map,		
		icon: image_work_c
	});	
	
	marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(37.561755, -77.459673),
		title: 'Southern Stove Lofts',
		map: map,		
		icon: image_work_d
	});
	
	// Eat Markers
	marker4 = new google.maps.Marker({
		position: new google.maps.LatLng(37.552193, -77.478126),
		title: 'Bevs Homemade Ice Cream',
		map: map,		
		icon: image_eat_a
	});
	
	marker5 = new google.maps.Marker({
		position: new google.maps.LatLng(37.551018, -77.448913),
		title: 'Black Sheep',
		map: map,		
		icon: image_eat_b
	});	
	
	marker6 = new google.maps.Marker({
		position: new google.maps.LatLng(37.517937, -77.356138),
		title: 'Country Style Donuts',
		map: map,		
		icon: image_eat_c
	});	
	
	marker7 = new google.maps.Marker({
		position: new google.maps.LatLng(37.521486, -77.443068),
		title: 'Croakers Spot',
		map: map,		
		icon: image_eat_d
	});
	
	marker8 = new google.maps.Marker({
		position: new google.maps.LatLng(37.554449, -77.484516),
		title: 'Mary Angelas Pizzeria',
		map: map,		
		icon: image_eat_e
	});
	
	marker9 = new google.maps.Marker({
		position: new google.maps.LatLng(37.528315, -77.420281),
		title: 'Millies Diner',
		map: map,		
		icon: image_eat_f
	});
	
	marker10 = new google.maps.Marker({
		position: new google.maps.LatLng(37.533326, -77.427658),
		title: 'Ronnies Ribs, Wings, and Other Things',
		map: map,		
		icon: image_eat_g
	});
	
	// Interests Markers
	marker11 = new google.maps.Marker({
		position: new google.maps.LatLng(37.55013, -77.442421),
		title: 'Abner Clay Park',
		map: map,		
		icon: image_interest_a
	});
	
	marker12 = new google.maps.Marker({
		position: new google.maps.LatLng(37.52881, -77.45210),
		title: 'Belle Isle',
		map: map,		
		icon: image_interest_b
	});	
	
	marker13 = new google.maps.Marker({
		position: new google.maps.LatLng(37.54461, -77.47305),
		title: 'Byrd Park',
		map: map,		
		icon: image_interest_c
	});	
	
	marker14 = new google.maps.Marker({
		position: new google.maps.LatLng(37.547871, -77.465278),
		title: 'Fritzs Car Care',
		map: map,		
		icon: image_interest_d
	});
	
	marker15 = new google.maps.Marker({
		position: new google.maps.LatLng(37.561220, -77.486029),
		title: 'Humphrey Caulder Community Center',
		map: map,		
		icon: image_interest_e
	});	
	
	marker16 = new google.maps.Marker({
		position: new google.maps.LatLng(37.563020, -77.455169),
		title: 'SCOR',
		map: map,		
		icon: image_interest_f
	});
	
	marker17 = new google.maps.Marker({
		position: new google.maps.LatLng(37.546632, -77.442329),
		title: 'Walter Parks Architects',
		map: map,		
		icon: image_interest_g
	});
	
	// Homes Markers
	marker18 = new google.maps.Marker({
		position: new google.maps.LatLng(37.554088, -77.486109),
		title: 'Bungalow',
		map: map,		
		icon: image_homes_a
	});
	
	marker19 = new google.maps.Marker({
		position: new google.maps.LatLng(37.556047, -77.484453),
		title: 'Ellwood',
		map: map,		
		icon: image_homes_b
	});	
	
	marker20 = new google.maps.Marker({
		position: new google.maps.LatLng(37.546632, -77.442329),
		title: 'Adams Street Apartment',
		map: map,		
		icon: image_homes_c
	});	
});
