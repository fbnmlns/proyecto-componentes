<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<main class="mainContainer">
	<Header />
	<slot />
</main>

<style>
	.mainContainer {
			min-height: 100vh;
			background: linear-gradient(#f9d29b, #4739FF);
			color: white;
			position: relative;
			display: flex;
			flex-direction: column;
	}
</style>
