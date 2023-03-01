<script setup lang="ts">
import { computed, reactive, ref, onMounted } from 'vue'


interface Note {
  nom: string;
  note: number;
}

const notes: Note[] = [
    {nom: "Symfony", note: 12},
    {nom: "React", note: 13},
    {nom: "Vue", note: 14},
    {nom: "Français", note: 4},
    {nom: "Math", note: 9},
    {nom: "Anglais", note: 14},
    {nom: "Allemand", note: 10},
    {nom: "Droit", note: 7},
]

const state = reactive({showMoyenne: true})

const showMoyenne = ref(false)

const moyenne = computed((): number => {
    let moyenne: number = 0;
    let totalNote: number = 0;
    notes.forEach(note => {
        moyenne += note.note
        totalNote++;
    });

    return moyenne / totalNote;
})



onMounted(() => {
    console.log(state);
})
</script>

<template>
  <main>
    <ul>
        <li v-for="note in notes">
            <span v-if="note.note >= 10" style="color: green;">{{ note.nom }}: {{ note.note }}</span>
            <span v-else style="color: red;">{{ note.nom }}: {{ note.note }}</span>
        
        </li>
    </ul>
    <div v-if="showMoyenne">
        <h2>Moyenne: {{ moyenne }}</h2>

        <button @click="showMoyenne = !showMoyenne">Cacher la moyenne</button>
    </div>
    <div v-else>
        <h2>Moyenne: ***</h2>
        <button @click="showMoyenne = !showMoyenne">Voir la moyenne</button>
    </div>
    
  </main>
</template>

<style scoped>
h2 {
    color: var(--vt-c-black);
}
</style>