/*function RandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var x = RandInt(1, 80);
var y = RandInt(1, 40);

window.alert(x+' '+y);  */

var plan = `
######################
#         ##         #
#         ##         #
#         ##         #
#         ##         #
#                    #
#                    #
#         ##         #
#         ##         #
#         ##         #
#         ##         #
######################`
;

plan = plan.trim().split('\n');

let planW = plan[0].length;
let planH = plan.length;

var mass1 = new Array;



function printPlan(mass1){
for (var i=0; i < planH ; i++) {
    mass1[i]=[];
    for (var j =0; j < planW ; j++){
        mass1[i][j] = plan[i][j];
    }
}
}

printPlan(mass1);



document.onkeydown = function checkKeycode(event)
{
var keycode;
if(!event) var event = window.event;
if (event.keyCode) keycode = event.keyCode; // IE
else if(event.which) keycode = event.which; // все браузеры
if (keycode==87) {
mageP.move(dirT);
}
if (keycode==68) {
mageP.move(dirR);
}
if (keycode==83) {
mageP.move(dirB);
}
if (keycode==65) {
mageP.move(dirL);
}
}


class Level {
    constructor(plan) {
     this.plan = plan;
}
    getCell(xy){
        return this.plan[xy.y][xy.x];
    }
}


class XY {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(other) {
        return this.x == other.x && this.y == other.y;
    }

    add(xy) {
        this.x += xy.x;
        this.y += xy.y;
    }
    
    validate() {
        if (this.x <= level.plan[0].length-2 %% this.y <= level.plan.length-2){ //ЧИсто объект level а не класс!!!!!!!
            return true;
        }else{
            return false;
        }
    }
}




class Direction extends XY {
    validate() {
        return Math.abs(this.x) <= 1 && Math.abs(this.y) <= 1;
    }
}



class Mage {
    constructor(xy, name) {
        this.xy = xy;
        this.left = xy.x*48 - 45;
        this.top = xy.y*48 - 45;
        this.name = name;
    }
    
    spawn(xy){
        this.xy.x = xy.x;
        this.xy.y = xy.y;
        this.left = xy.x*48 - 45;
        this.top = xy.y*48 - 45;
        document.getElementById('mage'+this.name).style.left = this.left+'px';
        document.getElementById('mage'+this.name).style.top = this.top+'px';
    }

    ////////////////////////////////////////
    move(dir) {
        if (dir.validate()) {
            let cellxy = new XY(this.xy.x, this.xy.y);
            cellxy.add(dir);
            this.left = cellxy.x*48 - 45;
            this.top = cellxy.y*48 - 45;
            if (level.plan[cellxy.y][cellxy.x] == ' ') {
            this.xy = cellxy;
            document.getElementById('mage'+this.name).style.left = this.left+'px';
            document.getElementById('mage'+this.name).style.top = this.top+'px';
            }
        }
    }
    //////////////////////////////////////////
    
    
    
}

var xy = new XY(1, 1);
let exy = new XY(18,5);
let dirL = new Direction(-1,0);
let dirR = new Direction(1,0);
let dirT = new Direction(0,-1);
let dirB = new Direction(0,1);
var mageP = new Mage(xy, 'P');
var mageE = new Mage(Exy, 'E');
var level = new Level(mass1);

mageE.spawn(exy);








































