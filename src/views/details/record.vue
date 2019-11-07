<template>
  <div class="box">
    <div class="title">
      <span class="fa fa-chevron-left" @click="back" />
      <span>扫码记录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Record',
  data() {
    return {
      list: []
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    getList() {
      // let date = new Date()
      // let random = Math.random() * 200000
    }
  }
}
</script>

<style scoped lang="less">
.title {
  position: relative;
  background: @main-color;
  .font-size(30rem);
  text-align: center;
  color: #fff;
  font-weight: 600;
  .padding(20rem);
  .fa-chevron-left {
    position: absolute;
    .top(22rem);
    .left(20rem);
  }
}
</style>
