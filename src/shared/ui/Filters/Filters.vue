<script setup lang="ts">
  interface Filter {
    id: string;
    label: string;
  }

  defineProps<{
    activeFilter: string;
    filters: Filter[];
  }>()

  const emit = defineEmits<{
    (e: 'filter-change', filter: string): void
  }>()

  const handleFilterClick = (filterId: string) => {
    emit('filter-change', filterId)
  }
</script>

<template>
  <div class="filters">
    <button
      v-for="filter in filters"
      :key="filter.id"
      class="filter-btn"
      :class="{ active: activeFilter === filter.id }"
      @click="handleFilterClick(filter.id)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
  .filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }

  .filter-btn {
    background-color: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 8px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
  }

  .filter-btn:hover, .filter-btn.active {
    background-color: var(--hover-color);
    color: var(--accent-color-2);
  }

  .filter-btn::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: var(--accent-color-1);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .filter-btn:hover::after, .filter-btn.active::after {
    width: 70%;
  }
</style>