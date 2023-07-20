<script setup lang="ts">
  defineProps<{
    msg: string
  }>()

  import { ref, computed } from 'vue'
  import axios from 'axios';

  interface CarDataResponse {
    attributes: Car;
    id: number;
  }

  interface Car {
    brand: string;
    createdAt: string;
    description: string;
    except: string;
    model: string;
    publishedAt: string;
    updatedAt: string;
    year: number;
  }


  const carData = ref<CarDataResponse[]>([]);

  axios.get('http://localhost:1337/api/cars').then(({ data }) => {
    carData.value = data.data
  });  
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>

    <ul>
      <li v-for="({ attributes: { brand, model }, id }) in carData" :key="id">
        <span>{{  brand }}</span>
        <h1>{{ model }}</h1>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 1.2rem;    
  }
}

.green {
    color: green;
  }

.greetings {
  h1 {
    text-align: center;    
  }

  .green {
    color: rgb(0, 255, 0);
  }
}

.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
