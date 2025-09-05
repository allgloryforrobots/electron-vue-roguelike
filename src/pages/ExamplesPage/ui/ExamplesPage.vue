<script setup lang="ts">
import Input from '@/shared/ui/Input/Input.vue'
import Button from '@/shared/ui/Button/Button.vue'
import IconButton from '@/shared/ui/IconButton/IconButton.vue'
import Header from '@/shared/ui/Header/Header.vue'
import ListElement from '@/shared/ui/ListElement/ListElement.vue'
import Bar from '@/shared/ui/Bar/Bar.vue'
import Frame from '@/shared/ui/Frame/Frame.vue'
import Tooltip from '@/shared/ui/Tooltip/Tooltip.vue'
</script>


<template>
  <Header>
    Заголовок
  </Header>

  <Frame>
    В древнем лесу, <Tooltip text="Подсказка для слова где тени  были гуще">
      слова
    </Tooltip> где тени  были гуще, а свет редко проникал сквозь листья высоких деревьев, скрывался одинокий замок. Его стены, покрытые мхом и лианами, казались частью самой земли, а на вершине башни едва виднелся старый флаг, развевающийся на ветру. Легенды говорили, что в этом замке обитал последний маг, который когда-то спас королевство от темных сил, но потом исчез, оставив за собой только мифы и тайны
  </Frame>

  <ListElement tooltip="12121212">
    Элемент списка
  </ListElement>

  <Input />
  <Input variant="dark" />

  <Button>
    Кнопка
  </Button>

  <Bar />
  <Bar variant="mana" :percent="50" />

  <IconButton />
</template>

<style scoped lang="scss">

</style>
