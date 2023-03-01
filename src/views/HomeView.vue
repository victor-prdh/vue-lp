<script setup lang="ts">
import { fetchDiscover } from '@/helpers/Request';
import { reactive, onMounted,  } from 'vue'
import type { DiscoverResponseInterface, BasicMovieInterface } from "@/Interfaces";

const state: {movies: Array<BasicMovieInterface>} = reactive({movies: []})

onMounted(async (): Promise<void> => {
	var data: DiscoverResponseInterface = await fetchDiscover();
	state.movies.push(...data.results)
})
</script>

<template>
  <main>
    <h1>Home</h1>

	<ul>
        <li v-for="movie in state.movies">
            <span>{{ movie.title }}</span>
        </li>
    </ul>
  </main>
</template>
