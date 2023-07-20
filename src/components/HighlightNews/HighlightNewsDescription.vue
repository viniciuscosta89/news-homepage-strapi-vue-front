<script setup lang="ts">	
	import { useCarStore } from '@/stores/car'

	const store = useCarStore()

	defineProps<HighlightNewsDescriptionProps>();

	interface HighlightNewsDescriptionProps {
		carId: number;
		text: string;
		ctaUrl: string;
	}
</script>

<template>
	<div class="highlight-news-description">
		<p class="highlight-news-description__text">{{ text }}</p>

		<a 
			@click="(e) => store.goToCarPage(e, ctaUrl.toLowerCase().replace(/\s+/g, '-'), carId)" 
			:href="`/car/${ctaUrl.toLowerCase().replace(/\s+/g, '-')}`"
			class="highlight-news-description__cta"
		>
			Read more
		</a>		
	</div>
</template>

<style scoped lang="scss">
	.highlight-news-description {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;

		&__text {
			line-height: 1.73;
		}

		&__cta {
			background-color: var(--soft-red);
			color: var(--text-inverse);
			font-size: var(--step--1);
			font-weight: var(--fw-bold);
			letter-spacing: 0.27344rem;			
			margin-block-start: auto;
			padding: 1rem 2rem;
			text-decoration: none;
			text-transform: uppercase;
			transition: all 0.3s ease-in-out;

			&:hover,
			&:focus {
				background-color: var(--dark-space-blue);
			}
		}
	}	
</style>