<script setup lang="ts"></script>

<template>
	<div class="container"><slot /></div>
</template>

<style scoped lang="scss">
	@use '../../assets/styles/variables' as *;
	.container {
		margin-inline: auto;		
		position: relative;
		width: min(69.375rem, 100% - 2rem);		

		@media (min-width: $breakpoint-desktop) {
			max-width: var(--width, 69.375rem);
			width: min(69.375rem, 100% - 4rem);
		}
	}
</style>