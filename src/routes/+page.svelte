<script>
	let ausgabe = '';

	// export let theme = localStorage.getItem('theme') || 'dark';
	// document.body.className = theme;

	// function switchTheme() {
	// 	if (theme === 'dark') {
	// 		theme = 'light';
	// 		document.body.className = 'light';
	// 		localStorage.setItem('theme', 'light');
	// 	} else {
	// 		theme = 'dark';
	// 		document.body.className = 'dark';
	// 		localStorage.setItem('theme', 'dark');
	// 	}
	// }

	function del() {
		ausgabe = ausgabe.substring(0, ausgabe.length - 1);
	}

	function reset() {
		ausgabe = '';
	}

	function berechnen() {
		ausgabe = eval(ausgabe);
	}
</script>

<div
	class=" flex flex-col place-items-center place-content-center w-[450px] h-[550px] place-self-center space-y-4"
>
	<div class="flex space-x-[190px] w-[450px] h-[40px]">
		<div class="flex place-items-end w-[110px] h-[40px]">
			<p class="text-xl font-bold text-white text-center">calc</p>
		</div>
		<div class="flex w-[150px] h-[40px]">
			<div class="flex place-items-end w-[75px] h-[40px]">
				<p class="text-white text-[13px]">THEME</p>
			</div>
			<div class="flex flex-col w-[75px] h-[40px]">
				<div class="flex place-content-evenly w-[75px] h-[20px] text-white">
					<p>1</p>
					<p>2</p>
				</div>
				<div class="flex w-[75px] h-[20px] place-content-center">
					<input
						type="checkbox"
						class="toggle bg-red-500 [--tglbg:#182034] hover:bg-red-700"
						checked="checked"
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex w-[450px] h-[100px] text-[55px] font-bold bg-[#182034] rounded-md text-white place-content-end items-center"
	>
		<p>{ausgabe}</p>
	</div>
	<div
		class="flex flex-col rounded-md place-content-center w-[450px] h-[350px] text-[25px] font-bold bg-[#232C43]"
	>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]
				"
				onclick={(ausgabe = ausgabe + '7')}>7</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '8')}>8</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '9')}>9</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#637097] hover:bg-[#7388c5] text-white shadow-[0px_4px_0px_#6375ab]"
				onclick={del}>DEL</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '4')}>4</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '5')}>5</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '6')}>6</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + ' + ')}>+</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '1')}>1</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '2')}>2</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '3')}>3</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + ' - ')}>-</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '.')}>.</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + '0')}>0</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + ' / ')}>/</button
			>
			<button
				class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white shadow-[0px_4px_0px_#b8b8b8]"
				onclick={(ausgabe = ausgabe + ' * ')}>*</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px] text-white">
			<button
				class="h-[40px] w-[180px] rounded-md bg-[#637097] hover:bg-[#7388c5] shadow-[0px_4px_0px_#6375ab]"
				onclick={reset}>Reset</button
			>
			<button
				class="h-[40px] w-[180px] rounded-md bg-[#de4130] hover:bg-[#ff3f3f] shadow-[0px_4px_0px_#c33030]"
				onclick={berechnen}>=</button
			>
		</div>
	</div>
</div>
