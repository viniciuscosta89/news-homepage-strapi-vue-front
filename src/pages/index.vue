<script setup lang="ts">
  import axios from 'axios';
  import { useQuery } from "@tanstack/vue-query";

  import Container from '@/components/Container/Container.vue';
  import HighlightNews from '@/components/HighlightNews';
  import LatestNews from '@/components/LatestNews';
  import TrendingNews from '@/components/TrendingNews'; 
  import Loading from '@/components/Loading/Loading.vue';

  import { type CarDataResponse } from '@/types/car';    

  async function fetchCars(): Promise<CarDataResponse[]> {
    const data = await axios.get('http://localhost:1337/api/cars?populate=*').then(({ data }) => data.data);

    return data;
  }

  const useCars = () => {
    const { isLoading, data, isSuccess } = useQuery(
      ['cars'],
      fetchCars
    )
    
    return { data, isLoading, isSuccess }
  }

  const { data: carData, isLoading, isSuccess } = useCars()
</script>

<template>
  <main>
    <Container>
      <transition name="fade" mode="out-in">
        <Loading key="loading" v-if="isLoading" />  
        <div class="main-grid" v-else-if="isSuccess" key="loaded">
          <HighlightNews.Root v-for="{ attributes: { picture, brand, model, excerpt }, id } in carData?.slice(0, 1)">
            <HighlightNews.Image          
              :url="picture.data.attributes.formats.large.url"
              :alt="picture.data.attributes.alternativeText || ''"
            />
  
            <HighlightNews.Title :title="`${brand} ${model}`" />
  
            <HighlightNews.Description :text="excerpt" :ctaUrl="`${brand}-${model}`" :carId="id" />
          </HighlightNews.Root>
  
          <LatestNews.Root>
            <LatestNews.Title title="New" />
  
            <LatestNews.Content>
              <LatestNews.Item v-for="{ attributes: { brand, model, excerpt }, id } in carData?.slice(0, 3)" 
                :key="id" 
                :carId="id"
                :link="`${brand}-${model}`"
                :title="`${brand} ${model}`" 
                :exerpt="excerpt" />
            </LatestNews.Content>
          </LatestNews.Root>        
  
          <TrendingNews.Root>
            <TrendingNews.Item 
              v-for="{ attributes: { brand, model, excerpt, picture }, id } in carData"
              :key="id"
              :carId="id"
              :link="`${brand}-${model}`"
            >
              <TrendingNews.Image 
                :src="picture.data.attributes.formats.small.url"
                :alt="picture.data.attributes.alternativeText || ''"
              />
    
              <TrendingNews.Content 
                :position="id"
                :title="`${brand} ${model}`"
                :exerpt="excerpt"
              />
    
            </TrendingNews.Item>
          </TrendingNews.Root>
        </div>
      </transition>

    </Container>    
  </main>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/variables' as *;
  .main-grid {
    display: grid;
    gap: 4.5rem 2rem;
    padding-block-end: 8rem;
    
    @media (min-width: $breakpoint-desktop) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
