var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio") 
block_y=1;
 block_x=1;

block_image_width = 600;
block_image_height = 500;

var block_image_object= "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		})
		canvas.add(block_image_object);
	});
}

function playSound(){
    x.play();	
}
