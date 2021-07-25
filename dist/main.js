const bill = document.getElementById('bill')
const numberOfPeople = document.getElementById('people')
const tipPercents = document.querySelectorAll('input[type="radio"]')
const resetBtn = document.querySelector('.reset-btn')
const tipAmount = document.querySelector('.tips')
const perPerson = document.querySelector('.per-person')
const customTip = document.querySelector('.custom-tip')

function tipCalculator(billValue, calculateTip, people = 1) {
	const calculatedTip = (billValue * calculateTip).toPrecision(3)
	const totalAmount = (billValue * (people + calculateTip)).toPrecision(4)

	tipAmount.textContent = `$${calculatedTip}`
	perPerson.textContent = `$${totalAmount}`
}

function calculateTip(e) {
	if (bill.value === '') return
	const billValue = +bill.value

	const tip = e.target.dataset.tip

	const calculateTip = tip / 100

	tipCalculator(billValue, calculateTip)
	resetBtn.removeAttribute('disabled', 'disabled')
}

function calculateCustomTip(e) {
	if (bill.value === '' || customTip.value === '') return

	let billValue = +bill.value
	const tip = e.target.value

	const calculateTip = tip / 100

	tipCalculator(billValue, calculateTip)
}

function resetAll() {
	bill.value = ''
	customTip.value = ''
	tipAmount.textContent = `$00.00`
	perPerson.textContent = `$00.00`
	resetBtn.setAttribute('disabled', 'disabled')

	tipPercents.forEach((tipPercent) =>
		tipPercent.addEventListener('click', (e) =>
			e.target.removeAttribute('checked', 'checked')
		)
	)
}

// event listeners
tipPercents.forEach((tipPercent) =>
	tipPercent.addEventListener('click', calculateTip)
)
customTip.addEventListener('input', calculateCustomTip)
resetBtn.addEventListener('click', resetAll)
