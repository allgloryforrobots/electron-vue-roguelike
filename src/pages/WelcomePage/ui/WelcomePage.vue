<script setup lang="ts">
import { useRouter } from 'vue-router'
import Header from '@/shared/ui/Header/Header.vue'
import Frame from '@/shared/ui/Frame/Frame.vue'
import Button from '@/shared/ui/Button/Button.vue'
import { ROUTES } from '@/app/router'
const router = useRouter()

function handleButtonClick() {
  router.push(ROUTES.EXAMPLES)
}
</script>

<template>
  <div class="center-block">
    <Header>
      Добро пожаловать в мир Иффры
    </Header>

    <Frame>
      Твой путь будет тернистым. Смерть окончательна, а решения - бесповоротны. Мир не прощает ошибок, а за каждым поворотом таиться опасность.
      Тебя никто не будет вести за руку к победе, а ее цена будет огромной.
      Тебе придется много думать и сталкиваться с непреодолимыми трудностями. Все, как в жизни.
    </Frame>

    <Button :onClick="handleButtonClick">
      Принять вызов
    </Button>
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
