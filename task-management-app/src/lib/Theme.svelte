<script lang="ts">
	import themeColor, { themesStore } from '../store/themestore';
</script>

<div class="mainContainer">
	<div class="themeButton default" on:click={themeColor.toggleDefaultTheme} />
	<div class="themeButton barbie" on:click={themeColor.toggleBarbieTheme} />
	<div class="themeButton mintyWatermelon" on:click={themeColor.toggleMintyWatermelonTheme} />
	<div class="themeButton innocent" on:click={themeColor.toggleInnocentTheme} />
</div>

<style>
	.mainContainer {
		clear: both;
		width: 100%;
		display: flex;
		padding: 1.5em;
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
	}

  .default {
		border: 1px solid white;
		background: linear-gradient(#f9d29b, #4739FF);
  }

  .barbie {
		border: 1px solid white;
			background: linear-gradient(#f9d29b, #ff3e8d);
  }

  .mintyWatermelon {
		border: 1px solid white;
		background: linear-gradient(#a2f4b7, #ff3366);
  }

  .innocent {
		border: 1px solid white;
		background: linear-gradient(#94d6ff, #ff99b4);
  }


</style>
