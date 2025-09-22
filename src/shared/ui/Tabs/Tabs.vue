<template>
  <div class="tabs">
    <div
      v-for="tab in tabs"
      :key="tab"
      :class="['tab', { active: modelValue === tab }]"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<!-- <DDTabs :tabs="tabs" v-model="activeTab" />
<p>Содержимое активной вкладки: {{ activeTab }}</p>
const activeTab = ref('Вкладка 1')
const tabs = ['Вкладка 1', 'Вкладка 2', 'Вкладка 3'] -->

<script setup lang="ts">
    defineProps<{
        tabs: string[]
        modelValue?: string
    }>()

    defineEmits<{
        (e: 'update:modelValue', value: string): void
    }>()
</script>

<style scoped>
    .tabs {
        display: flex;
        border-bottom: 1px solid var(--border-color);
    }

    .tab {
        padding: 10px 20px;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
        margin-right: 5px;
        background-color: transparent;
        color: var(--text-color);
        transition: all 0.3s ease;
    }

    .tab.active {
        background-color: var(--background-color-medium);
        border-color: var(--border-color);
        border-radius: 4px 4px 0 0;
        color: var(--accent-color-2);
        position: relative;
    }

    .tab.active::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 1px;
        background-color: var(--background-color-medium);
    }
</style>