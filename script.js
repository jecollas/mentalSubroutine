const actionObj = {
  spaghetti: ["with meatball", "meatball-free", "secret"],
  drink: ["gay little", "gay big", "gay medium", "secret straight"],
  nap: ["cozy", "stressful", "surprise", "secret"]
}

const target = ["enemy", "shadow-self", "enemy", "that guy", "friend", "enemy", "that guy", "enemy", "enemy", "bystander", "child", "enemy", "bystander", "television", "bystander", "enemy"];

function ANGRY() {
  var check = Math.floor(Math.random() * 10);

  if (check % 2) {
    x = "yes";
  } else {
    x = "no";
  }

  return x;
}

function KILL(arr) {
  return Math.floor(Math.random() * arr.length);
}

const ISMAD = "yes"; // if yes, then true
const ISHUNGRY = "yes";
const ISTHIRSTY = "yes";
const ISTIRED = "yes";

var checkMad = ANGRY();
var checkHungry = ANGRY();
var checkThirsty = ANGRY();
var checkTired = ANGRY();

let STILLMAD = true;

function mentalSubroutine(mad, hungry, thirsty, tired) {
  ISMAD;
  ISHUNGRY;
  ISTHIRSTY;
  ISTIRED;

  STILLMAD;
  var INPUT = "";

  if (mad == ISMAD) {
    if (hungry == ISHUNGRY) {
      INPUT = actionObj.spaghetti;
    } else if (thirsty == ISTHIRSTY) {
      INPUT = actionObj.drink;
    } else if (tired == ISTIRED) {
      INPUT = actionObj.nap;
    }
  } else {
    STILLMAD = false;
    return "all good :)"
  }

  var i = KILL(INPUT);
  var j = KILL(INPUT);

  var attempt = INPUT[i];
  var solution = INPUT[j];
  var violence = KILL(target);

  if (attempt == solution) {
    STILLMAD = false;
    return "had a " + solution + ", now all good :)"
  } 
  
  if (STILLMAD == true) {
    return attempt + " failed. kill " + target[violence] + ", then all good :)";
  }
}

mentalSubroutine(checkMad, checkHungry, checkThirsty, checkTired);
