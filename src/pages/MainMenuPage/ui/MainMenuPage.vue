<script setup lang="ts">
	import { useRouter } from 'vue-router'
	import Header from '@/shared/ui/Header/Header.vue'
	import Button from '@/shared/ui/Button/Button.vue'
	import { ROUTES } from '@/app/router'
	import Container from '@/shared/ui/Container/Container.vue'
	const router = useRouter()

	function newGame() {
		router.push(ROUTES.CHARACTER)
	}

  function continueGame() {
		router.push(ROUTES.GRID)
	}

	const closeApp = () => {
		if (window.electronAPI) {
			window.electronAPI.closeApp();
		} 
	};
</script>

<template>
  <div class="center-block">
    <Container>
      <Header>
        Rise of Underdog: The Chosen One has long been dead
      </Header>

      <Button :on-click="newGame">
        Новая игра
      </Button>

      <Button :on-click="continueGame">
        Продолжить
      </Button>

      <Button :on-click="newGame">
        Настройки
      </Button>

      <Button :on-click="closeApp">
        Выйти
      </Button>
    </Container>
  </div>
</template>

<style scoped lang="scss">
  .center-block {
    margin: 15% auto 25% auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
</style>
