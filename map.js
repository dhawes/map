var map;
var latlng;

$(document).ready(function() {

	//------- Google Maps ---------//
	google.maps.visualRefresh = true;
	
	// Creating a LatLng object containing the coordinate for the center of the map
	latlng = new google.maps.LatLng(37.540760, -77.436013);
	  
	// Creating an object literal containing the properties we want to pass to the map  
	var options = {  
		zoom: 13, // Intial map zoom level
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
	
	var image_interest_c = new google.maps.MarkerImage('img/marker-eat-c.png',
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
	var marker0 = new google.maps.Marker({
		position: new google.maps.LatLng(37.558066, -77.446663),
		title: 'Dovetail Construction',
		map: map,		
		icon: image_work_a  // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});
	
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(37.54698, -77.442458),
		title: 'Emrick Flats',
		map: map,		
		icon: image_work_b
	});	
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(37.525252, -77.441959),
		title: 'Porter Street',
		map: map,		
		icon: image_work_c
	});	
	
	var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(37.561755, -77.459673),
		title: 'Southern Stove Lofts',
		map: map,		
		icon: image_work_d
	});
	
	// Eat Markers
	var marker4 = new google.maps.Marker({
		position: new google.maps.LatLng(37.552193, -77.478126),
		title: 'Bevs Homemade Ice Cream',
		map: map,		
		icon: image_eat_a
	});
	
	var marker5 = new google.maps.Marker({
		position: new google.maps.LatLng(37.551018, -77.448913),
		title: 'Black Sheep',
		map: map,		
		icon: image_eat_b
	});	
	
	var marker6 = new google.maps.Marker({
		position: new google.maps.LatLng(37.517937, -77.356138),
		title: 'Country Style Donuts',
		map: map,		
		icon: image_eat_c
	});	
	
	var marker7 = new google.maps.Marker({
		position: new google.maps.LatLng(37.521486, -77.443068),
		title: 'Croakers Spot',
		map: map,		
		icon: image_eat_d
	});
	
	var marker8 = new google.maps.Marker({
		position: new google.maps.LatLng(37.554449, -77.484516),
		title: 'Mary Angelas Pizzeria',
		map: map,		
		icon: image_eat_e
	});
	
	var marker9 = new google.maps.Marker({
		position: new google.maps.LatLng(37.528315, -77.420281),
		title: 'Millies Diner',
		map: map,		
		icon: image_eat_f
	});
	
	var marker10 = new google.maps.Marker({
		position: new google.maps.LatLng(37.533326, -77.427658),
		title: 'Ronnies Ribs, Wings, and Other Things',
		map: map,		
		icon: image_eat_g
	});
	
	// Interests Markers
	var marker11 = new google.maps.Marker({
		position: new google.maps.LatLng(37.55013, -77.442421),
		title: 'Abner Clay Park',
		map: map,		
		icon: image_interest_a
	});
	
	var marker12 = new google.maps.Marker({
		position: new google.maps.LatLng(37.52881, -77.45210),
		title: 'Belle Isle',
		map: map,		
		icon: image_interest_b
	});	
	
	var marker13 = new google.maps.Marker({
		position: new google.maps.LatLng(37.54461, -77.47305),
		title: 'Byrd Park',
		map: map,		
		icon: image_interest_c
	});	
	
	var marker14 = new google.maps.Marker({
		position: new google.maps.LatLng(37.547871, -77.465278),
		title: 'Fritzs Car Care',
		map: map,		
		icon: image_interest_d
	});
	
	var marker15 = new google.maps.Marker({
		position: new google.maps.LatLng(37.561220, -77.486029),
		title: 'Humphrey Caulder Community Center',
		map: map,		
		icon: image_interest_e
	});	
	
	var marker16 = new google.maps.Marker({
		position: new google.maps.LatLng(37.563020, -77.455169),
		title: 'SCOR',
		map: map,		
		icon: image_interest_f
	});
	
	var marker17 = new google.maps.Marker({
		position: new google.maps.LatLng(37.546632, -77.442329),
		title: 'Walter Parks Architects',
		map: map,		
		icon: image_interest_g
	});
	
	// Homes Markers
	var marker18 = new google.maps.Marker({
		position: new google.maps.LatLng(37.554088, -77.486109),
		title: 'Bungalow',
		map: map,		
		icon: image_homes_a
	});
	
	var marker19 = new google.maps.Marker({
		position: new google.maps.LatLng(37.556047, -77.484453),
		title: 'Ellwood',
		map: map,		
		icon: image_homes_b
	});	
	
	var marker20 = new google.maps.Marker({
		position: new google.maps.LatLng(37.546632, -77.442329),
		title: 'Adams Street Apartment',
		map: map,		
		icon: image_homes_c
	});	
});

function refreshMap(lat, lng) {
    //------- Google Maps ---------//
    google.maps.visualRefresh = true;
    
    // Creating a LatLng object containing the coordinate for the center of the map
    latlng = new google.maps.LatLng(lat, lng);
      
    // Creating an object literal containing the properties we want to pass to the map  
    var options = {  
        zoom: 13, // Intial map zoom level
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
    
    var image_interest_c = new google.maps.MarkerImage('img/marker-eat-c.png',
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
    var marker0 = new google.maps.Marker({
        position: new google.maps.LatLng(37.558066, -77.446663),
        title: 'Dovetail Construction',
        map: map,		
        icon: image_work_a  // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
    });
    
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(37.54698, -77.442458),
        title: 'Emrick Flats',
        map: map,		
        icon: image_work_b
    });	
    
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(37.525252, -77.441959),
        title: 'Porter Street',
        map: map,		
        icon: image_work_c
    });	
    
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(37.561755, -77.459673),
        title: 'Southern Stove Lofts',
        map: map,		
        icon: image_work_d
    });
    
    // Eat Markers
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(37.552193, -77.478126),
        title: 'Bevs Homemade Ice Cream',
        map: map,		
        icon: image_eat_a
    });
    
    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(37.551018, -77.448913),
        title: 'Black Sheep',
        map: map,		
        icon: image_eat_b
    });	
    
    var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(37.517937, -77.356138),
        title: 'Country Style Donuts',
        map: map,		
        icon: image_eat_c
    });	
    
    var marker7 = new google.maps.Marker({
        position: new google.maps.LatLng(37.521486, -77.443068),
        title: 'Croakers Spot',
        map: map,		
        icon: image_eat_d
    });
    
    var marker8 = new google.maps.Marker({
        position: new google.maps.LatLng(37.554449, -77.484516),
        title: 'Mary Angelas Pizzeria',
        map: map,		
        icon: image_eat_e
    });
    
    var marker9 = new google.maps.Marker({
        position: new google.maps.LatLng(37.528315, -77.420281),
        title: 'Millies Diner',
        map: map,		
        icon: image_eat_f
    });
    
    var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(37.533326, -77.427658),
        title: 'Ronnies Ribs, Wings, and Other Things',
        map: map,		
        icon: image_eat_g
    });
    
    // Interests Markers
    var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(37.55013, -77.442421),
        title: 'Abner Clay Park',
        map: map,		
        icon: image_interest_a
    });
    
    var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(37.52881, -77.45210),
        title: 'Belle Isle',
        map: map,		
        icon: image_interest_b
    });	
    
    var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(37.54461, -77.47305),
        title: 'Byrd Park',
        map: map,		
        icon: image_interest_c
    });	
    
    var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(37.547871, -77.465278),
        title: 'Fritzs Car Care',
        map: map,		
        icon: image_interest_d
    });
    
    var marker15 = new google.maps.Marker({
        position: new google.maps.LatLng(37.561220, -77.486029),
        title: 'Humphrey Caulder Community Center',
        map: map,		
        icon: image_interest_e
    });	
    
    var marker16 = new google.maps.Marker({
        position: new google.maps.LatLng(37.563020, -77.455169),
        title: 'SCOR',
        map: map,		
        icon: image_interest_f
    });
    
    var marker17 = new google.maps.Marker({
        position: new google.maps.LatLng(37.546632, -77.442329),
        title: 'Walter Parks Architects',
        map: map,		
        icon: image_interest_g
    });
    
    // Homes Markers
    var marker18 = new google.maps.Marker({
        position: new google.maps.LatLng(37.554088, -77.486109),
        title: 'Bungalow',
        map: map,		
        icon: image_homes_a
    });
    
    var marker19 = new google.maps.Marker({
        position: new google.maps.LatLng(37.556047, -77.484453),
        title: 'Ellwood',
        map: map,		
        icon: image_homes_b
    });	
    
    var marker20 = new google.maps.Marker({
        position: new google.maps.LatLng(37.546632, -77.442329),
        title: 'Adams Street Apartment',
        map: map,		
        icon: image_homes_c
    });	
}
