<script setup lang="ts">
	import { useCarStore } from '@/stores/car'

	const store = useCarStore()	

	defineProps<TrendingNewsItemProps>();

	interface TrendingNewsItemProps {
		carId: number;
		link: string;
	}
</script>

<template>
	<a 
		class="trending-news-item" 
		@click="(e) => store.goToCarPage(e, link.toLowerCase().replace(/\s+/g, '-'), carId)" 
		:href="`/car/${link.toLowerCase().replace(/\s+/g, '-')}`"
	>
		<slot />		
	</a>

</template>

<style lang="scss">
	.trending-news-item {
		color: var(--text);
		display: grid;
		gap: var(--size-24);
		grid-template-columns: 1fr 1.5fr;
		text-decoration: none;
		transition: all 0.3s ease-in-out;

		&:hover {						
			transform: scale(1.05);	

			.trending-news-content__title {
				color: var(--soft-red);
			}
		}		
	}
</style>