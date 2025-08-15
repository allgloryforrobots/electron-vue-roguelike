<script setup lang="ts">
import { useRouter } from 'vue-router'
import HeaderComponent from '@/shared/ui/HeaderComponent/HeaderComponent.vue'
import FrameComponent from '@/shared/ui/FrameComponent/FrameComponent.vue'
import ButtonElement from '@/shared/ui/ButtonElement/ButtonElement.vue'
import { ROUTES } from '@/app/router'
const router = useRouter()

function handleButtonClick() {
  router.push(ROUTES.EXAMPLES)
}
</script>

<template>
  <div class="center-block">
    <HeaderComponent>
      Добро пожаловать в мир Иффры
    </HeaderComponent>

    <FrameComponent>
      Твой путь будет тернистым. Смерть окончательна, а решения - бесповоротны. Мир не прощает ошибок, а за каждым поворотом таиться опасность.
      Тебя никто не будет вести за руку к победе, а ее цена будет огромной.
      Тебе придется много думать и сталкиваться с непреодолимыми трудностями. Все, как в жизни.
    </FrameComponent>

    <ButtonElement :onClick="handleButtonClick">
      Принять вызов
    </ButtonElement>
  </div>

</template>

<style scoped lang="scss">
  .center-block {
    margin: 100px auto 0 auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
</style>
