<script>
	import "../app.css";
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
<main style="padding: 2rem;">
	{@render children()}
</main>
