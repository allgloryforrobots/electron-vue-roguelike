<template>
  <i :class="`fa-duotone fa-solid ${icon}`"></i>
</template>

<script>
export default {
  name: 'DuotoneSolidIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
</style>