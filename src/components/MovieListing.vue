<script setup lang="ts">
import type { BasicMovieInterface } from '@/Interfaces';
import MovieCard from './Cards/MovieCard.vue';

const props = defineProps({movies: Array<BasicMovieInterface>});
</script>

<template>
    <v-row>
        <v-col cols="6" v-for="movie in movies" class="d-flex" >
            <MovieCard :movie="movie"></MovieCard>
        </v-col>
    </v-row>
</template>
