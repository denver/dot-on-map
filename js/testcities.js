// testcities.js

var testcities = [ "19172084495", "15125555555" , "16125555555" , "12125551234" ];

var areacodes = [];

for (i = 0; i < testcities.length; i++) {
	var b = testcities[i];
	areacodes.push(b.slice(1,4));
	console.log("found one");
    console.log(testcities[i]);
		console.log('holy shit');
	};

console.log(areacodes);
