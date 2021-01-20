var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
function move(x, xd){
	x = (xd - x) / 2;
	return x;
}var xp = 100;
var yp = 100;
var ax = 100;
var ay = 100;
var bx = 0;
var by = 400;
var cx = 400;
var cy = 400;
var color = 'black'
function start(){
	var i = setInterval('game()',1);
	
}
function stop(){
	var i = clearInterval(1);
}



function command() {
	let a = document.getElementById('input');
	let ta = document.getElementById('texta');
	var com = a.value;
	console.log(com);
	switch (com) {
		case 'start':
			ta.value += '\n' + '>start'
			start();
			break;
		case 'stop':
			ta.value += '\n' + '>stop'
			stop();
			break
		case 'red':
			ta.value += '\n' + '>color changed to red'
			color = 'red';
			break;
		case 'yellow':
			ta.value += '\n' + '>color changed to yellow'
			color = 'yellow';
			break;
		case 'green':
			ta.value += '\n' + '>color changed to green'
			color = 'green';
			break;
		case 'blue':
			ta.value += '\n' + '>color changed to blue'
			color = 'blue';
			break;
		case 'purple':
			ta.value +=  '\n' + '>color changed to purple'
			color = 'purple';
			break
		default:
			alert('unknown command')
			break;
	}
	a.value = '';
	
}
function game(){
	let n = Math.round((Math.random()*10))%3;
	if(n == 0){
		xp += move(xp, ax);
		yp += move(yp, ay);
	}
	if(n == 1){
		xp += move(xp, bx);
		yp += move(yp, by);
	}
	if(n == 2){
		xp += move(xp, cx);
		yp += move(yp, cy);
	}
	ctx.fillStyle = color
	ctx.fillRect(xp, yp, 1, 1);
	ctx.fillRect(ax, ay, 1, 1);
	ctx.fillRect(bx, by, 1, 1);
	ctx.fillRect(cx, cy, 1, 1);
}

