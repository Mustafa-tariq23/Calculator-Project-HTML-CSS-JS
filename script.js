let string = "";
let buttons = Array.from(document.querySelectorAll(".button"));

function calculateExpression(expression) {
  const operators = ['+', '-', '*', '/'];
  let operator;
  let values;

  operators.forEach((op) => {
    if(expression.includes(op)) {
      operator = op;
      values = expression.split(op);
    }
  });

  if(!operator || !values) {
    return Number(expression);
  }

  const [a, b] = values.map(v => Number(v));

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    handleButtonPress(e.target.innerHTML)
  );
});

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if ((key >= 0 && key <= 9) || key === ".") handleButtonPress(key);
  else if (key === "+" || key === "-" || key === "*" || key === "/")
    handleButtonPress(key);
  else if (key === "Enter") handleButtonPress("=");
  else if (key === "c") handleButtonPress("C");
  else if (key === "Backspace") handleBackspacePress();
  else if (key === "p") handleButtonPress("%");
  else if (key === "s") handleButtonPress("sq");
  else if (key === "q") handleButtonPress("sqrt");
});

function handleButtonPress(buttonValue) {
  if (buttonValue == "=") {
    string = calculateExpression(string).toString();
  } else if (buttonValue == "C") {
    string = "";
  } else if (buttonValue == 'sq'){
    string = (Number(string) ** 2).toString();
  } else if (buttonValue == "sqrt"){
    string = (Math.sqrt(Number(string))).toString();
  } else if(buttonValue == "%"){
    string = (Number(string)/100).toString();
  } else{
    string = string + buttonValue;
  }
  document.querySelector("input").value = string;
}

function handleBackspacePress() {
  string = string.slice(0, -1);
  document.querySelector("input").value = string;
}

document.getElementById('toggle-dark-mode').addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode'))
    localStorage.setItem('dark-mode', 'true');
  else
    localStorage.setItem('dark-mode', 'false');
});

document.addEventListener('DOMContentLoaded', (Event) => {
  const savedMode = localStorage.getItem('dark-mode');

  if(savedMode === 'true')
    document.body.classList.add('dark-mode');
});



// let string = "";
// let buttons = Array.from(document.querySelectorAll(".button"));
// function calculateExpression(expression)
// {
//   const operators = ['+', '-', '*', '/'];
//   let operator;
//   let values;

//   operators.forEach((op)=>{
//     if(expression.includes(op))
//     {
//       operator = op;
//       values = expression.split(op);
//     }

//   });
  
//   if(!operator || !values)
//   {
//     return Number(expression);
//   }
//   const [a, b] = values.map(v => Number(v));

//   switch (operator)
//   {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '/':
//       return a / b;
//   }
// }


// buttons.forEach((buttons) => {
//   buttons.addEventListener("click", (e) =>
//     handleButtonPress(e.target.innerHTML)
//   );
// });

// document.addEventListener("keydown", function (event) {
//   let key = event.key;

//   if ((key >= 0 && key <= 9) || key === ".") handleButtonPress(key);
//   else if (key === "+" || key === "-" || key === "*" || key === "/")
//     handleButtonPress(key);
//   else if (key === "Enter") handleButtonPress("=");
//   else if (key === "c") handleButtonPress("C");
//   else if (key === "Backspace") handleBackspacePress();
// });

// function handleButtonPress(buttonValue) {
//   if (buttonValue == "=") {
//     string = calculateExpression(string).toString();
//     // document.querySelector("input").value = string;
//   } else if (buttonValue == "C") {
//     string = "";
//   } else if (buttonValue == 'sq'){
//     string = (Number(string) ** 2).toString();
//   } else if (buttonValue == "sqrt"){
//     string = (Math.sqrt(Number(string))).toString();
//   } else if( buttonValue == "%"){
//     string = (Number(string)/100).toString();
//   } else{
//     string = string + buttonValue;
//   }
// }

// function handleBackspacePress() {
//   string = string.slice(0, -1);
//   document.querySelector("input").value = string;
// }

// document.getElementById('toggle-dark-mode').addEventListener('click', function(){
//   document.body.classList.toggle('dark-mode');
//   if(document.body.classList.contains('dark-mode'))
//     localStorage.setItem('dark-mode', 'true');
//   else
//     localStorage.setItem('dark-mode', 'false');
// });

// document.addEventListener('DOMContentLoaded', (Event) =>
// {
//   const savedMode = localStorage.getItem('dark-mode');

//   if(savedMode === 'true')
//     document.body.classList.add('dark-mode');
// });

// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click' , (e)=>{
//     if(e.target.innerHTML == '=')
//     {
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C')
//     {
//       string = "";
//       document.querySelector('input').value = string;
//     }
//     else{
//       console.log(e.target)
//       string = string + e.target.innerHTML;
//       document.querySelector('input').value = string;
//     }
//   })
// })
