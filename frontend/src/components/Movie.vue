<template>
    <div>
        <div v-for="movie in movies" :key="movie.kinopoiskID" class="movie-card">
            <img class="poster" :src="movie.posterUrlPreview" :alt="movie.nameRu">
            <h3>{{ movie.nameRu || movie.nameEn }}</h3>
            <p>{{ movie.year }} - {{ movie.ratingKinopoisk }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';

const movies=ref([])
const loading=ref(true)

onMounted(async()=>{
    try{
        const response=await axios.get('http://localhost:5178/api/movies')
        movies.value=response.data
        loading.value=false
    }
    catch(error){
        console.error("Ошибка загрузки фильмов",error)
        loading.value=false
    }
})
</script>

<style scoped>
.poster{
    width:100px;
}
</style>