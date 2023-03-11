<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute } from "vue-router";
import { fetchDetail } from '@/helpers/Request';


const route = useRoute();
const IMG_URL = "https://image.tmdb.org/t/p/original/"

const state: {
    movie: any;
    isLoading: boolean
} = reactive({
    movie: null,
    isLoading: true
})

const id = route.params.id;

onMounted(async () => {
    var data = await fetchDetail(id.toString());

    state.movie = data;
    state.isLoading = false
})

function formatOverview(overview: string): string {
    var noDesc = `Ce film n'a pas de description`;

    if (overview === '') {
        return noDesc
    }

    return overview ?? noDesc;
}
</script>

<template>
    <div class="d-flex w-100 justify-center" style="margin: 30px 0;">
        <v-progress-circular indeterminate v-if="state.isLoading"></v-progress-circular>
    </div>

    <v-row v-if="state.movie !== null">
        <v-col cols="12">
            <v-img :src="IMG_URL + state.movie.backdrop_path" height="400px" cover></v-img>
        </v-col>
        <v-col cols="12">
            <h1>{{ state.movie.title }}</h1>
        </v-col>
        <v-col cols="12">
            <v-chip v-for="genre in state.movie.genres" variant="outlined" style="margin-right: 12px;">
                {{ genre.name }}
            </v-chip>
        </v-col>
        <v-col cols="12">
            <p style="text-align: justify;">{{ formatOverview(state.movie.overview) }}</p>
        </v-col>

        <v-col cols="12">
            <h3>Produit par:</h3>
            <v-window show-arrows="true" :continuous="true">
                <v-window-item v-for="company in state.movie.production_companies" :key="`card-${company.id}`">
                    <v-card elevation="2" height="200" class="d-flex align-center justify-center ma-2">
                        <v-img :src="IMG_URL + company.logo_path" class="align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" contain>
                            <v-card-title class="text-white" v-text="company.name"></v-card-title>
                        </v-img>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
</template>

<style scoped></style>