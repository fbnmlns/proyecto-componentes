<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="main-container">
	<div class="box water-wave">
		<h1>TO-DO App</h1>
		<h1>TO-DO App</h1>
	</div>
	<div class="box">
		<a href="/register" class="button-style">Register</a>
		<a href="/login" class="button-style">Login</a>
	</div>
</div>

<style lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 24px;
	}

	.water-wave {
		h1 {
			letter-spacing: 0.02em;
			font-size: 10rem;
			position: absolute;

			&:nth-child(1) {
				color: transparent;
				-webkit-text-stroke: 2px white;
			}

			&:nth-child(2) {
				color: white;
				animation: animate 4s ease-in-out infinite;
			}
		}

		@keyframes animate {
			0%,
			100% {
				clip-path: polygon(
					0% 45%,
					16% 44%,
					33% 50%,
					54% 60%,
					70% 61%,
					84% 59%,
					100% 52%,
					100% 100%,
					0% 100%
				);
			}

			50% {
				clip-path: polygon(
					0% 60%,
					15% 65%,
					34% 66%,
					51% 62%,
					67% 50%,
					84% 45%,
					100% 46%,
					100% 100%,
					0% 100%
				);
			}
		}
	}

	.button-style {
		border-radius: 10px;
		color: white;
		transition-duration: 0.5s;
		border: 3px solid white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		transition-duration: 0.4s;
		background-color: transparent;
		padding: 26px 42px;
		margin: 20px 75px;
		font-size: 1.5rem;
		cursor: pointer;

		&:hover {
			box-shadow: 5px 5px white;
		}

		&:active {
			transform: translateY(4px);
		}
	}

	.box {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex: 2;

		& {
			align-self: center;
		}
	}

	@media (max-width: 900px) {
		.water-wave {
			h1 {
				font-size: 7rem;
			}
		}

		.button-style {
			font-size: 1.3rem;
			margin: 10px 65px;
		}
	}

	@media (max-width: 700px) {
		.water-wave {
			h1 {
				font-size: 6rem;
			}
		}

		.button-style {
			font-size: 1rem;
			margin: 0 20px;
		}
	}

	@media (max-width: 400px) {
		.water-wave {
			h1 {
				font-size: 4rem;
			}
		}

		.button-style {
			font-size: 0.9rem;
			margin: 0 10px;
		}
	}
</style>
