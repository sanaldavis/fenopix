var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');

draw= document.getElementById('draw');
reset= document.getElementById('reset');

var color= ['red', 'green', 'blue', 'yellow', 'pink', 'black'];
i=0;
reset.onclick= function (e)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	i=0;
}

draw.onclick= function (e)
{
	canvas.onmousedown = function(e)
	{
		img=context.getImageData(0, 0, canvas.width, canvas.height);
		drag=true;
		start_x=e.x;
		start_y=e.y;
	}
	canvas.onmouseup = function (e)
	{
		drag = false;
		i++;
		if(i>5)
			i=0;
	}
	canvas.onmousemove = function (e)
	{
		if(drag)
		{
		context.putImageData( img, 0, 0);
		context.fillStyle= color[i];
		context.beginPath();
		end_x=e.x;
		end_y=e.y;
		dx=Math.abs(end_x - start_x);
		dy=Math.abs(end_y - start_y);
		midx=(start_x + end_x) / 2;
		midy=(start_y + end_y) / 2;
		radius=Math.sqrt( dx*dx + dy*dy) / 2;
		context.arc(midx, midy, radius, 0, Math.PI*2, false);
		context.fill();
		context.stroke();
		}
 	}
}
