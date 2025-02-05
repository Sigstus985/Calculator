let num1 = "";
let num2 = "";
let operator = "";
let operator2 = "";
let opCheck = false;
let decimalCheck = false;
let calcCheck = false;

const displayNum = document.getElementById("display");

const operators = document.querySelectorAll(".operator");

const addBtn = document.getElementById("addition");
const subtractBtn = document.getElementById("subtraction");
const multiplyBtn = document.getElementById("multiplication");
const divideBtn = document.getElementById("division");

const numberButtons = document.querySelectorAll(".number");

const AC = document.querySelector(".AC");
AC.addEventListener("click", clear);

const equal = document.querySelector(".equal");
equal.addEventListener("click", calculate);

const dot = document.querySelector(".decimal");
dot.addEventListener("click", decimal);

numberButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		handleNumber(e.target.textContent);
	});
});

operators.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		handleOperator(e.target.textContent, e.target.id);
	});
});

function handleNumber(number) {
	if (!num1 === num2) {
		console.log("please choose an operator");
	} else if ( calcCheck === false) {
		num1 += number;
		displayNum.innerHTML = num1;
		removeClr();
		console.log(num1);
	}
}

function handleOperator(op, id) {
	if (num1) {
		num2 = Number(num2);
		num1 = Number(num1);
		if (opCheck == false) {
			operator = op;
			num2 = num1;
			num1 = "";
			active = operator;
			console.log("handleOperator");
		} else {
			operator2 = op;
			calculate(op);
			num2 = num1;
			num1 = "";
			console.log("handleOperator");
		}
		changeClr(id);
		decimalCheck = false;
		opCheck = true;
		console.log(opCheck);
        calcCheck= false;
	} else {
		console.log("please select a number first");
	}
}

function calculate() {
	if (opCheck) {
		num2 = Number(num2);
		num1 = Number(num1);
		if (operator === "+") {
			num2 = num2 + num1;
			operator = operator2;
		} else if (operator === "-") {
			num2 = num2 - num1;
			operator = operator2;
		} else if (operator === "x") {
			num2 = num2 * num1;
			operator = operator2;
		} else if (operator === "/") {
			num2 = num2 / num1;
			operator = operator2;
		} else {
			console.log(operator2);
		}
		displayNum.textContent = Math.floor(num2 * 1000) / 1000;
		opCheck = false;
		if (num2 % 1 != 0) {
			decimalCheck = true;
		}
		num1 = num2;
		console.log("calculate");
		console.log(active);
		active = "";
		calcCheck = true;
	} else {
		console.log("please select an operator");
	}
}

function clear() {
	num1 = "";
	num2 = "";
	operator = "";
	operator2 = "";
	opCheck = false;
	calcCheck = false;
	decimalCheck = false;
	displayNum.textContent = num2;
}

function decimal() {
	if (decimalCheck == false && num1) {
		num1 += ".";
		displayNum.textContent = num1;
		decimalCheck = true;
	} else {
		console.log("decimal is already present");
	}
}

function changeClr(id) {
	/* if (operator === "+") {
		addBtn.classList.add("active");
	} else if (operator === "-") {
		subtractBtn.classList.add("active");
	} else if (operator === "x") {
		multiplyBtn.classList.add("active");
	} else if (operator === "/") {
		divideBtn.classList.add("active");
	} */
    document.getElementById(`${id}`).classList.add("active")
    console.log(id)
}

function removeClr() {
	operators.forEach((btn) => {
		btn.classList.remove("active");
	});
}
