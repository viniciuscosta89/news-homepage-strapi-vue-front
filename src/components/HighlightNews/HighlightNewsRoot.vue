<script setup lang="ts">
</script>

<template>
	<div class="highlight-news">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.highlight-news {
		display: grid;
		gap: 1.75rem 2rem;

		@media (min-width: 1140px) {
			grid-template-columns: repeat(2, 1fr);
			grid-column: span 2;				
		}
	}
</style>