<script setup lang="ts">
	import { ref } from 'vue';	
	import { useDarkModeStore } from '@/stores/theme'
	import IconThemeModes from '../icons/IconThemeModes.vue';

	const store = useDarkModeStore()
	const hasLocalStorageTheme = localStorage.getItem('darkMode')  

	let menuOpened = ref(false);	
	const body = document.body;

	if (hasLocalStorageTheme !== null) {
    store.isDarkMode = JSON.parse(localStorage.getItem('darkMode')!)
  }

	store.isDarkMode
		? body.setAttribute('data-theme', 'dark')
		: body.setAttribute('data-theme', 'light')
	
	const menuToggle = (event: Event) => {		
		event.preventDefault();
		menuOpened.value = !menuOpened.value;

		menuOpened.value ? body.classList.add('menu-is-opened') : body.classList.remove('menu-is-opened');				
	}	

</script>

<template>
	<button 
		:class="['menu-toggle', menuOpened ? 'menu-toggle--opened' : '']"
		@click.self="menuToggle"
		type="button"
		title="Menu toggle"
	>
		<span class="menu-toggle__line"></span>
		<span class="menu-toggle__line"></span>
		<span class="menu-toggle__line"></span>
	</button>

	<section>
		<nav :class="['nav', menuOpened ? 'nav--show' : '']">
			<ul>
				<slot />
			</ul>
		</nav>
	
		<IconThemeModes @click="store.toggleTheme" :isDarkMode="store.isDarkMode">Switch theme</IconThemeModes>
	</section>

</template>

<style scoped lang="scss">
	@use '@/assets/styles/variables' as *;

	.menu-toggle {
		border: none;
		background: none;
		display: flex;	
		flex-direction: column;
		justify-content: center;
		gap: 0.25rem;
		order: 2;
		padding: 0;	
		height: var(--size-40);
		width: var(--size-40);
		z-index: 20;
		
		$menu: &;	

		@media (min-width: $breakpoint-desktop) {
			display: none;
		}

		&:hover,
		&:focus {
			#{$menu}__line {
				background-color: var(--soft-red);
			}
		}
		
		&--opened {
			#{$menu}__line {
				&:first-child {
					transform: rotate(45deg) translate(0.5em, 0.5em);
				}

				&:nth-child(2) {
					transform: scaleX(0);
				}

				&:nth-child(3) {
					transform: rotate(-45deg) translate(0.25em, -0.25em);
				}
			}
		}

		&__line {
			background-color: var(--dark-space-blue);			
			width: 100%;
			height: 0.25rem;
			transition: all 0.5s ease-in-out;

			&:nth-child(2) {
					transform-origin: left;
				}
		}
	}

	.nav {		
		background-color: var(--bg);
		color: var(--dark-space-blue);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
		justify-content: center;
		padding: 9rem 1.5rem;
		position: fixed;
		inset: 0 0 0 auto;
		transform: translateX(100%);
		transition: transform 0.5s ease-in-out;
		width: 70%;
		z-index: 10;		

		&--show {
			box-shadow: 0 -2px 8px hsl(0 0% 0% / 0.5);
			transform: translateX(0);
		}

		@media (min-width: $breakpoint-desktop) {
			background: none;
			flex-direction: row;
			gap: 2.5rem;
			justify-content: flex-end;
			padding: 0;
			position: relative;
			inset: initial;
			transform: translateX(0);
		}
		
		> ul {
			display: contents;
			list-style: none;
		}
	}

	section {
		display: flex;
		justify-content: flex-end;
		gap: 2rem;
	}
</style>