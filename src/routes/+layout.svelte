<script>
	import '../app.css';
	let { children } = $props();
	import theme from '$C:/IMCM/calculator/src/routes/+page.svelte';
</script>

<div data-theme={theme} class="flex min-h-screen flex-col items-center justify-evenly bg-[#3A4764]">
	{@render children()}
</div>
