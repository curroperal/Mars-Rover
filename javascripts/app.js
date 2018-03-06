// Rover Object Goes Here
// ======================
// 
var rover = {
	direction : "N",
	x : 0,
	y: 0,
	phrase: "bbrrfffllzb",
	//phrase: "rffrfftlfrff",
	travelLog: [],

	turnLeft: function (){
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

	turnRight: function (){
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

	moveForward: function (){
		if (rover.direction === "N" && rover.y === 0){
			console.log("Rover can´t move");
		} else if (rover.direction === "S" && rover.y === 9){
			console.log("Rover can´t move");
		} else if (rover.direction === "W" && rover.x === 0){
			console.log("Rover can´t move");
		} else if (rover.direction === "E" && rover.x === 9){
			console.log("Rover can´t move");
		} else if (rover.direction === "N" && rover.y > 0){
			rover.y --;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		} else if (rover.direction === "S" && rover.y >= 0 && rover.y <= 9){
			rover.y ++;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		} else if (rover.direction === "E" && rover.x >= 0 && rover.x <= 9){
			rover.x ++;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		}	else if (rover.direction === "W" && rover.x > 0 && rover.x <= 9){
			rover.x --;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		}	else {
			console.log("Position undefined")
		}
	},



	moveBackward: function (){
		if (rover.direction === "N" && rover.y === 9){
			console.log("Rover can´t move");
		} else if (rover.direction === "S" && rover.y === 0){
			console.log("Rover can´t move");
		} else if (rover.direction === "W" && rover.x === 9){
			console.log("Rover can´t move");
		} else if (rover.direction === "E" && rover.x === 0){
			console.log("Rover can´t move");
		} else if (rover.direction === "N" && rover.y >= 0){
			rover.y ++;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		} else if (rover.direction === "S" && rover.y > 0 && rover.y <= 9){
			rover.y --;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		} else if (rover.direction === "E" && rover.x > 0 && rover.x <= 9){
			rover.x --;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		}	else if (rover.direction === "W" && rover.x >= 0 && rover.x < 9){
			rover.x ++;
			rover.travelLog.push("x: " + rover.x + " - y: " + rover.y);
			console.log("Rover´s position :" + rover.x + " - " + rover.y);
		}	else {
			console.log("Position undefined")
		}
	},

	commands : function (){
		for (i = 0; i <= rover.phrase.length; i ++){
			switch(rover.phrase[i]) {
			  case "f":
				  rover.moveForward(); 
				  console.log("moveForward was called");
				  break;
			  case "r":
				  rover.turnRight(); 
				  console.log("turnRight was called");
				  break;
				case "l":
				  rover.turnLeft(); 
				  console.log("turnLeft was called");
				  break;
				case "b":
				  rover.moveBackward(); 
				  console.log("moveBackward was called");
				  break;
				default:
				   console.log("Undefined letter");
			}

		}
		console.log(rover.travelLog);

	}

};


/*
Validate Inputs: If we enter a letter into our inputs that isn’t a rover command,
nothing happens. For example ffzzy would simply move forward twice. Add
validation so that the inputs must be f, b, r, or l.
The following require you to actually create a grid for the rover to move around
on. In code, these grids are often represented as two dimensional arrays.

• Obstacles - Create obstacles for the rover. If the rover’s next move would run it
into an obstacle, stop it from moving forward and report the obstacle as found
with console.log.
• Other Rovers - Add additional rovers to the map. Have them take turns moving.
If one rover is going to run into the other, you should stop the rover
and console.log a message saying so.
 */