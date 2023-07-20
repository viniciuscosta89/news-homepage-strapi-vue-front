<script setup lang="ts">
	import Container from '../Container/Container.vue';
	import Logo from '../icons/Logo.vue';	
	import Navigation from '../Navigation';

	interface navigationItemsType {
		id: number,
		label: string;
		url: string;
		isRouter: boolean;
	}

	const navigationItems: navigationItemsType[] = [
		{
			id: 0,
			label: 'Home',
			url: '/',
			isRouter: true
		},
		{
			id: 1,
			label: 'New',
			url: '#new',
			isRouter: false
		},
		{
			id: 2,
			label: 'Popular',
			url: '#popular',
			isRouter: false
		},
		{
			id: 3,
			label: 'Trending',
			url: '#trending',
			isRouter: false
		},
		{
			id: 4,
			label: 'Categories',
			url: '#categories',
			isRouter: false
		},
	]	
</script>

<template>
	<header class="header">
		<Container>
			<div class="header__grid">
				<Logo />
	
				<Navigation.Root>
					<Navigation.Item 
						v-for="({ label, url, id, isRouter }) in navigationItems" 
						:label="label" 
						:url="url" 
						:key="id" 
						:isRouter="isRouter"
					/>
				</Navigation.Root>
			</div>
		</Container>
	</header>
</template>

<style scoped lang="scss">
	@use '../../assets/styles/variables' as *;
	.header {
		background-color: var(--bg);		
		display: flex;
		margin-block-end: 2.5rem;
		padding-block: 1rem;
		position: sticky;
		top: 0;
		transition: all 0.3s ease-in-out;
		z-index: 5;
		
		&::before {
			content: '';
			background-color: var(--dark-space-blue);
			display: block;
			position: fixed;
			inset: 0;
			opacity: 0;
			visibility: hidden;
			transition: all 0.5s ease-in-out;
			z-index: 5;
		}

		.menu-is-opened & {
			&::before {
				opacity: 0.5;
				visibility: visible;
			}
		}

		&__grid {
			display: flex;			
			justify-content: space-between;

			@media (min-width: $breakpoint-desktop) {
				align-items: center;
			}
		}
	}
</style>