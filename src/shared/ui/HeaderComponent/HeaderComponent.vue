<script setup lang="ts">
import { useSlots, ref, onMounted } from 'vue';
import { translateToKeyboard } from '@/shared/utils/keyboardTranslator/keyboardTranslator';

const slots = useSlots();
const slotContent = ref('');

onMounted(() => {
  if (slots.default) {
    // Извлекаем содержимое слота как строку
    const content = slots.default({})[0]?.children;
    if (typeof content === 'string') {
      slotContent.value = content;
    }
  }
});

</script>

<template>
  <div class="header">
    <slot/>

    <div class="ancient-language">
      {{ translateToKeyboard(slotContent) }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$glow-color: #8C6D49;
.header {
  font-family: Colus , serif;
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 400;
  position: relative;
  width: fit-content;
  margin: 20px;
  text-align: center;
  max-width: 700px;
  color: var(--accent-color-8);
  text-shadow: 0 0 10px rgba($glow-color, 0.4),
  0 0 20px rgba($glow-color, 0.2),
  0 0 30px rgba($glow-color, 0.1);

  &::before,
  &::after {
    font-family: NotoSerif, serif;
    content: '⬦';
    position: absolute;
    font-size: 15px;
    color: var(--accent-color-8);
    top: 50%;
    transform: translateY(-12px);
  }

  &::before {
    left: -30px;
  }

  &::after {
    right: -30px;
  }

  .ancient-language {
    position: absolute;
    bottom: -20px;
    color: var(--accent-color-8);
    text-shadow: none;
    font-size: 14px;
    letter-spacing: 7px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Skyhook, serif;
    width: 100%;
  }
}
</style>
