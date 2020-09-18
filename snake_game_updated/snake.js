function initialize(){
    canvas = document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    
    score_board=0;
    game_over=false;
    
    food_location = getRandomLocation();
    
    snake = {
    initial_length: 5,
    color: "aqua",
    cells:[],
    direction: "right",
    cell_size: 20,
    reactions:["Yummy!","Wah!","Tasty!", "Yeye!","Machaya!"],
        
    createSnake: function(){
        for(let i=this.initial_length-1;i>=0;i--){
            this.cells.push({x:i, y:0});
        }
    },
       
    drawSnake:function(){
        for(let i=0;i<this.cells.length;i++){
            pen.fillStyle=this.color;
            pen.strokeStyle = "white";
            pen.strokeRect(this.cells[i].x*this.cell_size, this.cells[i].y*this.cell_size, this.cell_size, this.cell_size);
            pen.fillRect(this.cells[i].x*this.cell_size, this.cells[i].y*this.cell_size, this.cell_size-3, this.cell_size-3);
        }
    },
        
    updateSnake: function(){
    
        var headx=this.cells[0].x;
        var heady=this.cells[0].y;
        
        if((headx*this.cell_size)>=W || headx<0 || heady<0 || (heady*this.cell_size)>=H){
            game_over=true;
            alert("Oops, you hit the wall! Your Score: "+score_board);
            return;
        }
        
        for(let i=1;i<this.cells.length;i++){
            if(headx==this.cells[i].x && heady==this.cells[i].y){
                game_over=true;
                alert("Oops, you tried to eat yourself! Your Score: "+score_board);
                return;
            }
        }
        
        if(headx==food_location.x && heady==food_location.y){
            food_location=getRandomLocation();
            this.cells.unshift({x:headx, y:heady});
            score_board+=10;
            //pen.clearRect(0,0,W,H);
            good_react=Math.floor(Math.random()*4.5);
            good_react_time=5;
        }
        
        
        var nextx=headx;
        var nexty=heady;
        if(snake.direction=='right'){
            nextx+=1;
        }
        else if(  snake.direction=='left'){
            nextx-=1;}
        else if(snake.direction=='down'){
            nexty+=1;
        }else if(snake.direction=='up'){
            nexty-=1;
        }
        
        
        this.cells.pop();
        this.cells.unshift({x:nextx,y:nexty});
    },
        
    };
    
    snake.createSnake();
    
    function kon_sa(e){
        if(e.key=='ArrowDown'){
            if(snake.direction!='up'){
                snake.direction='down';}
            
        }else if(e.key=='ArrowRight'){
            if(snake.direction!='left'){
                snake.direction='right';}
        }else if(e.key=='ArrowLeft'){
            if(snake.direction!='right'){
                snake.direction='left';}
        }else{
            if(snake.direction!='down'){
                snake.direction='up';}
        }
    }
    
    document.addEventListener('keydown', kon_sa);
    //canvas.addEventListener("click", good_start);
}

function draw(){
    pen.clearRect(0,0,W,H);
    //pen.fillStyle = "blue";
    //pen.fillRect(box.x, box.y, box.w, box.h);
    
    pen.fillStroke= "red";
    pen.strokeRect(food_location.x*20, food_location.y*20, snake.cell_size, snake.cell_size);
    pen.fillStyle = "orange";
    pen.fillRect(food_location.x*20, food_location.y*20, snake.cell_size-3, snake.cell_size-3);
    
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
    pen.font="80px Courier";
    pen.strokeText("Score: "+score_board, (W/4), (H/2));
    if(good_react_time>0){
        pen.font="80px Courier";
        pen.strokeText(snake.reactions[good_react], (W/4)+100, (H/2)+100);
        good_react_time-=1;
    }
}

function gameloop(){
    console.log("inside loop");
    if(game_over==true){
        pen.clearRect(0,0,W,H);
        pen.font="80px Courier";
        pen.strokeText("Game Over!", (W/4), (H/2));
        clearInterval(start_game);
        return;
    }
    draw();
    update();
    
}

function getRandomLocation(){
    var foodx= Math.round(Math.random()*((W-20)/20));
    var foody= Math.round(Math.random()*((H-20)/20));
    
    var food_xy= {x:foodx, y:foody};
    return food_xy;
}

initialize();
                                                                      
var start_game = setInterval(gameloop, 150);
start_game;
                


