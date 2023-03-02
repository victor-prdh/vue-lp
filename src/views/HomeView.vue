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
	}
};
</script>

<template>
	<main>
		<h1>Home</h1>
		<MovieListing :movies="state.movies"></MovieListing>

		<div class="d-flex w-100 justify-center" style="margin: 50px 0;">
			<v-progress-circular indeterminate v-if="state.isLoading"></v-progress-circular>
		</div>

	</main>
</template>
