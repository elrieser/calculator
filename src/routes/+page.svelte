<script>
	// let checked = 2;
	// function switchtoggle() {
	// 	if (checked % 2 === 0) {
	// 		document.getElementById('my-toggle').indeterminate = true;
	// 		checked++;
	// 	} else {
	// 		checked++;
	// 	}
	// }

	//let eingabe = '';
	//let operator = '';
	// function addieren() {}

	// function subtrahieren() {}

	// function multiplizieren() {}

	// function dividieren() {}

	// function berechnen() {}

	// function reset() {
	// 	eingabe = '';
	// }

	// function del() {}

	// const resultScreen = document.getElementById('result');
	// let currentInput = ''; // Speichert die aktuelle Eingabe
	// let operator = ''; // Speichert den aktuellen Operator
	// let firstOperand = null; // Speichert die erste Zahl

	// // Funktion zum Aktualisieren des Bildschirms
	// function updateScreen(value) {
	// 	resultScreen.textContent = value || '0'; // Zeige "0", wenn keine Eingabe
	// }

	// // Zahlen-Button gedrückt
	// function handleNumberClick(number) {
	// 	currentInput += number; // Aktuelle Zahl hinzufügen
	// 	updateScreen(currentInput); // Bildschirm aktualisieren
	// }

	// // Operator-Button gedrückt
	// function handleOperatorClick(op) {
	// 	if (currentInput) {
	// 		if (firstOperand === null) {
	// 			firstOperand = parseFloat(currentInput); // Erste Zahl speichern
	// 		}
	// 		operator = op; // Operator speichern
	// 		currentInput = ''; // Aktuelle Eingabe zurücksetzen
	// 	}
	// }

	// // Gleichheitszeichen (=) gedrückt
	// function handleEqualsClick() {
	// 	if (firstOperand !== null && currentInput) {
	// 		const secondOperand = parseFloat(currentInput); // Zweite Zahl speichern
	// 		let result;

	// 		// Berechnung mit if-else-Anweisungen
	// 		if (operator === '+') {
	// 			result = firstOperand + secondOperand;
	// 		} else if (operator === '-') {
	// 			result = firstOperand - secondOperand;
	// 		} else if (operator === '*') {
	// 			result = firstOperand * secondOperand;
	// 		} else if (operator === '/') {
	// 			result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
	// 		}

	// 		updateScreen(result); // Ergebnis anzeigen
	// 		firstOperand = result; // Ergebnis für weitere Berechnungen speichern
	// 		currentInput = ''; // Eingabe zurücksetzen
	// 	}
	// }

	// // Löschen-Button (DEL) gedrückt
	// function handleDeleteClick() {
	// 	currentInput = currentInput.slice(0, -1); // Letztes Zeichen entfernen
	// 	updateScreen(currentInput);
	// }

	// // Reset-Button gedrückt
	// function handleResetClick() {
	// 	currentInput = '';
	// 	operator = '';
	// 	firstOperand = null;
	// 	updateScreen('0'); // Zurücksetzen auf "0"
	// }
</script>

<div
	class="flex flex-col place-items-center place-content-center w-[450px] h-[550px] place-self-center space-y-4 border border-sky-50"
>
	<div class="flex space-x-[190px] w-[450px] h-[40px] border border-sky-50">
		<div class="flex w-[110px] h-[40px] border border-sky-50">
			<p class="text-xl font-bold text-white text-center">calc</p>
		</div>
		<div class="flex w-[150px] h-[40px] border border-sky-50">
			<div class="flex w-[75px] h-[40px] border border-sky-50">
				<p class="text-white">Theme</p>
			</div>
			<div class="flex flex-col w-[75px] h-[40px] border border-sky-50">
				<div class="flex w-[75px] h-[20px] border border-sky-50">
					<p>1</p>
					<p>2</p>
					<p>3</p>
				</div>
				<div class="flex w-[75px] h-[20px] border border-sky-50">
					<!-- <input type="checkbox" class="toggle" id="my-toggle" on:click={switchtoggle} /> -->
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex w-[450px] h-[100px] border border-sky-50 text-[55px] font-bold bg-[#182034] rounded-md text-white place-content-end items-center"
	>
		<p>{eingabe} {operator}</p>
	</div>
	<div
		class="flex flex-col rounded-md place-content-center w-[450px] h-[350px] text-[25px] font-bold bg-[#232C43]"
	>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(eingabe = '7')}>7</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(eingabe = '8')}>8</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>9</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#637097] hover:bg-[#7388c5] text-white"
				>DEL</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>4</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>5</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>6</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(operator = '+')}>+</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>1</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>2</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>3</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(operator = '-')}>-</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>.</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>0</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(operator = '/')}>/</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				on:click={(operator = 'x')}>x</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px] text-white">
			<button class="h-[40px] w-[180px] rounded-md bg-[#637097] hover:bg-[#7388c5]">Reset</button>
			<button class="h-[40px] w-[180px] rounded-md bg-[#de4130] hover:bg-[#ff3f3f]" on:click={reset}
				>=</button
			>
		</div>
	</div>
</div>
