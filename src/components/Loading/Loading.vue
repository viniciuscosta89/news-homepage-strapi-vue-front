<script setup lang="ts"></script>

<template>
	<div class="loading" key="loading">
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<style scoped lang="scss">
	.loading {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);

    > span {
      background-color: var(--text);
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      animation: 1.2s ease 0s infinite forwards load;     

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }

  @keyframes load {
    from {
      transform: scale(0.7);
    }

    50% {
      transform: scale(1);
    }

    to {
      transform: scale(0.7);
    }
  }
</style>

