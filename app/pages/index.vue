<script setup lang="ts">
	import { useFetch } from 'nuxt/app';
	const { data: resData } = await useFetch('/api/test');
	console.log(resData);
</script>
<template>
  <div>
    <h1 class="underline text-[20px]">Welcome to the homepage baby</h1>
		<p>{{ resData }}</p>
		<AppAlert>
			This is an auto-imported component.
		</AppAlert>
  </div>
</template>
