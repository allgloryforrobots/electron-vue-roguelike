<template>
  <div class="quest">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p v-if="difficulty">
      <strong>Сложность:</strong> {{ difficulty }}
    </p>
    <p v-if="reward">
      <strong>Награда:</strong> {{ reward }}
    </p>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string;
        description: string;
        difficulty?: string;
        reward?: string;
    }>();
</script>

<style scoped lang="scss">
    .quest {
        background: linear-gradient(to right, rgba(73, 122, 120, 0.15), transparent);
        border-left: 4px solid var(--accent-color-5);
        padding: 20px;
        margin: 20px 0;
        border-radius: 0 4px 4px 0;
        position: relative;
    }

    .quest::before {
        content: "⚔";
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background: var(--accent-color-5);
        color: var(--background-color-medium);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }
</style>