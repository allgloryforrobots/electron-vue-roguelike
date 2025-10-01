<template>
  <div class="map-grid">
    <slot />
  </div>
</template>

<style scoped>
.map-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-width), var(--cell-size));
  grid-template-rows: repeat(var(--grid-height), var(--cell-size));
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  width: calc(var(--grid-width) * var(--cell-size));
  height: calc(var(--grid-height) * var(--cell-size));
}
</style>