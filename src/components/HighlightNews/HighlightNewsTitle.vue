<script setup lang="ts">
	defineProps<HighlightNewsTitleProps>();

	interface HighlightNewsTitleProps {
		title: string;
	}
</script>

<template>
	<h2 class="highlight-news-title">{{  title }}</h2>
</template>

<style scoped lang="scss">
	.highlight-news-title {
		color: var(--dark-space-blue);
		font-size: var(--size-56);
		font-weight: var(--fw-black);
		line-height: normal;
	}	
</style>