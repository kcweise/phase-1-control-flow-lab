let feet = 0
function scuberGreetingForFeet(feet){
  if (feet <=400){
    return "This one is on me!"
  }
  else if (feet >400 && feet<= 2000 ){
    return "That will be twenty bucks."
  }
  else if (feet>2000 && feet<=2500){
    return "I will gladly take your thirty bucks."
  }
  else if (feet>2500){
    return "No can do."
  }
}

let city = 0
function ternaryCheckCity(city){
  return city=="NYC"?"Ok, sounds good.":"No go."
}

let expr
function switchOnCharmFromTip(expr){
  switch (expr) {
    case"generous":return "Thank you so much.";
    case"not as generous":return "Thank you.";
      
      break;
  
    default: return "Bye.";
      break;
  }
}