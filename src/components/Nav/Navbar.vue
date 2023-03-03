<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <v-app-bar title="Ciné info">
        <template v-slot:append>
            <RouterLink :to="{name: 'home'}" class="router-link">Home</RouterLink>
            <RouterLink :to="{name: 'note'}" class="router-link">Note</RouterLink>
        </template>

    </v-app-bar>
</template>

<style scoped>
.v-container {
    margin-top: 60px;
}

.v-toolbar-title__placeholder {
    margin-left: 20px;
}

.router-link {
    text-decoration: none;
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    padding: 10px;
    margin-right: 10px;
}

.router-link-active {
    font-weight: bold;
}
</style>
