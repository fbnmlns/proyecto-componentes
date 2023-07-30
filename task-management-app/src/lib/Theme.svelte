<script lang="ts">
	import themeColor, { themesStore } from '../store/themestore';
</script>

<div class="mainContainer">
	<button class="themeButton default" on:click={themeColor.toggleDefaultTheme} />
	<button class="themeButton barbie" on:click={themeColor.toggleBarbieTheme} />
	<button class="themeButton mintyWatermelon" on:click={themeColor.toggleMintyWatermelonTheme} />
	<button class="themeButton innocent" on:click={themeColor.toggleInnocentTheme} />
</div>

<style lang="scss">
	.mainContainer {
		clear: both;
		width: 100%;
		display: flex;
		padding: 1.5em;
		justify-content: flex-end;
	}

  .themeButton {
		color: #fff;
		background-color: #000;
		border-radius: 5px;
		padding: 1em 1.5em;
		border: none;
		cursor: pointer;
		user-select: none;
		margin: 5px;
		border: 1px solid white;
	}

  .default {
		background: linear-gradient(#f9d29b, #4739FF);
  }

  .barbie {
		background: linear-gradient(#f9d29b, #ff3e8d);
  }

  .mintyWatermelon {
		background: linear-gradient(#a2f4b7, #ff3366);
  }

  .innocent {
		background: linear-gradient(#94d6ff, #ff99b4);
  }
</style>
