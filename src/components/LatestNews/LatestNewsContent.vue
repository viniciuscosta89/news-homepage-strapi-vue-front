<script setup lang="ts"></script>

<template>
	<div class="latest-news-content">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.latest-news-content {
		display: grid;
		gap: var(--size-32);
	}
</style>