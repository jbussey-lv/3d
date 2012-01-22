var config = {
	go:			1,
	delay: 		1,
	line_color: "blue",
	line_width: 1.2,
	stage:		{width: 800, height: 500},
	focus:		new point(0, 0, -800),
	pocus:		new point(0, 0, 0),
	pocup:		new point(0, 1, 0)
}

var camera = new line(pocus, focus);

var keycode = new Array();
keycode[39] = "right";
keycode[37] = "left";
keycode[38] = "up";
keycode[40] = "down";
keycode[13] = "in";
keycode[16] = "out";
keycode[65] = "f+";
keycode[90] = "f-";