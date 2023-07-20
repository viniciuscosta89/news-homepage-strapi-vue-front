<script setup lang="ts"></script>

<template>
	<div id="trending" class="trending-news">
		<slot />		
	</div>
</template>

<style scoped lang="scss">
	@use '../../assets/styles/variables' as *;
	.trending-news {
		display: grid;
		gap: var(--size-32);
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

		@media (min-width: $breakpoint-desktop) {
			grid-template-columns: repeat(3, 1fr);
			grid-column: span 3;
		}
	}
</style>