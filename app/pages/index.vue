<script setup lang="ts">
import { useFetch } from 'nuxt/app';
	const { data: resData } = await useFetch('/api/test');
	console.log(resData);
	
	const { session, status, cookies, sessionToken, signOut } = useAuth()
	console.log(session.value,status.value,cookies.value, sessionToken.value)
	// const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>
<template>
  <div>
		<p v-text="status"></p>
    <h1 class="underline text-[20px]">Welcome to the homepage baby this should be public</h1>
		<p>{{ resData }}</p>
		<AppAlert>
			This is an auto-imported component.
		</AppAlert>
		<p v-if="status == 'authenticated'">
			<button @click="signOut()">
        Sign Out
      </button>
		</p>
		

		<!-- <div>
      <a href="/api/auth/signin" class="underline">Native Link Sign in</a>
      <button @click="signIn('github')">
        JS Sign In
      </button>
     
    </div>
    <div>
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ cookies }}</pre>
    </div> -->

  </div>
</template>
