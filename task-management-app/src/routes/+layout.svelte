<script lang="ts">
    import { authUser } from '../authstore/authstore';
	import Header from '../lib/firebase/Header.svelte';

</script>

<main class="p-8 space-y-12 font-serif">
	<Header />
	<slot />
</main>