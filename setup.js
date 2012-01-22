
function setup(){

	// draw stage on screen
	$("#stage").attr("width", config.stage.width);
	$("#stage").attr("height", config.stage.height);
	
	// establish virtual view coordinates
	focus = new point(config.focus.x, config.focus.y, config.focus.z);
	pocus = new point(config.pocus.x, config.pocus.y, config.pocus.z);
	pocup = new point(config.pocup.x, config.pocup.y, config.pocup.z);

	// build shape
	p1 = new point(0,  0,  0);
	p2 = new point(88, 0,  0);
	p3 = new point(88,88,  0);
	p4 = new point(0, 88,  0);
	p5 = new point(0,  0, 88);
	p6 = new point(88, 0, 88);
	p7 = new point(88,88, 88);
	p8 = new point(0, 88, 88);
	gon1 = new polygon([p1, p2, p3, p4]);
	gon2 = new polygon([p5, p6, p7, p8]);
	gon3 = new polygon([p5, p6, p2, p1]);
	gon4 = new polygon([p7, p8, p4, p3]);
	gon5 = new polygon([p2, p3, p7, p6]);
	gon6 = new polygon([p1, p4, p8, p5]);
	dron = new polyhedron([gon1, gon2, gon3, gon4, gon5, gon6]);
	
	alert(rad_to_deg(flatten(p6)));
	
	// build regular steps
	step = function(){

	}
	
	
	// build controls
	$(document).keydown(function(e) {
		var code = e.which;
		if(typeof(keycode[code])!="undefined"){
			var direction = keycode[code];
			switch(direction){
				case "right":
					dron.translate(1, 0, 0);
					break;
				case "left":
					dron.translate(-1, 0, 0);
					break;
				case "up":
					dron.translate(0, 1, 0);
					break;
				case "down":
					dron.translate(0, -1, 0);
					break;
				case "in":
					dron.translate(0, 0, 1);
					break;
				case "out":
					dron.translate(0, 0, -1);
					break;
				case "f+":
					config.focus.z+=10;
					break;
				case "f-":
					config.focus.z-=10;
					break;
			}
		}
	});
	
	
	
}

// ------------------------------------------------------------------------- //