<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-evenly bg-[#3A4764] font-league">
	{@render children()}
</div>
