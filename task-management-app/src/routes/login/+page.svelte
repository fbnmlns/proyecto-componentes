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

<h1 class="text-4xl font-bold">Login</h1>

<form
	class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12"
	on:submit|preventDefault={login}
>
	<input
		type="email"
		placeholder="Email"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={email}
	/>
	<input
		type="password"
		placeholder="Password"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={password}
	/>

	<button type="submit" class="default-action">Login</button>

	{#if !success && success !== undefined}
		<div class="p-8 text-red-500 bg-red-100">There was an error logging in. Please try again.</div>
	{/if}
</form>
