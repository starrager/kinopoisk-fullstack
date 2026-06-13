<template>
    <div class="Cards">
        <div class="layout">
            <div>
                <div class="heading">
                    <h1>Фильмы</h1>
                </div>
            </div>

            <div class="orders">
                <p class="categories">Онлайн</p>
                <p class="categories">Лучшие</p>
                <p class="categories">Все</p>
                <p class="order">По порядку</p>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.order{
    padding-left:100px;
}
.orders{
    display:flex;
    gap:30px;
}
.heading{
    padding-bottom:40px;
}
.Cards{
    display:flex;
    gap:20px;
    width:600px;
}
</style>