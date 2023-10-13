<script setup lang="ts">
definePageMeta({
	middleware: 'auth',
  layout: "admin",
});
</script>

<template>
	<div>
		<p>This page will be displayed at the /about route.</p>
	</div>
</template>