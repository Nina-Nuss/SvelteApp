<script>
	import "../app.css";
	// Das Layout nimmt die "children" (die aktuelle Seite) entgegen
	let { children } = $props();
	let test = 3;
	let test1 = `Hallo aus dem Layout!<strong>${test}</strong>`;
</script>

<header style="background: #333; color: white; padding: 1rem;">
	<nav>
		<p>{@html test1}</p>
		<a href="/">Home</a>
		<a href="/test/test1">Test1</a>
		<a href="/test/test2">Test2</a>
	</nav>
</header>

<svelte:boundary>
	<p>{await delayed("hello!")}</p>
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>

<main style="padding: 2rem;">
	{@render children()}
</main>

<main style="padding: 2rem;"></main>
