<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { authUser } from '../../store/authstore';

	let email: string;
	let password: string;

	let success: boolean | undefined = undefined;

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				$authUser = {
					uid: userCredential.user.uid,
					email: userCredential.user.email || ''
				};
				goto('/tasklist');
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
	<title>Login</title>
</svelte:head>

<div class="mainContainer">
	<form on:submit|preventDefault={login}>
		<h1>Login</h1>

		<input type="email" placeholder="Email" required bind:value={email} />
		<input type="password" placeholder="Password" required bind:value={password} />

		<button type="submit">Login</button>

		{#if !success && success !== undefined}
			<div class="error">
				<span class="material-symbols-outlined"> error </span>There was an error logging in. Please
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

		input {
			width: 100%;
			padding: 20px;
			background: transparent;
			border: 3px solid white;
			border-radius: 5px;
			color: white;
			flex: 1;
			font-family: 'Roboto Mono', monospace;

			&::placeholder {
				color: #f8f9fa;
			}

			&:focus {
				outline: none;
			}
		}

		h1 {
			text-align: center;
			font-size: 3rem;
		}

		button {
			background: transparent;
			color: white;
			padding: 14px 0;
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
		color: #e36363;
	}
</style>
