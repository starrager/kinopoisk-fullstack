<template>

    <Header></Header>

    <div class="Main">
        <Main></Main>
    </div>

    <div class="Cards">
        <Cards></Cards>
        <div class="Movies">
            <Movie></Movie>
        </div>
    </div>

</template>

<script setup>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Cards from '@/components/Cards.vue'
import Movie from '@/components/Movie.vue'
</script>

<style scoped>
.Movies{
    width:200px;
    margin-left:350px;
    padding-top:10px;
}
.Cards{
    margin:-283px 0 0 350px;
}
.Main{
    padding-top:30px;
    max-width:1700px;
    padding-left:330px;
}
</style>