function draw_line(id, p1, p2, color){
	
	var edge = makeSVG(
		'line',
		{
			id: id,
			x1: p1.x2,
			y1: p1.y2,
			x2: p2.x2,
			y2: p2.y2,
			style: 'stroke: '+color+'; stroke-width: '+config.line_width+'px;'
		}
	);
	document.getElementById('stage').appendChild(edge);
}

function makeSVG(tag, attrs) {
	var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
	for (var k in attrs){
		el.setAttribute(k, attrs[k]);
	}
	return el;
}

function deg_to_rad(deg){
	var rad = deg * (Math.PI / 180);
	return (rad);
}

function rad_to_deg(rad){
	var deg = rad * (180 / Math.PI);
	return (deg);
}

function render(){
	// loop through all points and flatten them
	for(var i=0; i<points.length; i++){
		var point = points[i];
		var d = point.dif(config.focus);
		var ratio = (-1 * config.focus.z)/(d.z);
		point.x2 = ratio * d.x + config.stage.width/2;
		point.y2 = (ratio * -1*d.y + config.stage.height/2);
	}


	// loop through all the lines
	for(var i=0; i<lines.length; i++){
		// find out if it's drawn yet
		var line = lines[i];
		
		if(!document.getElementById(line.id)){
			draw_line(line.id, line.p1, line.p2, line.color);
		}
		
		else{
			var sprite = document.getElementById(line.id)
			sprite.setAttribute("x1", line.p1.x2);
			sprite.setAttribute("y1", line.p1.y2);
			sprite.setAttribute("x2", line.p2.x2);
			sprite.setAttribute("y2", line.p2.y2);
		}
	}
}

function flatten(target){
	var va = focus.dif(pocus);
	var vb = focus.dif(target);
	var adotb = dot_product(va, vb);
	var seperation_angle = Math.acos(adotb / (va.mag * vb.mag));
	var rotation_angle = 9;
	return (angle);
}


function dot_product(v1, v2){
	var product_x = v1.x * v2.x;
	var product_y = v1.y * v2.y;
	var product_z = v1.z * v2.z;
	var sum = product_x + product_y + product_z;
	
	return sum;
}



