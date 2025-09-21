<script setup lang="ts">
import { ref, computed } from 'vue';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  showPages?: number;
  showArrows?: boolean;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  currentPage: 1,
  totalPages: 10,
  showPages: 5,
  showArrows: true
});

const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>();

const currentPage = ref(props.currentPage);

const pages = computed(() => {
  const pages = [];
  const half = Math.floor(props.showPages / 2);
  let start = Math.max(1, currentPage.value - half);
  let end = Math.min(props.totalPages, start + props.showPages - 1);

  if (end - start + 1 < props.showPages) {
    start = Math.max(1, end - props.showPages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const goToPage = (page: number) => {
  if (page < 1 || page > props.totalPages || page === currentPage.value) return;
  
  currentPage.value = page;
  emit('page-change', page);
};

const nextPage = () => goToPage(currentPage.value + 1);
const prevPage = () => goToPage(currentPage.value - 1);
</script>

<template>
  <div class="pagination">
    <button 
      v-if="showArrows"
      class="page-btn"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      «
    </button>
    
    <button 
      v-for="page in pages"
      :key="page"
      class="page-btn"
      :class="{ active: page === currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    
    <button 
      v-if="showArrows"
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      »
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 5px;
}

.page-btn {
  background: linear-gradient(to bottom, var(--accent-color-8), var(--border-color));
  color: var(--accent-color-2);
  border: 1px solid var(--accent-color-1);
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  min-width: 40px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
    color: var(--accent-color-7);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.active {
    background: linear-gradient(to bottom, var(--accent-color-1), var(--accent-color-8));
    color: var(--accent-color-7);
    box-shadow: 0 0 8px rgba(212, 163, 115, 0.4);
  }
}
</style>