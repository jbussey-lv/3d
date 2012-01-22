function line(p1, p2){

	// set attibutes
	this.id = random_id();
	this.p1 = p1;
	this.p2 = p2;
	
	// translate
	this.translate = function(dx, dy, dz){
		this.p1.x += dx;
		this.p1.y += dy;
		this.p1.z += dz;
		this.p2.x += dx;
		this.p2.y += dy;
		this.p2.z += dz;
	}
	
	// find center
	this.get_center = function(){
		var x = this.p1.x + this.p2.x)/2;
		var y = this.p1.y + this.p2.y)/2;
		var z = this.p1.z + this.p2.z)/2;
		var c = new point(x, y, z);
		return (c);
	}
	
	// set up a global array of lines if one doesn't exist already
	if(typeof (lines) == 'undefined'){lines = new Array();}
	
	// add this line to it
	lines.push(this);

}