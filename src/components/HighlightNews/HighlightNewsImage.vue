<script setup lang="ts">
import { ref } from 'vue';

	defineProps<HighlightNewsImageProps>();

	interface HighlightNewsImageProps {
		src: string;
		alt: string;
	}	

	const imgIsLoaded = ref(false);
	const img = ref();

	function onImgLoad () {
		imgIsLoaded.value = true

		if (imgIsLoaded.value === true) {
			img.value.classList.add('highlight-news-img--loaded')
		}
	}
</script>

<template>
	<img 
		ref="img"
		class="highlight-news-img" 		
		:src="src" 
		:alt="alt" 
		@load="onImgLoad"
	/>	
</template>

<style scoped lang="scss">
	@use '../../assets/styles/variables' as *;
	
	.highlight-news-img {
		background-color: var(--text);
		display: block;		
		filter: blur(1rem);
		object-fit: cover;
		opacity: 0.5;
		max-width: 100%;
		width: 100%;
		transition: all 0.3s ease-in-out;	

		&[src=""] {        
			filter: blur(1rem);
		}

		&--loaded {
			filter: blur(0);
			opacity: 1;
		}
		
		@media (min-width: $breakpoint-desktop) {
			aspect-ratio: 730 / 300;
			grid-column: span 2;		
			max-height: 18.75rem;
		}
	}
</style>