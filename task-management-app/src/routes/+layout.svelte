<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Theme from '$lib/Theme.svelte';
	import themeColor from '../store/themestore';
</script>

<main class="mainContainer {$themeColor}">
	<Header />
	<slot />
	<Theme />

</main>

<style lang="scss">
	.mainContainer {
			min-height: 100vh;
			color: white;
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: hidden;
	}

	.mainContainer.default {
		background: linear-gradient(#f9d29b, #4739FF);
	}

	.mainContainer.barbie {
		background: linear-gradient(#f9d29b, #ff3e8d);
	}

	.mainContainer.mintyWatermelon {
		background: linear-gradient(#a2f4b7, #ff3366);
	}

	.mainContainer.innocent {
		background: linear-gradient(#94d6ff, #ff99b4);
	}

</style>
