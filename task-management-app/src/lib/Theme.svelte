<script lang="ts">
	import themeColor, { themesStore } from '../store/themestore';
</script>

<div class="mainContainer">
	<div class="themeButtons">
		<button class="default" on:click={themeColor.toggleDefaultTheme} />
		<button class="barbie" on:click={themeColor.toggleBarbieTheme} />
		<button class="seaFoam" on:click={themeColor.toggleSeaFoamTheme} />
		<button class="innocent" on:click={themeColor.toggleInnocentTheme} />
	</div>
</div>

<style lang="scss">
	.mainContainer {
		clear: both;
		width: 100%;
		display: flex;
		padding: 1.5em;
		flex: 1;
		justify-content: flex-end;
	}

	.themeButtons {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 1.5em;

		button {
			color: #fff;
			border-radius: 5px;
			padding: 1em 1.5em;
			border: none;
			cursor: pointer;
			user-select: none;
			margin: 5px;
			border: 1px solid white;
		}
	}

	.default {
		background: linear-gradient(#f9d29b, #4739ff);
	}

	.barbie {
		background: linear-gradient(#f9d29b, #ff3e8d);
	}

	.seaFoam {
		background: linear-gradient(#bbf7d0, #86efac, #3b82f6);
	}

	.innocent {
		background: linear-gradient(#94d6ff, #ff99b4);
	}
</style>
