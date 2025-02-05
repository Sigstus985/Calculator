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

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("decimal").addEventListener("click", decimal);

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
		console.log("Please choose an operator first.");
	} else if (calcCheck === false) {
		num1 += number;
		displayNum.innerHTML = num1;
		removeClr();
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
		} else {
			operator2 = op;
			calculate(op);
			num2 = num1;
			num1 = "";
		}
		changeClr(id);
		decimalCheck = false;
		opCheck = true;
		calcCheck = false;
	} else {
		console.log("Please select a number.");
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
		}
		displayNum.textContent = Math.floor(num2 * 10000000) / 10000000;
		opCheck = false;
		if (num2 % 1 != 0) {
			decimalCheck = true;
		}
		num1 = num2;
		active = "";
		calcCheck = true;
	} else {
		console.log("Please select an operator");
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
	if (decimalCheck == false && num1 && calcCheck === false) {
		num1 += ".";
		displayNum.textContent = num1;
		decimalCheck = true;
	} else {
		console.log(
			"Decimal is already present, or current number is not to be modified."
		);
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
	document.getElementById(`${id}`).classList.add("active");
}

function removeClr() {
	operators.forEach((btn) => {
		btn.classList.remove("active");
	});
}
