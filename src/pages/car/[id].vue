<script setup lang="ts">
  import axios from 'axios';
  import { useCarStore } from '@/stores/car';
  import type { CarDataResponse } from '@/types/car';
  import { useQuery } from '@tanstack/vue-query';
  import Container from '@/components/Container/Container.vue';
  import Loading from '@/components/Loading/Loading.vue';
  import Markdown from 'vue3-markdown-it';
  import { ref } from 'vue';
  
  const apiServer = import.meta.env.MODE === 'development' ? 'http://localhost:1337' : 'https://news-homepage-strapi.fly.dev'
  const store = useCarStore();
  const carFromLocalStorage = localStorage.getItem('carId');
  const carId = store.carId || carFromLocalStorage!;  

  async function fetchCar (id: string | number): Promise<CarDataResponse> {
    const data = await axios.get(`${apiServer}/api/cars/${id}?populate=*`).then(({ data }) => data.data);    

    return data;
  }  

  const useCar = (id: string | number) => {
    const { isLoading, data, isSuccess } = useQuery(
      ['car', id],
      () => fetchCar(id),
      {
        enabled: !!id,
      }
    )         
    
    return { data, isLoading, isSuccess }
  }

  const { data: carData, isLoading } = useCar(carId) 
  
  const imgIsLoaded = ref(false);
	const img = ref();

	function onImgLoad () {
		imgIsLoaded.value = true

		if (imgIsLoaded.value === true) {
			img.value.classList.add('car__img--loaded')
		}
	}
</script>

<template>
  <div class="news">
      <Container style="--width: 50%">
        <transition name="fade" mode="out-in">
          <Loading v-if="isLoading" key="loading" />          

          <div class="car" v-else-if="carData" key="loaded">
            <img 
              ref="img"
              class="car__img"
              :src="carData.attributes.picture.data ? carData.attributes.picture.data.attributes.url : 'https://placehold.co/1920x1080/f15e50/ffffff?text=No+Picture'" 
              :alt="carData.attributes.picture.data && carData.attributes.picture.data.attributes.alternativeText ? carData.attributes.picture.data.attributes.alternativeText : 'No picture'" 
              @load="onImgLoad"          
            />
            <h1 class="car__title">{{ `${carData?.attributes.brand} ${carData?.attributes.model}` }}</h1>
            <Markdown class="car__description" :source="carData?.attributes.description" />
          </div>
        </transition>       
      </Container>
  </div>
</template>

<style lang="scss">
  .content {
    display: flex;    
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .car {
    padding-block-end: 3rem;

    &__title {
      color: var(--dark-space-blue);
      font-size: var(--fs-700);
      line-height: 1.2;
      margin-block-end: 2rem;
    }

    &__img {
      aspect-ratio: 16 / 9;
      background-color: var(--text); 
      filter: blur(1rem);     
      margin-block-end: 1rem;
      object-fit: cover;
      opacity: 0.5;
      transition: all 0.3s ease-in-out;	

      &[src=""] {        
        filter: blur(1rem);
      }

      &--loaded {
        filter: blur(0);
        opacity: 1;
      }
    }

    &__description {
      line-height: 1.7;
      
      > *:not(:last-child) {
        margin-block-end: 1rem;
      }

      ul {
        list-style-position: inside;

        li {
          &::marker {
            color: var(--soft-red);
          }
        }
      }
    }
  }
</style>
