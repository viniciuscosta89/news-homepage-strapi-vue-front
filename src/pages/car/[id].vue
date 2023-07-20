<script setup lang="ts">
import axios from 'axios';
import { useCarStore } from '@/stores/car';
import type { CarDataResponse } from '@/types/car';
import { useQuery } from '@tanstack/vue-query';
import Container from '@/components/Container/Container.vue';
import Loading from '@/components/Loading/Loading.vue';
import Markdown from 'vue3-markdown-it';

  const store = useCarStore();
  const carFromLocalStorage = localStorage.getItem('carId');
  const carId = store.carId || carFromLocalStorage!;  

  async function fetchCar (id: string | number): Promise<CarDataResponse> {
    const data = await axios.get(`http://localhost:1337/api/cars/${id}?populate=*`).then(({ data }) => data.data);    

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

  const { data: carData, isLoading, isSuccess } = useCar(carId)
</script>

<template>
  <div class="news">
      <Container style="--width: 50%">
        <transition name="fade" mode="out-in">
          <Loading v-if="isLoading" key="loading" />          

          <div class="car" v-else-if="isSuccess" key="loaded">
            <img 
              class="car__img"
              :src="`http://localhost:1337${carData?.attributes.picture.data.attributes.url}`" 
              :alt="carData?.attributes.picture.data.attributes.alternativeText || ''"           
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
      margin-block-end: 1rem;
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
