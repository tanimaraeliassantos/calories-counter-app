const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
	const regex = /[+\s]/g;
	return str.replace(regex, '');
}

function isInvalidInput(str) {
	const regex = /\d+e\d+/i;
	return str.match(regex);
	console.log(isInvalidInput('10'));
}

function addEntry() {
	const targetInputContainer = document.querySelector(
		`#${entryDropdown.value} .input-container`
	);
	const entryNumber =
		targetInputCOntainer.querySelectorAll('input[type="text"').length;
	const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">
			Entry ${entryNumber} Name
		</label> 
		<input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
		<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber}</label>
		<input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`;
	targetInputContainer.innerHTML += HTMLString;
}

addEntryButton.addEventListener('click', addEntry);
