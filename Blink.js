(function(window){
  
  confirm(["You are stranded in the woods, you see a red blinking light off",
  "in the distance you want to pursue it but their are creatures of the unknown out there",
  "do you wish to continue?"].join('\n'));
  
  var forward = prompt("Does the user wish to continue? 'y' is  yes and 'n' is no");
  
  if (forward == "y") {
    console.log("Welcome to the game!");
  } else {
    console.log("Sorry this game is not for you :( ");
  }
  
  console.log (["With hopes of escaping you run towards the light",
  "but the light fades as you get closer, you seem pretty exhausted from the search.",
  "Your eyes begin to get heavier by the minute. You see a rock with some moss on it",
  "lying besides the dirt path"].join('\n'));
  
  var sleep = prompt ("Do you wish to try and get some rest and continue the search tomorrow? 'y' is  yes and 'n' is no");
  
  if (sleep == "y") {
    console.log("You decided to try and get some rest and woke up feeling replishined in the morning ");
  } else {
    console.log(["You decide to keep on with your journey and try to keep yourself awake.",
    "You keep telling yourself, 'if I can just find the light their might be people waitnig",
    "for me there"].join('\n'));
  }
  console.log("Suddenly you feel a cold metal hand grasp your ankle, you try and run but their is just know use. if only you could find some type of object to pry yourself free.")
  
  var freedom = prompt()
  
  if (freedom == "r" ) {
    console.log("You look to the right, there's nothing there but dirt.");
  } else if (freedom == "l") {
      console.log("You look to the left and find a rusty pry bar, by your side");
  } else {
    console.log("Try using the 'l' arrow key to look left and the 'r' arrow key to to look right'..");
  }
  
  var escape = prompt("You think to yourself i could take this robot if want or i could just escape without the risk..");
  
  if(escape == "f") {
    console.log("You choose to fight.");
  } else if ("r") {
    console.log("You choose to run.");
  } else {
     console.log("Try using the 'f' arrow key to fight the robot or you can run by using the 'r' arrow key");
   }
   
})(window)
