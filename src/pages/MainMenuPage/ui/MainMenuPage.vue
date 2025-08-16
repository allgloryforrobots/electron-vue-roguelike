<script setup lang="ts">
import { useRouter } from 'vue-router'
import HeaderComponent from '@/shared/ui/HeaderComponent/HeaderComponent.vue'
import FrameComponent from '@/shared/ui/FrameComponent/FrameComponent.vue'
import ButtonElement from '@/shared/ui/ButtonElement/ButtonElement.vue'
import { ROUTES } from '@/app/router'
import Container from '@/shared/ui/Container/ui/Container.vue'
const router = useRouter()

function handleButtonClick() {
  router.push(ROUTES.EXAMPLES)
}
</script>

<template>
  <div class="center-block">
    <Container :gap="100">
       <HeaderComponent>
        Rise of Underdog: The Chosen One has long been dead
      </HeaderComponent>

      <ButtonElement :onClick="handleButtonClick">
        Новая игра
      </ButtonElement>
    </Container>
   
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
