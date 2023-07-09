<!-- src/routes/register/+page.svelte -->
<script lang="ts">
    
    import { goto } from '$app/navigation';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '../../lib/firebase/firebase';
   
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
  <form
    class=""
    on:submit|preventDefault={register}
  >
    <input
      type="email"
      placeholder="Email"
      class=""
      required
      bind:value={email}
    />
    <input
      type="password"
      placeholder="Password"
      class=""
      required
      bind:value={password}
    />
  
    <button type="submit" class="default-action">Register</button>
  </form>