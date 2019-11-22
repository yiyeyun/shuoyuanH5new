<template>
  <ul class="wrapper" ref="wrapper">
    <li v-for="item in 40" :key="item" class="content">1</li>
  </ul>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  name: 'ScrollX',
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BSscroll(this.$refs.wrapper, {
        scrollX: true
      })
    })
  }
}
</script>

<style scoped lang="less"></style>
