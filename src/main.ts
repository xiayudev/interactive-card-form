import "./check.css";

const $ownerName = document.getElementById("card-owner") as HTMLInputElement,
	$cardNumber = document.getElementById("card-number") as HTMLInputElement,
	$month = document.getElementById("month") as HTMLInputElement,
	$year = document.getElementById("year") as HTMLInputElement,
	$cvc = document.getElementById("cvc") as HTMLInputElement,
	$form = document.querySelector("form") as HTMLFormElement;

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
$cardNumber.oninput = () => {
	$cardFrontNumber.textContent = $cardNumber.value;
};

//Month expires
$month.oninput = () => {
	$cardFrontMonth.textContent = $month.value;
};

//Year expires
$year.oninput = () => {
	$cardFrontYear.textContent = $year.value;
};
$form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});
