function addition(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
       return num1 + num2;
    } else {
        alert("Arguments must both be numbers");
    }
    return num1 + num2;
}

function subtraction(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 - num2;
    } else {
        alert("Arguments must both be numbers");
    }
    return num1 - num2;
}

function multiplication(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 * num2;
    } else {
        alert("Arguments must both be numbers");
    }
    return num1 * num2;
}

function division(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 / num2;
    } else {
        alert("Arguments must both be numbers");
    }
    return num1 / num2;
}