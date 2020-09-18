//Object oriented Programming

//Javascript Object Notation (JSON)

//canvas is used to draw graphics

function init(){
    canvas = document.getElementById("mycanvas");

    W = canvas.width=600;
    H = canvas.height=600;
    
    factor = 40;
    
    game_over=false;
    
    score_board=5;
    
    inc=0;
    

    pen = canvas.getContext('2d');
    
    //Food Components
    
    food_ph=new Image();
    food_ph.src="apple.png";
    
    //Trophy Components
    
    trophy = new Image();
    trophy.src = "trophy.png";
    
    //Randomly get the food location
    
    snake_body = new Image ();
    snake_body = "snake_body.png";
    
    snake_head = new Image();
    snake_head = "snake_head.png";
    
    food = getRandom();

    snake = {
    initial_len:5,
    color:"white",
    cells:[],
    direction:"right",
        
    createSnake: function(){
        for(var i=this.initial_len;i>0;i--){
            this.cells.push({x:i, y:0});
        }
    },
    drawSnake: function(){
        for(var i=0;i<this.cells.length;i++){
            pen.fillStyle="orange";
            pen.fillRect(this.cells[i].x*factor, this.cells[i].y*factor, factor-3,factor-3);
//            if(i==0){
//                //pen.fillStyle="red";
//                pen.drawImage(snake_head,this.cells[i].x*factor, this.cells[i].y*factor, factor-3,factor-3);
//            }else{
//                //pen.fillStyle="red";
//            pen.drawImage(snake_body,this.cells[i].x*factor,this.cells[i].y*factor, factor-3,factor-3);
//            }
        }
    },
    updateSnake:function(){
        var headx=this.cells[0].x;
        var heady=this.cells[0].y;
        
        if(headx==food.x && heady==food.y){
            console.log("food eaten");
            food=getRandom();
            score_board+=5;
            
            //inc+=100;
        }else{
            this.cells.pop();
        }
        
        var nextx, nexty;
        
        if(this.direction=="right"){
            nextx=headx+1;
            nexty=heady;
        }else{
            if(this.direction=="left"){
                nextx=headx-1;
                nexty=heady;
            }else{
                if(this.direction=="down"){
                    nextx=headx;
                    nexty=heady+1;
                }else{
                    nextx=headx;
                    nexty=heady-1;
                }
            }
        }
        
        this.cells.unshift({x:nextx, y:nexty, });
        
        var last_x = Math.round(W/factor);
        var last_y=Math.round(H/factor);
        
                              if(this.cells[0].y<0 || this.cells[0].x <0 || this.cells[0].x>last_x || this.cells[0].y>last_y){
            game_over=true;
        }
        
       
    },
    };
    
    snake.createSnake();
    
    //Adding Event Listener
    
    function keyPressed(e){
        if(e.key=="ArrowRight" || e.key =="d"){
            snake.direction="right";
        }
        else if(e.key=="ArrowLeft" || e.key=="a"){
            snake.direction="left";
        }
        else if(e.key=="ArrowDown" || e.key=="s"){
            snake.direction="down";
        }
        else if(e.key=="ArrowUp" || e.key=="w"){
            snake.direction="up";
        }
    }
    
    document.addEventListener('keydown', keyPressed);

}

function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    
    //pen.fillStyle="white";
    //pen.fillRect(rect.x, rect.y, rect.w, rect.h);

    //console.log("dreaw");
    
    pen.fillStyle = food.color;
    
    pen.drawImage(food_ph, food.x*factor, food.y*factor, factor, factor);
    
    //pen.drawImage(trophy, 18,20,factor,factor);
    pen.fillStyle="white";
    pen.font = "20px Roboto";
    pen.fillText("Score: " + score_board, 50, 50);
}

function update(){
    //console.log("update");
//    rect.x+=rect.speed;
//    if(rect.x>W-rect.w  || rect.x < 0){
//        rect.speed*=-1;
//    }
    snake.updateSnake();

}

function getRandom(){
    var food_x = Math.round(Math.random()*(W-factor)/factor);
    var food_y = Math.round(Math.random()*(W-factor)/factor);
    
                            var food = {
    x: food_x,
    y: food_y,
    color: "red",
    }
                            
                            return food;
                            
}

function gameloop(){


    if(game_over==true){
        clearInterval(con);
        alert("Game Over! Your Score is "+ score_board);
        return;
    }

    console.log("in gameloop");
    draw();
    update();
}

init();


                            
function start_game(){
        console.log("game started!");
    }

canvas.addEventListener('keydown', start_game);
                            
var con = setInterval(gameloop, 200);
                            
con;
                            
//con;

/*
 
 Learnig Material Below : about Event Listners
 
 
 
 
canvas = document.getElementById("mycanvas");
function f(){
    console.log("You Clicked on canvas");
}

canvas.addEventListener('click', f);

function f2(e){
    //e is class object and key is one of its attribute;
    console.log("You Pressed ", e.key);
}

document.addEventListener('keydown', f2);

*/
