<script setup lang="ts">
import { fetchDiscover } from '@/helpers/Request';
import { reactive, onMounted, } from 'vue'
import type { DiscoverResponseInterface, BasicMovieInterface } from "@/Interfaces";
import MovieListing from '@/components/MovieListing.vue';

const state: { 
	movies: Array<BasicMovieInterface>;
	isLoading: boolean;
	page: number
} = reactive({ 
	movies: [],
	isLoading: true,
	page: 1
})

onMounted(async (): Promise<void> => {
	fetchMoreMovies()
})

async function fetchMoreMovies(): Promise<void> {
	state.isLoading = true
	var data: DiscoverResponseInterface = await fetchDiscover(state.page);
	state.movies.push(...data.results)
	state.page = state.page + 1
	state.isLoading = false
}

window.onscroll = () => {
	let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

	if (bottomOfWindow && !state.isLoading) {
		fetchMoreMovies()
		console.log('isLoading');
	}
};
</script>

<template>
	<main style="margin-bottom: 50px;">
		<h1>Home</h1>
		<MovieListing :movies="state.movies"></MovieListing>

		<v-progress-circular indeterminate v-if="state.isLoading"></v-progress-circular>

	</main>
</template>
