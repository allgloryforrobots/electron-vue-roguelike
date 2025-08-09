<template>
    <div class="grid dark-noise">
      <div class="image-block">
        <img src="../../shared/assets/hero.png" alt="Описание картинки">
      </div>
    </div>
</template>

<script setup>


</script>

<style>
#app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.grid {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.dark-noise {
   background-color: #2c2416;
  background-image: 
    /* Трещины (более крупный шум) */
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='cracksFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -5 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cracksFilter)' opacity='0.05'/%3E%3C/svg%3E"),
    /* Основной шум */
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
  
  background-size: 
    200px 200px, /* Трещины */
    100px 100px; /* Шум */
  
  background-attachment: fixed;
  background-repeat: repeat;
}
.image-block {
  width: 75px; 
  height: auto; 
}

.image-block img {
  width: 100%; /* Картинка занимает всю ширину блока */
  height: auto; /* Сохраняет пропорции */
  display: block; /* Убирает лишние отступы снизу */
}
</style>