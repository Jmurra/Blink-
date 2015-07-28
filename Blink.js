
(function(blink) {
  var gameover = function(){

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
    console.log(["You Try and fight the meatl creature by hitting it on the top of its",
    "head it stuns the robot long enough for you to get your ankle loose",
    "you see an compartment full of wires and fuses. You hae enough",
    "time to get away while the robot is stunned, but on the otherhand",
    "you think about how safe would feel in the woods with out the robot there"].join('\n'));
  } else if ("r") {
    console.log(["You try and pry the metal hand off your ankle.",
    "but you upsest the beast to only discover its a robot the robot then takes you",
    "and chews you into tiny pieces only to consumed by his metal gullet"].join('\n'));
    return gameover()
  } else {
     console.log("Try using the 'f' arrow key to fight the robot or you can run by using the 'r' arrow key");
   }
   var shutdown = prompt("Try and shutdown the robot or try and escape with the fear of knowing its still out there");

   if (shutdown == "s") {
     console.log(["You jam the pry bar into the robots fuse box watching sparks",
   "and flames shoot out in every direction, feeling a sense of relief you decide",
   "to carry the pry bar with you as it might come in handy on the journey."].join('\n'));
 } else if ("e") {
    console.log("Lorem ipsum you've escaped");
} else {
  console.log("Try using the 's' key to shutdown the robot or try using the 'e' key to escape");
}
   gameover = (console.log"Game Over!");
})(blink);
