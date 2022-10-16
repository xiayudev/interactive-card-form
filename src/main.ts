import "./check.css";

const $ownerName = document.getElementById("card-owner") as HTMLInputElement,
	$cardNumber = document.getElementById("card-number") as HTMLInputElement,
	$month = document.getElementById("month") as HTMLInputElement,
	$year = document.getElementById("year") as HTMLInputElement,
	$cvc = document.getElementById("cvc") as HTMLInputElement,
	$form = document.getElementById("form") as HTMLFormElement,
	$btn = document.getElementById("cta-btn") as HTMLInputElement,
	$success = document.getElementById("success-form") as HTMLDivElement;
/**### INPUT VALIDATIONS ### */
const setErrorFor = (input: HTMLInputElement, message: string) => {
	const $parent = input.parentElement, //.form-control
		$small = $parent!.querySelector("small"),
		$iconFail = $parent!.querySelector(".fa-circle-exclamation");

	input.classList.remove("success");
	input.classList.add("error");

	$small!.innerHTML = message;
	$iconFail!.classList.remove("invisible");
	$small!.classList.remove("invisible");
};
const setSuccessFor = (input: HTMLInputElement) => {
	const $parent = input.parentElement;
	const $iconCheck = $parent!.querySelector(`.fa-circle-check`),
		$iconFail = $parent!.querySelector(`.fa-circle-exclamation`),
		$small = $parent!.querySelector("small");

	input.classList.remove("error");
	input.classList.add("success");
	$iconCheck!.classList.remove("invisible");
	$iconFail!.classList.add("invisible");
	$small!.classList.add("invisible");
};

const checkCardNumber = (input: HTMLInputElement): boolean => {
	let array: Array<number> = input.value.split("").map((item) => +item);
	return array.includes(NaN);
};

const checkInputs = () => {
	//Card owner
	if ($ownerName.value.trim() === "" || $ownerName.value.trim() === null) {
		setErrorFor($ownerName, "Card owner cannot be blank");
	} else {
		setSuccessFor($ownerName);
	}

	//Card number
	if ($cardNumber.value === "" || $cardNumber.value === null) {
		setErrorFor($cardNumber, "Card number cannot be blank");
	} else if (checkCardNumber($cardNumber)) {
		setErrorFor($cardNumber, "Wrong format, numbers only");
	} else {
		setSuccessFor($cardNumber);
	}

	//Month exp
	if ($month.value === "" || $month.value === null) {
		setErrorFor($month, "Can't be blank");
	} else {
		setSuccessFor($month);
	}

	//Year exp
	if ($year.value === "" || $year.value === null) {
		setErrorFor($year, "Can't be blank");
	} else {
		setSuccessFor($year);
	}

	//cvc exp
	if ($cvc.value === "" || $cvc.value === null) {
		setErrorFor($cvc, "Can't be blank");
	} else {
		setSuccessFor($cvc);
	}
};
$form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
	const $small = document.querySelectorAll("small");
	let array: Array<boolean> = [];
	$small.forEach((item) => array.push(item.classList.contains("invisible")));

	if (array.includes(false)) {
		console.log("Hay errores");
	} else {
		$success!.classList.add("flex");
		$success!.classList.remove("hidden");
	}
});

/**### CARD FRONT INFO */
const $cardFrontName = document.querySelector(".card-front-name") as HTMLParagraphElement,
	$cardFrontNumber = document.querySelector(".card-front-number") as HTMLParagraphElement,
	$cardFrontMonth = document.querySelector(".card-front-month") as HTMLSpanElement,
	$cardFrontYear = document.querySelector(".card-front-year") as HTMLSpanElement;

//Name
$ownerName.oninput = () => {
	$cardFrontName.textContent = $ownerName.value.toUpperCase();
};

//Number
$cardNumber.addEventListener("keyup", () => {
	let valueInput = $cardNumber.value
		// Eliminamos espacios en blanco
		.replace(/\s/g, "")
		// Eliminar las letras
		//.replace(/\D/g, "")
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-9]{4})/g, "$1 ")
		// Elimina el ultimo espaciado
		.trim()
		.toUpperCase();
	$cardFrontNumber.textContent = valueInput;
});

//Month expires
$month.oninput = () => {
	$cardFrontMonth.textContent = $month.value;
};

//Year expires
$year.oninput = () => {
	$cardFrontYear.textContent = $year.value;
};

/**### CARD BACK INFO ### */
const $cardBack = document.getElementById("card-back-cvc") as HTMLParagraphElement;
$cvc.oninput = () => {
	$cardBack.textContent = $cvc.value;
};

/**### SHOW FORM SUCCESS */

$btn.addEventListener("submit", (e) => {
	e.preventDefault();
	$form.classList.add("hidden");
	$success.classList.remove("hidden");
	$success.classList.add("flex");
});
