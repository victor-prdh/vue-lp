<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Nav/Navbar.vue";
</script>

<template>
	<v-app>
		<Navbar></Navbar>

		<v-container>
			<RouterView />
		</v-container>
	</v-app>
</template>

<style scoped>
.v-container {
	margin-top: 60px;
}
</style>
