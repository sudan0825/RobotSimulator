

//get the robot element and create Global variables 
let king=document.getElementById('king');
let xPosition,yPosition,direction;
let autoAction;

//get Report box element

let reportbox=document.getElementById("reportBox");

//get the input value --set the robot's start position and direction
function initialPosition(){

    let x= document.getElementById("x");
    let y= document.getElementById("y");
    let f= document.getElementById("f");
    xPosition=(x.options[x.selectedIndex].text-1)*100;
    yPosition=(y.options[y.selectedIndex].text-1)*100;
    direction=(f.options[f.selectedIndex].text);

    king.style.display="block";
    king.style.left=xPosition+"px";
    king.style.top=yPosition+"px";
    king.innerHTML=direction;
}

//move the robot to the direction it is facing
function move(){
    if(OnStage()){
        if(direction=="North"){
            if(yPosition>0){

                yPosition-=100;
                king.style.top=yPosition+"px";

            }

        }else  if(direction=="South"){
            if(yPosition<400){

                yPosition+=100;
                king.style.top=yPosition+"px";

            }
        }else  if(direction=="East"){
            if(xPosition<400){

                xPosition+=100;
                king.style.left=xPosition+"px";

               
            }
        }else  if(direction=="West"){
            if(xPosition>0){

                xPosition-=100;
                king.style.left=xPosition+"px";
            }
        }
        if((xPosition==400&&direction=="East")||(yPosition==400&&direction=="South")||(xPosition==0&&direction=="West")||(yPosition==0&&direction=="North")){

            turnRight();
            king.innerHTML=direction;
        }
        if(reportbox.style.visibility=="visible"){
            reportbox.innerHTML=`PLACE   ${xPosition/100}, ${yPosition/100}, ${direction}`
        }
    }else{
        console.log("Please put Robot on stage")
    }


}
//automatically move the robot in clock direction
function autoMoving(){

    autoAction=setInterval(move,1000);
}

//stop auto moving
function stop(){
    if(autoAction){
        console.log(autoAction)
        clearInterval(autoAction);
    }

    else{
        console.log(autoAction)
    }
}

//turn the direction to left
function turnLeft(){
    if(OnStage()){
        if(direction=="North"){
            direction="West"
        }else if(direction=="West"){
            direction="South"
        }else if(direction=="South"){
            direction="East";
        }else if(direction=="East"){
            direction="North"
        }
        king.innerHTML=direction;
    }else{
        console.log("Please put Robot on stage")
    }





}

//turn the direction to right
function turnRight(){
    if(OnStage()){
        if(direction=="North"){
            direction="East";

        }else if(direction=="West"){
            direction="North"
        }else if(direction=="South"){
            direction="West"
        }else if(direction=="East"){
            direction="South"

        }
        king.innerHTML=direction;
    }else{
        console.log("Please put Robot on stage")
    }



}
//get the position report
function report(){


    reportbox.innerHTML=`PLACE   ${xPosition/100}, ${yPosition/100}, ${direction}`
    if(reportbox.style.visibility=="visible"){
        reportbox.style.visibility="hidden";
    }else{
        reportbox.style.visibility="visible";
    }


}
// CHECK whether the Robot is on the stage or not
function OnStage(){

    let dArray=["North", "West", "East", "South"];

    if(!dArray.includes(direction)||xPosition<0||xPosition>400||yPosition<0||yPosition>400)
        return false;
    return true;
}



