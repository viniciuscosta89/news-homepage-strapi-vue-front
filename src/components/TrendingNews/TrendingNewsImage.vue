<script setup lang="ts">
import { ref } from 'vue';

	defineProps<TrendingNewsImageProps>();

	interface TrendingNewsImageProps {
		src: string;
		alt: string;		
	}

	const isLoaded = ref(false);
	const img = ref();

	function onImgLoad () {
		isLoaded.value = true

		if (isLoaded.value === true) {
			img.value.classList.add('trending-news-img--loaded')
		}
	}
</script>

<template>
	<img ref="img" class="trending-news-img" :src="src" :alt="alt" @load="onImgLoad" />
</template>

<style scoped lang="scss">
	.trending-news-img {
		aspect-ratio: 100 / 127;
		background-color: var(--text);
		filter: blur(1rem);
		object-fit: cover;
		opacity: 0.5;
		width: 100%;
		height: 100%;
		transition: all 0.3s ease-in-out;

		&[src=""] {        
			filter: blur(1rem);
		}

		&--loaded {
			filter: blur(0);
			opacity: 1;
		}
	}
</style>