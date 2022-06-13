

var playerCoordX = 0
var playerCoordY = 0

var mapView = [
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
];

function findPlayer(){
	console.log("Reporting for duty");
	let e = 0
	for(let i = 0; i < 50; i++){
		if(mapView[e][i][1] == 1){
			console.log("Player found at map coordinates: "+i+","+e);
			playerCoordX = i
			playerCoordY = e
			break;
		} else if(i > mapView[0].length) {
			i = 0
			e += 1
		};
		if(e > mapView.length){
			console.log("Player is a ninja")
			break;
		};
	};
};