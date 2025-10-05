<template>
  <MapContainer>
    <template v-for="(row, y) in map" :key="y">
      <GridCell
        v-for="(cell, x) in row"
        :key="`${x}-${y}`"
        :x="x"
        :y="y"
        class="test"
      />
    </template>
  </MapContainer>
</template>

<script lang="ts" setup>
import GridCell from '@/shared/ui/GridCell/GridCell.vue';
import MapContainer from '@/shared/ui/MapContainer/MapContainer.vue';
import { MapType } from '@/entities/Map';


defineProps<{
  map: MapType;
}>();


</script>

<style scoped>
.test {
  background-color: red;
}
</style>