#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition: boolean=true;
while(condition)
{
let answer = await inquirer.prompt(
    [
        {
        name:"todo",
    
         type:"input",

         message:"what would you like  to add in your todos ?"

        },
        {
            name: "addMore",
            type:"confirm",
            message:"would you like to  add more in your todos?",
            default:"true"
        
        }
    ]);
    
todos.push(answer.todo);

console.log(todos);
condition = answer.addMore;


};