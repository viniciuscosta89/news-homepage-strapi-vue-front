<script setup lang="ts">
	defineProps<LatestNewsProps>();

	interface LatestNewsProps {
		title: string;
	}
</script>

<template>
	<h2 class="latest-news-title">
		{{  title }}
	</h2>
</template>

<style scoped lang="scss">
	.latest-news-title {
		color: var(--soft-orange);
		font-size: var(--fs-800);
		font-weight: var(--fw-bold);
		line-height: 1;
		margin-block-end: var(--size-36);
		transition: all 0.3s ease-in-out;
	}
</style>