
var result = 0;
var lastop;
var opFlag = false;

function getDisplay() {
    return document.getElementById("display");
}

function ac() {
	getDisplay().value = 0;
}

function c() {
    var txt = getDisplay()
    txt.value = txt.value.substring(0, txt.value.length-1);
    if(txt.value == "") {
    	txt.value = 0;
    }
}

function negation(){
    getDisplay().value *= -1;
}

function num(num) {
    var txt = getDisplay();
    if(opFlag){
        txt.value = num;
        opFlag=false;
    }else{
        if(txt.value == "0"){
            txt.value = num;
        }else{
            txt.value += num;
        }
    }
    opFlag = false;
}

function decimal() {
    var txt = getDisplay();
    if(opFlag){
        txt.value = "0."
    }else{
        if(txt.value.indexOf(".")==-1){
            txt.value += ".";
        }
    }
}

function compute(op) {
    var num = getDisplay().value;
    opFlag = true;
    switch(lastop){
        case "+" :
            result += parseFloat(num);
            break;
        case "-" :
            result -= parseFloat(num);
            break;
        case "x" :
            result *= parseFloat(num);
            break;
        case "/" :
            result /= parseFloat(num);
            break;
        case "=" :
            result = parseFloat(num);
            break;
        case "%" :
            result %= num;
            break;
  		default:
            result = parseFloat(num);
    }
  	getDisplay().value = result;
    lastop = op;
}

function mathOp(op){
    var num = getDisplay().value;
    opFlag = true;
    switch (op){  
        case "sin": 
            result = Math.sin(num);
            break;
        case "cos": 
            result = Math.cos(num);
            break;
        case "tan": 
            result = Math.tan(num);
            break;
        case "x^2":
            result =Math.pow(num, 2);
            break;
        case "2√x":
            result = Math.sqrt(num);
            break;
        default: result = parseFloat(num);
    }
    getDisplay().value = result;
}



