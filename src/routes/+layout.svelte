<script>
	import '../app.css';
	let { children } = $props();
	//import theme from '$src/routes/+page.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-evenly bg-[#3A4764]">
	{@render children()}
</div>
