function polyhedron(polygons){

	this.polygons 	= polygons;
	
	this.points 	= new Array();
	
	// create an array of points in this figure to use for transforms
	var used_ids 	= new Array();
	for(key in this.polygons){
		var polygon = this.polygons[key];
		for(k in polygon.points){
			var point = polygon.points[k];
			if($.inArray(point.id, used_ids) == -1){
				points.push(point);
			}
		}
	}
	
	this.translate = function(dx, dy, dz){
		for(key in this.points){
			this.points[key].translate(dx, dy, dz);
		}
	}


}