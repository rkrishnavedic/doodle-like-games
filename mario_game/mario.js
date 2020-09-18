function initialize(){
    
    canvas = document.getElementById("mycanvas");
    
    end_game=false;
    
    width=canvas.width=700;
    height=canvas.height=500;
    
    pen=canvas.getContext('2d');
    
    bomb1={x: 150, y:50, w:60, h:60, speed: 20,};
    bomb2={x:300, y:150, w:60, h:60, speed: 30,};
    bomb3={x:450, y:20, w:60, h:60, speed:40};
    
    bomb=[bomb1,bomb2,bomb3];
    
    player = {x:20, y:(height/2), w:60, h:60, speed: 20, motion: false, health:100,};
    
    target={
    x:width-100,
    y:height/2,
    w:60,
    h:60,
    
    };
    
    player_photo=new Image;
    player_photo.src = "mario.png";
    
    project_photo=new Image;
    project_photo.src="appy.png";
    
    mydream=new Image;
    mydream.src="apple.png";
    
    document.addEventListener('keypress', function(){
        console.log("key pressed ");
        player.motion=true;
       
    });
        document.addEventListener('keyup', function(){
        console.log("key up");
        player.motion=false;
                        });
}

function accident_ho_gaya(a,b){
        if(((a.y>=b.y && a.y<=(b.y+b.h))||((a.y+a.h)>=b.y && a.y<=b.y))&&((a.x>=b.x && a.x<=(b.x+b.w))||((a.x+a.w)>=b.x && a.x<=b.x))) return true;
    return false;
}

function draw(){
    pen.clearRect(0,0,width, height);
    pen.fillStyle = "red";
    pen.drawImage(player_photo, player.x, player.y, player.w, player.h);
    pen.drawImage(mydream, target.x, target.y, target.w, target.h);
    
    for(let i=0;i<bomb.length; i++){
        pen.drawImage(project_photo, bomb[i].x, bomb[i].y, bomb[i].w, bomb[i].h);
    }
    
    pen.fillStyle="white";
    pen.fillText("Score is your health :" + player.health, 10, 10);
}


function update(){
    if(player.motion==true){
        player.x+=player.speed;
        player.health+=20;
    }
    for(let i=0;i<bomb.length;i++){
        if(accident_ho_gaya(player, bomb[i])){
            player.health-=50;
            if(player.health<0){
                end_game=true;
                alert("Game over! Your Score : "+player.health);
                //return;
            }
        }
    }
    
    if(accident_ho_gaya(player, target)){
        end_game=true;
        alert("You won the Game with Score: "+player.health);
        //return ;
    }
    
    for(let i=0;i<bomb.length; i++){
        bomb[i].y+=bomb[i].speed;
        if(bomb[i].y<0 || bomb[i].y>=height){bomb[i].speed*=-1;}
    }
}


function mario_is_ready(){
    if(end_game==true){clearInterval(con);}
    draw();
    update();
}

initialize();
var f=setInterval(mario_is_ready, 150);

f;
