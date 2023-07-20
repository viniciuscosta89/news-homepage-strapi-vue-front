<script setup lang="ts">
	import { RouterLink } from 'vue-router/auto'
	defineProps<NavProps>()

	interface NavProps {
		label: string;
		url: string;
		isRouter: boolean;
	}
</script>

<template>
	<li class="nav-item">		
		<router-link class="nav-item__link" :to="url" v-if="isRouter">
			{{ label }}
		</router-link>

		<a class="nav-item__link" :href="url" v-else>
			{{ label }}
		</a>		
	</li>
</template>

<style scoped lang="scss">
	@use '@/assets/styles/variables' as *;

	.nav-item {
		&__link {
			color: var(--dark-space-blue);
			display: block;
			line-height: 1.33;
			position: relative;
			text-decoration: none;
			transition: color 0.3s ease-in-out;

			@media (min-width: $breakpoint-desktop) {
				color: var(--text);
			}

			&::after {
				content: "";
				background-color: $soft-red;
				display: block;
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: -2px;
				left: 0;
				transform: scaleX(0);
				transition: transform 0.3s ease-in-out;
			}

			&:hover,
			&:focus {
				color: $soft-red;

				&::after {
					transform: scaleX(1);
				}
			}
		}
	}


</style>