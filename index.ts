import inquirer from "inquirer";

async function main() {
    const answer = await inquirer.prompt([
        { message: "Enter First Number", name: "firstNumber", type: "number" },
        { message: "Enter Second Number", name: "secondNumber", type: "number" },
        {
            message: "Select Operator To Perform Action",
            name: "operator",
            type: "list",
            choices: ["Addition", "Multiplication", "Subtraction", "Division"],
        },
    ]);

    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    } else if (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    } else if (answer.operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    } else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    } else {
        console.log("Select correct operator");
    }
}

main();
