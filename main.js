

  

  var canvas = new fabric.Canvas('myCanvas');
  ctx=canvas.getContext("2d");

  nasa_mars_images_array=["n_img_1.jpg","n_img_2.jpg","n_img_3.jpg","n_img_4.jpg","n_img_5.jpg"];


  random_number=Math.floor(Math.random()*6);
  console.log(random_number);

  function rover_update()
  {
	  fabric.Image.fromURL("rover.png", function(Img) {
		rover_object = Img;
  
		rover_object.scaleToWidth(150);
		rover_object.scaleToHeight(140);
		rover_object.set({
	  top:rover_y,
	  left:rover_x
	  });
	  canvas.add(rover_object);
  
	  });
  }

  rover_x=10;
  rover_y=10;

  rover_width=100;
rover_height=90;

  background_image=nasa_mars_images_array[random_number];
console.log("background_image= " + background_image);
rover_image="rover.png";

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
    }
	function uploadBackground()
    {
        ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    }
	function  uploadrover()
	{
	  ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
	}
  
  
  block_image_width = 30;
  block_image_height = 30;
  
  var rover_object= "";
  var block_image_object= "";

  

  
 
  
  function new_image(get_image)
  {
	  fabric.Image.fromURL(get_image, function(Img) {
	  block_image_object = Img;
  
	  block_image_object.scaleToWidth(block_image_width);
	  block_image_object.scaleToHeight(block_image_height);
	  block_image_object.set({
	  top:rover_y,
	  left:rover_x
	  });
	  canvas.add(block_image_object);
  
	  });
  
  }
  
  window.addEventListener("keydown", my_keydown);
  
  function my_keydown(e)
  {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey == true && keyPressed == '80')
  {
	  console.log("p and shift pressed together");
	  block_image_width = block_image_width + 10;
	  block_image_height = block_image_height + 10;
	  document.getElementById("current_width").innerHTML = block_image_width;
	  document.getElementById("current_height").innerHTML = block_image_height;	
  }
  if(e.shiftKey && keyPressed == '77')
  {
	  console.log("m and shift pressed together");
	  block_image_width = block_image_width - 10;
	  block_image_height = block_image_height - 10;
	  document.getElementById("current_width").innerHTML = block_image_width;
	  document.getElementById("current_height").innerHTML = block_image_height;
  }
  
	  if(keyPressed == '38')
	  {
		  up();
		  console.log("up");
	  }
	  if(keyPressed == '40')
	  {
		  down();
		  console.log("down");
	  }
	  if(keyPressed == '37')
	  {
		  left();
		  console.log("left");
	  }
	  if(keyPressed == '39')
	  {
		  right();
		  console.log("right");
	  }
	  if(keyPressed == '87')
	  {
		  new_image('wall.jpg'); 
		  console.log("w");
	  }
	  if(keyPressed == '71')
	  {
		  new_image('ground.png'); 
		  console.log("g");
	  }
	  if(keyPressed == '76')
	  {
		  new_image('light_green.png'); 
		  console.log("l");
	  }
	  if(keyPressed == '84')
	  {
		  new_image('trunk.jpg'); 
		  console.log("t");
	  }
	  if(keyPressed == '82')
	  {
		  new_image('roof.jpg'); 
		  console.log("r");
	  }
	  if(keyPressed == '89')
	  {
		  new_image('yellow_wall.png'); 
		  console.log("y");
	  }
	  if(keyPressed == '68')
	  {
		  new_image('dark_green.png'); 
		  console.log("d");
	  }
	  if(keyPressed == '85')
	  {
		  new_image('unique.png'); 
		  console.log("u");
	  }
	  if(keyPressed == '67')
	  {
		  new_image('cloud.jpg'); 
		  console.log("c");
	  }
	  
  }
  function up()
  {
	  if(rover_y >=0)
	  {
		rover_y = rover_y - block_image_height;
		  console.log("block image height = " + block_image_height);
		  console.log("When Up arrow key is pressed, X =  " + rover_x + " , Y = "+rover_y);
		  canvas.remove(rover_object);
		  rover_update();
		  uploadBackground();
		  uploadrover();
	  }
  }
  
  function down()
  {
	  if(rover_y <=500)
	  {
		rover_y = rover_y + block_image_height;
		  console.log("block image height = " + block_image_height);
		  console.log("When Down arrow key is pressed, X =  " + rover_x + " , Y = "+rover_y);
		  canvas.remove(rover_object);
		  rover_update();
		  uploadBackground();
		  uploadrover();
	  }
  }
  
  function left()
  {
	  if(rover_x >0)
	  {
		  rover_x = rover_x - block_image_width;
		  console.log("block image width = " + block_image_width);
		  console.log("When Left arrow key is pressed, X =  " + rover_x + " , Y = "+rover_y);
		  canvas.remove(player_object);
		  rover_update();
		  uploadBackground();
		  uploadrover();
	  }
  }
  
  function right()
  {
	  if(rover_x <=850)
	  {
		rover_x = rover_x + block_image_width;
		  console.log("block image width = " + block_image_width);
		  console.log("When Right arrow key is pressed, X =  " + rover_x + " , Y = "+rover_y);
		  canvas.remove(rover_object);
		  rover_update();
		  uploadBackground();
		  uploadrover();
	  }
  }
  