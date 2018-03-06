// Rover Object Goes Here
// ======================

// ======================

var rover = {
	direction : "N",
	x : 0,
	y: 0,

	turnLeft : function(){
					if(rover.direction === "N"){
						rover.direction = "W";	
						console.log("Rover is now facing West");
					} else if(rover.direction === "E"){
						rover.direction = "N";	
						console.log("Rover is now facing North");
					} else if(rover.direction === "S"){
						rover.direction = "E";	
						console.log("Rover is now facing East");
					} else {
						rover.direction = "S";	
						console.log("Rover is now facing South");
					}
				},
		
	turnRight : function(){
					if(rover.direction === "N"){
						rover.direction = "E";	
						console.log("Rover is now facing East");
					} else if(rover.direction === "E"){
						rover.direction = "S";	
						console.log("Rover is now facing South");
					} else if(rover.direction === "S"){
						rover.direction = "W";	
						console.log("Rover is now facing West");
					} else {
						rover.direction = "N";	
						console.log("Rover is now facing North");
					}
				},


				/*

				function moveForward(rover){
				  console.log("moveForward was called")
				}
*/
	};




var rover = {
	direction : "N",
	x : 0,
	y: 0,

	turnLeft: function (rover){
	    switch(rover.direction) {
	    case 'N' :
	    rover.direction = 'W'; 
	    return (" Rover is now facing West");
	    break;
	    case 'W' :
	    rover.direction = 'S'; 
	    return (" Rover is now facing south");
	    break;
	    case 'S' :
	    rover.direction = 'E'; 
	    return (" Rover is now facing East");
	    break;
	    default:
	        rover.direction = "N";
	        return (" Rover is now facing North");

		}
	},

	turnRight: function (rover){
	         switch(rover.direction) {
	        case 'N' :
	        rover.direction = 'E'; 
	        return (" Rover is now facing East");
	         break;
	         case 'E' :
	        rover.direction = 'S'; 
	        return (" Rover is now facing south");
	         break;
	         case 'S' :
	        rover.direction = 'W'; 
	        return (" Rover is now facing West");
	         break;
	        default:
	            rover.direction = "N";
	            return (" Rover is now facing North");

	     }
	},


	moveForward: function (rover){
				switch(rover.direction) {
	        case 'N' :
	        rover.direction = 'E'; 
	        return (" Rover is now facing East");
	         break;

				console.log("moveForward was called")
				}



}