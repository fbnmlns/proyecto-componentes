<!-- src/routes/register/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '../../lib/firebase';

	let email: string;
	let password: string;

	let success: boolean | undefined = undefined;

	const register = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				goto('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);

				success = false;
			});
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="mainContainer">
	<form class="" on:submit|preventDefault={register}>
		<h1>Register</h1>

		<input type="email" placeholder="Email" required bind:value={email} />
		<input type="password" placeholder="Password" required bind:value={password} />

		<button type="submit" class="default-action">Register</button>

		{#if !success && success !== undefined}
			<div class="error">
				<span class="material-symbols-outlined"> error </span>There was an error registering. Please
				try again.
			</div>
		{/if}
	</form>
</div>

<style lang="scss">
	.mainContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 24px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 14px;
		border: 3px solid white;
		border-radius: 5px;
		padding: 70px;
		width: 450px;

		input {
			width: 100%;
			padding: 20px;
			background: transparent;
			border: 3px solid white;
			border-radius: 5px;
			color: white;
			flex: 1;
			font-family: 'Roboto Mono', monospace;
			font-size: 1rem;

			&::placeholder {
				color: #f8f9fa;
			}

			&:focus {
				outline: none;
			}
		}

		h1 {
			text-align: center;
			font-size: 3.2rem;
		}

		button {
			background: transparent;
			color: white;
			padding: 20px 0;
			border: 3px solid white;
			border-radius: 5px;
			cursor: pointer;
			font-size: 1rem;
			display: grid;
			place-items: center;
			font-family: 'Roboto Mono', monospace;

			&:hover {
				box-shadow: 3px 3px white;
			}
		}
	}

	.error {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.7rem;
		color: #b82020;
		background-color: #fce8e8;
		border-radius: 5px;
		padding: 3px;
	}
</style>
