function line(p1, p2){

	// set attibutes
	this.id = random_id();
	this.p1 = p1;
	this.p2 = p2;
	this.color = config.line_color;
	
	// rotate
	this.rotate = function(pivot, dtheta){
		this.p1.rotate(pivot, dtheta);
		this.p2.rotate(pivot, dtheta);
	}
	
	// spin (rotate around center)
	this.spin = function(dtheta){
		var c = this.get_center();
		this.rotate(c, dtheta)
	}
	
	this.put = function(point){
		var c = this.get_center();
		var dx = point.x - c.x;
		var dy = point.y - c.y;
		this.translate(dx, dy);
	}
	
	// translate
	this.translate = function(dx, dy){
		this.p1.x += dx;
		this.p1.y += dy;
		this.p2.x += dx;
		this.p2.y += dy;
	}
	
	this.get_center = function(){
		var c = new point((this.p1.x + this.p2.x)/2, (this.p1.y + this.p2.y)/2);
		return (c);
	}
	
	// scale
	this.scale = function (pivot, factor){
		this.p1.scale(pivot, factor);
		this.p2.scale(pivot, factor);
	}
	
	this.set_color = function(color){
		this.color = color;
	}
	
	// set up a global array of lines if one doesn't exist already
	if(typeof (lines) == 'undefined'){lines = new Array();}
	
	// add this line to it
	lines.push(this);

}