// DOM Elements
const bill = document.getElementById('bill')
const people = document.getElementById('people')
const tipPercents = document.querySelectorAll('input[type="radio"]')
const resetBtn = document.querySelector('.reset-btn')
const tipAmount = document.querySelector('.tips')
const perPerson = document.querySelector('.per-person')
const customTip = document.querySelector('.custom-tip')

// intial number of people (value)
people.value = 1

function tipCalculator(billValue, calculateTip, numberOfPeople) {
	const calculatedTip = (billValue * calculateTip).toPrecision(3)
	const totalAmount = (
		billValue *
		(numberOfPeople + calculateTip)
	).toPrecision(4)

	tipAmount.textContent = `$${calculatedTip}`
	perPerson.textContent = `$${totalAmount}`
}

// calculate tip based on the number of people and bill
function calculateTip(e) {
	if (bill.value === '') return
	const billValue = +bill.value
	const numberOfPeople = +people.value

	const tip = e.target.dataset.tip

	const calculateTip = tip / 100

	tipCalculator(billValue, calculateTip, numberOfPeople)
	resetBtn.removeAttribute('disabled', 'disabled')
}

// calculate user custom tip percentage
function calculateCustomTip(e) {
	if (bill.value === '' || customTip.value === '') return

	let billValue = +bill.value
	const tip = e.target.value

	const calculateTip = tip / 100

	tipCalculator(billValue, calculateTip)
}

// reset all fields
function resetAll() {
	bill.value = ''
	customTip.value = ''
	people.value = 1
	tipAmount.textContent = `$00.00`
	perPerson.textContent = `$00.00`
	resetBtn.setAttribute('disabled', 'disabled')
}

// event listeners
tipPercents.forEach((tipPercent) =>
	tipPercent.addEventListener('click', calculateTip)
)
customTip.addEventListener('input', calculateCustomTip)
resetBtn.addEventListener('click', resetAll)
