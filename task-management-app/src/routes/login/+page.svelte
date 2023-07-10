<!-- src/routes/login/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '../../lib/firebase/firebase';
	import { authUser } from '../../authstore/authstore'

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
				goto('/protected');
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

<h1>Login</h1>

<form
	on:submit|preventDefault={login}
>
	<input
		type="email"
		placeholder="Email"
		required
		bind:value={email}
	/>
	<input
		type="password"
		placeholder="Password"
		required
		bind:value={password}
	/>

	<button type="submit">Login</button>

	{#if !success && success !== undefined}
		<div>There was an error logging in. Please try again.</div>
	{/if}
</form>
