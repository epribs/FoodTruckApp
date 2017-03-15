
		var map;
		function getLocation() {
  		if (navigator.geolocation) {
      	navigator.geolocation.getCurrentPosition(showPosition);
  			} else { 
      	map.innerHTML = "Geolocation is not supported by this browser.";
  		}
		};
		function showPosition(position) {
			console.log(position);
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			console.log("HELLO");
  		map.setCenter(pos);
		};
		function initMap() {
						var styles = 
						[
						    {
						        "featureType": "administrative",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "color": "#444444"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#cacaca"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.natural.terrain",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#90c383"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.attraction",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.business",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.government",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.medical",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#c34131"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.park",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#b3ebb0"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.place_of_worship",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.school",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#e1e262"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.sports_complex",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 45
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#f1f1f1"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#8f8f8f"
						            },
						            {
						                "visibility": "on"
						            },
						            {
						                "weight": "1"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#f3f3f3"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#b7b7b7"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#efefef"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#a59686"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.airport",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.bus",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.rail",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": [
						            {
						                "color": "#7dabd0"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            }
						        ]
						    }
						];

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 30.274301, lng: -97.739600},
				zoom: 14,
				styles: styles,
        		mapTypeControl: true,
        		zoomControl: true,
        		scaleControl: false,
        		streetViewControl: true,
        		rotateControl: true,
        		fullscreenControl: true
			});

			//var pos = {
			//	lat: position.coords.latitude,
			//	lng: position.coords.longitude
			//};

			
			var infowindow = new google.maps.InfoWindow({
				content: 'Hello Austin!'
				//map:map
			});

			//Map Layers
			var trafficLayer = new google.maps.TrafficLayer();
				trafficLayer.setMap(map);
			var transitLayer = new google.maps.TransitLayer();
  				transitLayer.setMap(map);
  			var bikeLayer = new google.maps.BicyclingLayer();
  				bikeLayer.setMap(map);

  		

			

	
	};//end initMap