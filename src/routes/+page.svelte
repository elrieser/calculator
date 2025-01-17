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
	<div class="flex w-[450px] h-[100px] border border-sky-50"></div>
	<div
		class="flex flex-col rounded-md place-content-center w-[450px] h-[350px] text-[25px] font-bold bg-[#232C43]"
	>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>7</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>8</button
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
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>+</button
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
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>-</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px]">
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>.</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>0</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>/</button
			>
			<button class="rounded-md drop-shadow-md h-[40px] w-[70px] bg-[#eae3e3] hover:bg-white"
				>x</button
			>
		</div>
		<div class="flex place-content-evenly items-center w-[450px] h-[70px] text-white">
			<button class="h-[40px] w-[180px] rounded-md bg-[#637097] hover:bg-[#7388c5]">Reset</button>
			<button class="h-[40px] w-[180px] rounded-md bg-[#de4130] hover:bg-[#ff3f3f]">=</button>
		</div>
	</div>
</div>
