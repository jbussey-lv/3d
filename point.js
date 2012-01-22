function point(x, y, z){
	
	var random_id = function(){
		var id = "point_"+(Math.floor(Math.random() * 10000000));
		return id;
	}
	
	this.x = x;
	this.y = y;
	this.z = z;
	this.flat = {x: 0, y: 0};
	this.id = random_id();
	
	this.translate = function(dx, dy, dz){
		this.x += dx;
		this.y += dy;
		this.z += dz;
	}
	
	this.dif = function(target){
		var d = new Object();
		d.x = this.x - target.x;
		d.y = this.y - target.y;
		d.z = this.z - target.z;
		d.mag = Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
		return d;
	}
	
	// set up a global array of points if one doesn't exist already
	if(typeof (points) == 'undefined'){points = new Array();}
	
	// add this line to it
	points.push(this);
	
}