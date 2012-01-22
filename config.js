var config = {
	go:			1,
	delay: 		1,
	line_color: "blue",
	line_width: 1.2,
	stage:		{width: 800, height: 500},
	focus:		{x: 0, y: 0, z:	-800},
	pocus:		{x: 0, y: 0, z: 0},
	pocup:		{x: 0, y: 10,z: 0}
}

var keycode = new Array();
keycode[39] = "right";
keycode[37] = "left";
keycode[38] = "up";
keycode[40] = "down";
keycode[13] = "in";
keycode[16] = "out";
keycode[65] = "f+";
keycode[90] = "f-";