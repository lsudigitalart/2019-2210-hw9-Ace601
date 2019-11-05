let img0;
let img1; 
let x;
let y;
let racecar1;
let speed;




function preload(){
   // img0 = loadImage('New .png');
    //img1 = loadImage('Adobe_20191104_055319 (1).png');

}

function setup(){
createCanvas(1378,700)

racecar1 = new Racecar(25, 100, random(5), speed, 2);

//racecar2 = new Racecar(245, 253, random(1),speed , 2);

//img0.resize(195, 100);

}

function draw(){
background(0)
track();

racecar1.move();
racecar1.show();
//racecar2.move();
//racecar2.show();
//image(img0,15 , 200);


}

function track(){
//Lane 1
    stroke(255)
strokeWeight(10)
line(0,185,1400,185)
//Lane 2
stroke(255)
strokeWeight(10)
line(0,350,1400,350)
//Lane 3
stroke(255)
strokeWeight(10)
line(0,500,1400,500)
//grass top
stroke(13, 145, 57)
strokeWeight(70)
line(0,20,1400,20)
//grass bottom
stroke(13, 145, 57)
strokeWeight(70)
line(0,670,1400,670)
}

class Racecar{ 

    constructor(x, y, speed,size){
    //body

this.size = size;
  this.y = y;
  this.x = x;
  this.speed = 0.5;


  this.move = function() {
   this.newMethod();
  this.y < this.y + random(-1, 1);
 x = x + 3;
 
}

    this.newMethod = function() {
        this.x < this.x + this.speed;
    }

this.show = function(){
    fill(123, 11, 160)
    noStroke()    
    rect(x,y,100,40)
   
    //tires
   
    fill(134, 126, 137)
    rect(x+10, 90, 25, 10, 10);//back tire
    rect(x+70, 90, 25,10,10);//front tire
    rect(x+10,140,25,10,10);//back tire
    rect(x+70,140,25,10,10);//front tire
   
    //front windshield
   
    fill(254, 255, 198)
    quad(x+70, 107, x+90, 105, x+90, 135, x+70, 132);
    //quad(x1, y1, x2, y2, x3, y3, x4, y4)
    
    
    

// //racecar2
     fill(237, 232, 111)
//     noStroke()    
   rect(x-230,y+150,100,40)
//     //tires
     fill(134, 126, 137)
     rect(x-220, 240, 25, 10, 10);//back tire
     rect(x-170, 240, 25,10,10);//front tire
     rect(x-220,290,25,10,10);//back tire
     rect(x-170,290,25,10,10);//front tire
//     //front windshield
//     fill(254, 255, 198)
     quad(x-160, 283, x-160, 255, x-140, 255, x-140, 287);

//racecar3
fill(123, 11, 160)
    noStroke()    
    rect(x+130,y+300,100,40)
    //tires
    fill(134, 126, 137)
    rect(x+285/2, 196*2, 25, 10, 10);//back tire
    rect(x+380/2, 195*2, 25,10,10);//front tire
    rect(x+2*74,219*2,25,10,10);//back tire
    rect(x+390/2,880/2,25,10,10);//front tire
    //front windshield
    fill(254, 255, 198)
   quad(x+105*2, 863/2, x+105*2, 815/2, x+110*2, 805/2, x+110*2, 867/2);
            //quad(x1, y1, x2, y2, x3, y3, x4, y4)




}

  }

}
 





