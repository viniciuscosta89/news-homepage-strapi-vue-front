<script setup lang="ts">
	defineProps<TrendingNewsContentProps>();

	interface TrendingNewsContentProps {		
		position: number | string;
		title: string;
		exerpt: string;
	}
</script>

<template>
	<div class="trending-news-content">
		<span class="trending-news-content__position">{{  position }}</span>
		<h3 class="trending-news-content__title">{{  title }}</h3>
		<p class="trending-news-content__exerpt">{{ exerpt }}</p>
	</div>
</template>

<style scoped lang="scss">
	.trending-news-content {
		display: flex;
		flex-direction: column;
		gap: var(--size-12);

		&__position {
			color: var(--silver);
			font-size: var(--size-32);			
			font-weight: var(--fw-bold);
			line-height: 1;
		}

		&__title {
			color: var(--dark-space-blue);
			font-size: var(--size-18);
			font-weight: var(--fw-black);
			line-height: 1.33;
			transition: all 0.3s ease-in-out;
		}

		&__exerpt {
			font-size: var(--size-16);
			display: -webkit-box;			
			line-height: 1.73;
			height: 3.25rem;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>