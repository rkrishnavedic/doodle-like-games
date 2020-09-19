function getHistory(){
    return document.getElementById("history").innerText;
}

function printHistory(num){
    document.getElementById("history").innerText=num;
}

function getFormatted(num){
    if(num=="-"){return "";}
    var n=Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function printOutput(num){
    if(num==""){
        document.getElementById('output').innerText=num;
    }
    else{
    document.getElementById('output').innerText=getFormatted(num);
    }
}

function getOuput(){
    return document.getElementById('output').innerText;
}

function extractNumber(num){
    return Number(num.replace(/,/g,''));
}

//alert(extractNumber("93,434,333,2"));

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            output=extractNumber(getOuput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
            }
            printOutput(output);
        }
        else{
            var output=getOuput();
            var history= getHistory();
            if(output!=""){
                output=extractNumber(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
        
    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click', function(){
        var output = extractNumber(getOuput());
        
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}
