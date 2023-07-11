<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from './firebase';
	import { authUser } from '../authstore/authstore';

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				$authUser = undefined;
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<header>
	<nav>
		{#if $authUser}
			<span
				class="material-symbols-outlined logout-icon"
				on:click={handleLogout}
				on:keydown={() => {}}
				role="button"
				tabindex="0"
			>
				logout
			</span>
		{:else if !($page.url.pathname === '/')}
			<a class="material-symbols-outlined arrow-back-icon" href="/"> arrow_back </a>
		{/if}
	</nav>
</header>

<style lang="scss">

	.logout-icon {
		display: flex;
		font-size: 3rem;
		color: white;
		text-decoration: none;
		cursor: pointer;
		padding: 10px 18px;
    float: right;

		&:hover {
			font-size: 3.5rem;
		}
	}

	.arrow-back-icon {
		display: flex;
		font-size: 3rem;
		color: white;
		text-decoration: none;
		cursor: pointer;
		padding: 10px 18px;

		&:hover {
			font-size: 3.5rem;
		}
	}
</style>


