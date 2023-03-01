<script setup lang="ts">
import type { BasicMovieInterface } from '@/Interfaces';

const IMG_URL = "https://image.tmdb.org/t/p/original/"

defineProps<{
	movie: BasicMovieInterface;
}>();

function formatOverview(overview: string): string {
	var noDesc = `Ce film n'a pas de description`;

	if (overview === '') {
		return noDesc	
	}

	return overview.slice(0, 130).concat('...') ?? noDesc;
}
</script>

<template>
	<v-card class="mx-auto w-100" >
		<v-img :src="IMG_URL + movie.backdrop_path" height="300px" cover></v-img>

		<v-card-title>
			{{ movie.title }}
		</v-card-title>

		<v-card-text >
			{{ formatOverview(movie.overview) }}
		</v-card-text>
	</v-card>
</template>
