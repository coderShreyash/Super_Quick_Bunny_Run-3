var bunny,carrot,edges;

function preload(){

bgImage=loadImage("bg.jpg");
py=loadImage("py.png")
pyl=loadImage("pyleft.png");
thornI=loadImage("thorn.png");
bun=loadImage("bunny.png");
carrotveg=loadImage("carrot.png");

}
function setup(){
createCanvas(1250,600);
bunny=createSprite(50,525,45,50);
carrot=createSprite(1200,50,40,75);
carrot.addImage(carrotveg);
carrot.scale=0.15;
edges=createEdgeSprites();

bunny.addImage(bun);
bunny.scale=0.175;
bunny.setCollider("rectangle",-5,100,240,450)

throneGroup = new Group();

obs1 = createSprite(50,300,150,25);
obs1.shapeColor="brown";
obs2 = createSprite(300,300,150,25);
obs2.shapeColor="brown";
obs3 = createSprite(550,300,150,25);
obs3.shapeColor="brown";
obs4 = createSprite(800,300,150,25);
obs4.shapeColor="brown";
obs5 = createSprite(1050,300,150,25);
obs5.shapeColor="brown";
obs20 = createSprite(1300,300,150,25);
obs20.shapeColor="brown";

obs6 = createSprite(150,450,150,25);
obs6.shapeColor="brown";
obs7 = createSprite(400,450,150,25);
obs7.shapeColor="brown";
obs8 = createSprite(650,450,150,25);
obs8.shapeColor="brown";
obs9 = createSprite(900,450,150,25);
obs9.shapeColor="brown";
obs10 = createSprite(1150,450,150,25);
obs10.shapeColor="brown";

obs11 = createSprite(150,150,150,25);
obs11.shapeColor="brown";
obs12 = createSprite(400,150,150,25);
obs12.shapeColor="brown";
obs13 = createSprite(650,150,150,25);
obs13.shapeColor="brown";
obs14 = createSprite(900,150,150,25);
obs14.shapeColor="brown";
obs15 = createSprite(1150,150,150,25);
obs15.shapeColor="brown";

python1 = createSprite(80,150,150,15);
python1.shapeColor="yellow";
python1.velocityX=8;

python2 = createSprite(1180,250,150,15);
python2.shapeColor="yellow";
python2.velocityX=-8;

python3 = createSprite(80,350,150,15);
python3.shapeColor="yellow";
python3.velocityX=8;

python1.scale=0.05;
python2.scale=0.075;
python3.scale=0.05;

python1.addImage(py);
python2.addImage(pyl);
python3.addImage(py);

}
function draw(){
background(bgImage);
drawSprites();
if(keyDown("right")){
bunny.velocityX=+5;
bunny.velocityY=0;
}
else if(keyDown("left")){
    bunny.velocityX=-5;
    bunny.velocityY=0;
}
else if(keyDown("down")){
    bunny.velocityY=+5;
    bunny.velocityX=0;
}
else if(keyDown("up")){
    bunny.velocityY=-5;
    bunny.velocityX=0;
}  

bunny.collide(edges);

if(python1.x>1350){
    python1.x=-100;
}

else if(python3.x>1350){
    python3.x=-100;
}

else if(python2.x<-100){
    python2.x=1350;
}

if(bunny.isTouching(obs1)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs2)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs3)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs4)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs5)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs6)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs7)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs8)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs9)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}else if(bunny.isTouching(obs20)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}

else if(bunny.isTouching(obs10)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs12)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs11)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}else if(bunny.isTouching(obs13)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(obs14)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}

else if(bunny.isTouching(obs15)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}

else if(bunny.isTouching(carrot)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=1162.5;
    bunny.y=50;
    textSize(35);
    fill("orange");
    strokeWeight("2.5")
    stroke("red")
    text("Congratulations, You Helped The Bunny Eat the Carrot !!!",200,75);
}                              

if(bunny.isTouching(python1)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(python2)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
else if(bunny.isTouching(python3)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=525;
}
if(frameCount%45===0){

   var throne=createSprite(random(200,1000),random(100,600),8,random(30,100));
   var throne1=createSprite(random(200,1000),random(100,600),8,random(30,100));
   var throne2=createSprite(random(200,1000),random(100,600),8,random(30,100));

   throne.lifetime=45;
   throne1.lifetime=45;
   throne2.lifetime=45;

   throne.scale=0.1;
   throne1.scale=0.1;
   throne2.scale=0.1;

throne.addImage(thornI);
throne1.addImage(thornI);
throne2.addImage(thornI);


   throne.shapeColor="crimson";
   throne1.shapeColor="crimson";
   throne2.shapeColor="crimson";


   throneGroup.add(throne);
   throneGroup.add(throne1);
   throneGroup.add(throne2);
  
   throne=null;
   throne1=null;
   throne2=null;
   
}
for(var i=0;i<throneGroup.length;i++){
    var currentThrone = throneGroup[i];
    if(bunny.isTouching(currentThrone)){
        bunny.velocityX=0;
        bunny.velocityY=0;
        bunny.x=50;
        bunny.y=525;
        
    }
}
}