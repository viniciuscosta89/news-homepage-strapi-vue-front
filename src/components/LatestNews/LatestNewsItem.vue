<script setup lang="ts">
	import { useCarStore } from '@/stores/car'

	const store = useCarStore()	

	defineProps<LatestNewsItemProps>();

	interface LatestNewsItemProps {
		carId: number;
		link: string;
		title: string;
		exerpt: string;
	}
</script>

<template>
	<a 
		class="latest-news-item" 
		@click="(e) => store.goToCarPage(e, link.toLowerCase().replace(/\s+/g, '-'), carId)" 
		:href="`/car/${link.toLowerCase().replace(/\s+/g, '-')}`"
	>
		<h3 class="latest-news-item__title">{{ title }}</h3>
		<p class="latest-news-item__exerpt">{{ exerpt }}</p>
	</a>
</template>

<style scoped lang="scss">
	.latest-news-item {
		text-decoration: none;
		$root: &;

		&:hover {
			#{$root}__title {
				color: var(--soft-orange);
			}
		}

		&__title {
			color: var(--text-inverse-alternative);
			font-size: var(--fs-500);
			font-weight: var(--fw-black);
			line-height: 1.2;
			margin-block-end: var(--size-8);
			transition: all 0.3s ease-in-out;
		}

		&__exerpt {
			color: var(--silver-alternative);
			display: -webkit-box;
			line-height: 1.73;
			height: 3.25rem;
			overflow: hidden;
			text-overflow: ellipsis;
			transition: all 0.3s ease-in-out;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--silver-alternative);
			padding-block-end: var(--size-28);
		}
	}
</style>