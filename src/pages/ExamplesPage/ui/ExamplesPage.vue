<script setup lang="ts">
import InputComponent from '@/shared/ui/InputComponent/InputComponent.vue'
import ButtonElement from '@/shared/ui/ButtonElement/ButtonElement.vue'
import IconButton from '@/shared/ui/IconButton/IconButton.vue'
import HeaderComponent from '@/shared/ui/HeaderComponent/HeaderComponent.vue'
import ListElement from '@/shared/ui/ListElement/ListElement.vue'
import Bar from '@/shared/ui/Bar/Bar.vue'
import FrameComponent from '@/shared/ui/FrameComponent/FrameComponent.vue'
import Tooltip from '@/shared/ui/Tooltip/Tooltip.vue'
</script>


<template>
  <HeaderComponent>
    Заголовок
  </HeaderComponent>

  <FrameComponent>
    В древнем лесу, <Tooltip text="Подсказка для слова где тени  были гуще">слова</Tooltip> где тени  были гуще, а свет редко проникал сквозь листья высоких деревьев, скрывался одинокий замок. Его стены, покрытые мхом и лианами, казались частью самой земли, а на вершине башни едва виднелся старый флаг, развевающийся на ветру. Легенды говорили, что в этом замке обитал последний маг, который когда-то спас королевство от темных сил, но потом исчез, оставив за собой только мифы и тайны
  </FrameComponent>

  <ListElement tooltip="12121212">
    Элемент списка
  </ListElement>

  <InputComponent />
  <InputComponent variant="dark" />

  <ButtonElement>
    Кнопка
  </ButtonElement>

  <Bar />
  <Bar variant="mana" :percent="50" />

  <IconButton/>
</template>

<style scoped lang="scss">

</style>
