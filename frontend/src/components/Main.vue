<template>
    <div class="mini-header">
        <div class="upper">
            <div class="up">
                <p>Все списки ></p>
            </div>

            <div class="five-links">
                <p>Топ 250 фильмов</p>
                <p>Топ 250 сериалов</p>
                <p>Индекс сериалов</p>
                <p>Онлайн-кинотеатр</p>
                <p>Навигатор</p>
            </div>
        </div>
    </div>

    <div class="cont">
        <div class="sidebar">
            <div class="text">
                <p>Фильмы</p>
                <p>Сериалы</p>
                <p>С высоким рейтингом</p>
                <p>Российские</p>
                <p>Зарубежные</p>
                <p>Вышедшие</p>
                <p>Скрыть просмотренные</p>
                <p>Загрузить на смартфоне</p>
            </div>
        </div>
    </div>

    <div class="order">
        <div class="orders">
            <p>Страны</p>
            <p>Жанры</p>
            <p>Годы</p>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.text{
    display:flex;
    flex-direction:column;
    gap:5px;
}
.cont{
    display:flex;
    margin-top:60px;
    gap:20px;
    width:250px;
}
.sidebar{
    width:200px;
}
.orders{
    display:flex;
    flex-direction:column;
    gap:5px;
}
.order{
    padding-top:10px;
    width:250px;
}
.mini-header{
    display:flex;
}
.upper{
    display:flex;
}
.up{
    display:flex;
    padding-right:200px;
}
.five-links{
    display:flex;
    gap:100px;
    
}
</style>