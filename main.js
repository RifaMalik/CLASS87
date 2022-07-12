var canvas = new fabric.Canvas("myCanvas");

player_X = 100;
player_Y = 150;
block_img_width=30;
block_img_height=30;

var player_object="";
var block_img_object="";

function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_object);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_img_object);

    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown (e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("p & shift pressed togerther");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true&&keyPressed=="77"){
        console.log("m & shift pressed togerther");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
       if(keyPressed=="37"){
        left();
        console.log("left");
       }

       if(keyPressed=="38"){
        up();
        console.log("up");
       }

       if(keyPressed=="39"){
        right();
        console.log("right");
       }

       if(keyPressed=="40"){
        down();
        console.log("down");
       }

       if(keyPressed=="57"){
        new_image("cloud.jpg");
        console.log("c");
       }

       if(keyPressed=="58"){
        new_image("dark_green.png");
        console.log("d");
       }

       if(keyPressed=="71"){
        new_image("ground.png");
        console.log("g");
       }

       if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("l");
       }
    
      if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("r");
       }

       if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
       }

       if(keyPressed=="85"){
        new_image("unique.png");
        console.log("u");
       }

       if(keyPressed=="87"){
        new_image("wall.jpg");
        console.log("w");
       }

       if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
       }
    
}

function left() {
    if( player_X>0){
        player_X=player_X-block_img_width;
        console.log("block img width ="+block_img_width);
        console.log("when left arrow key is pressed,X="+player_X+"y ="+player_Y);
        canvas.remove(player_object);
        player_Update();
    }
}

function right() {
    if( player_X<=850){
        player_X=player_X+block_img_width;
        console.log("block img width ="+block_img_width);
        console.log("when right arrow key is pressed,X="+player_X+"y ="+player_Y);
        canvas.remove(player_object);
        player_Update();
    }
}

function up() {
    if( player_Y>0){
        player_Y=player_Y-block_img_height;
        console.log("block img height ="+block_img_height);
        console.log("when up arrow key is pressed,X="+player_X+"y ="+player_Y);
        canvas.remove(player_object);
        player_Update();
    }
}

function down() {
    if( player_Y<=500){
        player_Y=player_Y+block_img_height;
        console.log("block img height ="+block_img_height);
        console.log("when up arrow key is pressed,X="+player_X+"y ="+player_Y);
        canvas.remove(player_object);
        player_Update();
    }
}

