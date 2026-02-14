<script>
	const test = 
	import "../app.css";
	// Das Layout nimmt die "children" (die aktuelle Seite) entgegen
	let { children } = $props();
	let test = 3;
	let test1 = `Hallo aus dem Layout!<strong>${test}</strong>`;
</script>

<!-- Dies ist der RAHMEN, der immer sichtbar bleibt -->
<header style="background: #333; color: white; padding: 1rem;">
	<nav>
		<p>{@html test1}</p>
		<!-- Später können wir hier Links hinzufügen -->
		<a href="/">Home</a>
		<a href="/test">Test</a>
		<a href="/test2">Test2</a>
	</nav>
</header>

<svelte:boundary>
	<p>{await delayed("hello!")}</p>

	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>

<main style="padding: 2rem;">
	<!-- Hier wird der Inhalt aus +page.svelte eingefügt -->
	{@render children()}
</main>
