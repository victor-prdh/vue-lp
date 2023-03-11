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

function like(event: PointerEvent): void {
	event.preventDefault();
}
</script>

<template>
	<v-card class="mx-auto w-100">
		<router-link :to="{ name: 'movie_detail',  params: {id: movie.id}}">
			<v-img :src="IMG_URL + movie.backdrop_path" height="300px" cover></v-img>

			<v-card-title>
				{{ movie.title }}
			</v-card-title>

			<v-card-text>
				{{ formatOverview(movie.overview) }}
			</v-card-text>
		
			<v-card-actions style="float: right;z-index: 10;">
				<v-btn @click="(event: PointerEvent) => like(event)">
					<v-icon icon="mdi-heart"></v-icon>
				</v-btn>
			</v-card-actions>
		</router-link>

	</v-card>
</template>

<style scoped>
a {
	text-decoration: none;
	color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
</style>