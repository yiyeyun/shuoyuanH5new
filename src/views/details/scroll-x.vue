<template>
  <div class="scroll-box">
    <div v-for="item in 40" :key="item" class="item">1</div>
  </div>
</template>

<script>
export default {
  name: 'ScrollX'
}
</script>

<style scoped lang="less">
  .scroll-box{
    white-space: nowrap;
    height: .height(100rem);
    box-sizing: border-box;
  }
  .item{
    display: inline-block;
    text-align: center;
    height: .height(100rem);
    width: .width(120rem);
    margin: .margin(0, 40rem);
  }
</style>
