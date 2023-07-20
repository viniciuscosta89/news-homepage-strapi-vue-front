<script setup lang="ts">
	defineProps<TrendingNewsImageProps>();

	interface TrendingNewsImageProps {
		src: string;
		alt: string;		
	}
</script>

<template>
	<img class="trending-news-img" :src="`http://localhost:1337${src}`" :alt="alt" />
</template>

<style scoped lang="scss">
	.trending-news-img {
		aspect-ratio: 100 / 127;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>