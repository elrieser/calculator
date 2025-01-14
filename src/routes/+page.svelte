<script>
	let checked = 2;
	function switchtoggle() {
		if (checked % 2 === 0) {
			document.getElementById('my-toggle').indeterminate = true;
			checked++;
		} else {
			checked++;
		}
	}
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
					<input type="checkbox" class="toggle" id="my-toggle" on:click={switchtoggle} />
				</div>
			</div>
		</div>
	</div>
	<div class="flex w-[450px] h-[100px] border border-sky-50"></div>
	<div class="flex flex-col space-y-4 w-[450px] h-[350px] border border-sky-50">
		<div class="flex justify-around w-[450px] h-[70px] border border-sky-50">
			<button class="bg-white h-[50px] w-[80px]">7</button>
			<button class="bg-white h-[50px] w-[80px]">8</button>
			<button class="bg-white h-[50px] w-[80px]">9</button>
			<button class="bg-white h-[50px] w-[80px]">DEL</button>
		</div>
		<div class="flex w-[450px] h-[70px] border border-sky-50">
			<button class="bg-white">4</button>
			<button class="bg-white">5</button>
			<button class="bg-white">6</button>
			<button class="bg-white">+</button>
		</div>
		<div class="flex w-[450px] h-[70px] border border-sky-50">
			<button class="bg-white">1</button>
			<button class="bg-white">2</button>
			<button class="bg-white">3</button>
			<button class="bg-white">-</button>
		</div>
		<div class="flex w-[450px] h-[70px] border border-sky-50">
			<button class="bg-white">.</button>
			<button class="bg-white">0</button>
			<button class="bg-white">/</button>
			<button class="bg-white">x</button>
		</div>
		<div class="flex w-[450px] h-[70px] border border-sky-50">
			<button class="bg-white">Reset</button>
			<button class="bg-white">=</button>
		</div>
	</div>
</div>
