#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 18000; //dollar
let myPin = 2125;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: " enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance" , "fast cash"],
    }
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
    [
      {
        name: "amount",
        message: " enter your amount",
        type: " number",
      },
    ]
  );
  if (myBalance<amountAns.amount){
    console.log("Insufficient balance.")
  }
  else if (myBalance -= amountAns.amount)
  console.log("Your remaining balance is: " + myBalance);
}

    if (operationAns.operation === "fast cash") {
      let cashAns = await inquirer.prompt(
      [
        {
          name: "cash",
          message: "Please select your amount",
          type: "list",
          choices:["2000" , "5000" , "10000" , "20000"]
        },
      ]
    );
    if (myBalance<cashAns.cash){
      console.log("Insufficient balance.")
    } else if (myBalance -= cashAns.cash)
    console.log("Your remaining balance is: " + myBalance);

  } else if (operationAns.operation === "check balance") {
    console.log("Your balance is:" + myBalance);
  }
}
 else {
  console.log("Incorrect pin code!");
}
