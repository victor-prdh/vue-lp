<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/note">Note</RouterLink>
      </nav>
  </header>

  <v-container>
    <RouterView />
  </v-container>

  
</template>

<style scoped>

</style>
