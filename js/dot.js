// dot.js
// javascript function for putting object on a leaflet map
// author: denver peterson
// last update: July 10 2016

function dot ( self ) {
	try {
        L.marker( [ areaCode[self].location.latitude , areaCode[self].location.longitude ] ).bindPopup(areaCode[self].city ).addTo(cities);
        console.log("area code=",self,areaCode[self].city)
      }
      catch(err) {
        console.log("That's not a valid area code.");
      }
  };
