function polygon(points){

	this.points = points
	this.lines  = new Array();

	for (var i=0; i<points.length; i++){
		
		var p1 = points[i];
		var p2 = points[(i+1)%points.length];
		
		this.lines.push(new line(p1, p2));
	}


	this.translate = function(dx, dy, dz){
		for(key in this.points){
			points[key].translate(dx, dy, dz);
		}
	}

	
}