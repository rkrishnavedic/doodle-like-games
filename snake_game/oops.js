//Object oriented Programming

//Javascript Object Notation (JSON)

//allows to create object without defining class

var bird={
        x: 100,
        y: 20,
        color: "blue",
        eggs:[13,24,35,41],
        
fly: function(){
    console.log("Bird is flying", this.x, this.y);
}

};


//for loop
for(let i=0;i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}

//for each loop

bird.eggs.forEach(function(val, idx){
    console.log(idx,val);
});

//Next lesson

//one method to create objects
function Fruit(taste, color){
    this.color=color;
    this.taste=taste;
}

let mango= new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");

//another way

var apple = {
tates: "sweet",
color: "red",
}

//Class Keyword (ECMAScript 2015)


//Class Declaration

class FruitClass{
    
    constructor(taste, color){
        this.color=color;
        this.taste=taste;
    }
    
};


//We dont have hoisting in case of Class as we do have in Function

//Class Expression
let FruitExp = class{
    constructor(taste, color){
        this.color=color;
        this.taste=taste;
    }
};
let kiwi2 = new FruitExp("sour", "kiwi");

let kiwi= new FruitClass ("sour", "green");
