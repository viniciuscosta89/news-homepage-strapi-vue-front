<script setup lang="ts">
	defineProps<ThemeIconProps>();

	interface ThemeIconProps {
		isDarkMode: boolean;
	}
</script>

<template>	
	<button 
		class="theme-switcher" 
		:title="isDarkMode ? 'Switch to light mode': 'Switch to dark mode'"
	>
		<TransitionGroup name="translate">
			<span 
				class="material-symbols-outlined" 
				v-if="!isDarkMode"
				title="Switch to dark mode"
			>
				light_mode
			</span>
		
			<span 
				class="material-symbols-outlined" 
				v-if="isDarkMode"
				title="Switch to light mode"
			>
				dark_mode
			</span>
		</TransitionGroup>	
	</button>
</template>

<style lang="scss">
	.theme-switcher {
		background: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s ease-in-out;

		&:hover {
			color: var(--soft-red);
		}
	}

	.translate-move,
	.translate-enter-active,
	.translate-leave-active {
		transition: all 0.5s ease-in-out;
	}
	.translate-enter-from,
	.translate-leave-to {
		opacity: 0;
		transform: translateY(-2rem);
	}

	.translate-leave-active {
		position: absolute;
	}

	.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 48
	}	
</style>