let display = document.getElementById("DISPLAY");


function DIGIT(value) {

    display.value = display.value + value;

}


function FORMATE() {

    display.value = "";

}


function BKSP() {

    display.value = display.value.slice(0, -1);

}


function calculation() {

    let expression = display.value;

    if (expression == "") {

        display.value = "Enter Number";

    }
    else {

        let num1 = "";
        let num2 = "";
        let operator = "";
        let result = "";

        for (let i = 0; i < expression.length; i++) {

            if (
                expression[i] == "+" ||
                expression[i] == "-" ||
                expression[i] == "*" ||
                expression[i] == "/" ||
                expression[i] == "%"
            ) {

                operator = expression[i];

                num1 = expression.slice(0, i);
                num2 = expression.slice(i + 1);

                break;
            }

        }


        num1 = Number(num1);
        num2 = Number(num2);


        if (operator == "+") {

            result = num1 + num2;

        }
        else if (operator == "-") {

            result = num1 - num2;

        }
        else if (operator == "*") {

            result = num1 * num2;

        }
        else if (operator == "/") {

            result = num1 / num2;

        }
        else if (operator == "%") {

            result = num1 % num2;

        }


        display.value = result;

    }

}
