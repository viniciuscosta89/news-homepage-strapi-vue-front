<script setup lang="ts">
	defineProps<HighlightNewsImageProps>();

	interface HighlightNewsImageProps {
		url: string;
		alt: string;
	}
</script>

<template>
	<img :src="`http://localhost:1337${url}`" :alt="alt" />
</template>

<style scoped lang="scss">
	@use '../../assets/styles/variables' as *;
	
	img {
		display: block;
		object-fit: cover;
		max-width: 100%;
		width: 100%;
		
		@media (min-width: $breakpoint-desktop) {
			aspect-ratio: 730 / 300;
			grid-column: span 2;		
			max-height: 18.75rem;
		}
	}
</style>