<script setup lang="ts">
import { fetchDiscover } from '@/helpers/Request';
import { reactive, onMounted,  } from 'vue'
import type { DiscoverResponseInterface, BasicMovieInterface } from "@/Interfaces";

const IMG_URL = "https://image.tmdb.org/t/p/original/"

const state: {movies: Array<BasicMovieInterface>} = reactive({movies: []})

onMounted(async (): Promise<void> => {
	var data: DiscoverResponseInterface = await fetchDiscover();
	state.movies.push(...data.results)
})
</script>

<template>
  <main>
    <h1>Home</h1>

    <v-card
    v-for="movie in state.movies"
      class="mx-auto"
    >
      <v-img
        :src="IMG_URL + movie.poster_path"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        {{movie.title}}
      </v-card-title>
  
      <v-card-text>
        {{ movie.overview }}
      </v-card-text>
    </v-card>
  </main>
</template>
