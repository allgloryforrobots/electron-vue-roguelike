<script setup lang="ts">
import ListElement from '@/shared/ui/ListElement/ListElement.vue'
</script>

<template>
  <nav class="navbar">
    <ListElement>
      <i class="fa-solid fa-gear"></i>
      Меню
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-bookmark"></i>
      Задания
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-sack-xmark"></i>
      Инвентарь
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-book"></i>
      Кодекс
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-user"></i>
      Персонажи
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-compass"></i>
      Карта
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-house"></i>
      Поселение
    </ListElement>
    <ListElement>
      <i class="fa-solid fa-star"></i>
      Репутация
    </ListElement>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
  width: 900px;
  height: var(--navbar-height);
  align-items: center;
}
</style>
