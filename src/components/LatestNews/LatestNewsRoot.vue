<script setup lang="ts">
</script>

<template>
	<div id="new" class="latest-news">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.latest-news {
		background-color: var(--dark-space-blue-alternative);
		padding: 2rem 1.5rem;
		transition: all 0.3s ease-in-out;
	}
	
</style>