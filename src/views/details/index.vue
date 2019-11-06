<template>
  <div>

    <div ref="swipe">
      <van-swipe :autoplay="3000" class="swipe-box" indicator-color="white">
        <van-swipe-item v-for="item in 4" :key="item">
          <img
            src="http://img.meipingmi.com.cn/upload/2019-10-31/1572500658469YpsO.jpg?x-oss-process=image/resize,h_500/format,jpg/interlace,1/quality,Q_80"
            class="swipe-img"
          >
        </van-swipe-item>
      </van-swipe>
    </div>

    <div ref="info" class="flex info-box align-center border-bottom-20">
      <div class="flex-1 font-size-26 font-weight-600 pr20">
        <div class="text-white">您查询的是: 苍溪县猕猴桃产业发展局监制, 元坝镇生产的: 红心猕猴桃</div>
        <div class="text-warning mt10">已扫码56次, 谨防假冒</div>
      </div>
      <van-button type="primary" class="record-button" size="small">扫码记录</van-button>
    </div>

    <van-sticky>
      <div ref="menu" class="scroll-box">
        <a
          v-for="item in menuList"
          :key="item.id"
          class="scroll-item"
          :class="activeTabId === item.id ? 'active-item': ''"
          :href="'#label-' + item.id"
          @click="onTabClick($event, item)"
        >
          <div class="fa" :class="item.icon" />
          <div>{{ item.text }}</div>
        </a>
      </div>
    </van-sticky>
    <div id="label-1" ref="label1" class="container">1</div>
    <div id="label-2" ref="label2" class="container">2</div>
    <div id="label-3" ref="label3" class="container">3</div>
    <div id="label-4" ref="label4" class="container">4</div>
    <div id="label-5" ref="label5" class="container">5</div>
    <div id="label-6" ref="label6" class="container">6</div>
    <div id="label-7" ref="label7" class="container">7</div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      menuList: [
        {
          id: 1,
          text: '产业介绍',
          icon: 'fa-paper-plane'
        },
        {
          id: 2,
          text: '产品介绍',
          icon: 'fa-file-text'
        },
        {
          id: 3,
          text: '资质荣誉',
          icon: 'fa-map'
        },
        {
          id: 4,
          text: '乡镇信息',
          icon: 'fa-tasks'
        },
        {
          id: 5,
          text: '产地信息',
          icon: 'fa-vcard'
        },
        {
          id: 6,
          text: '生产档案',
          icon: 'fa-file-text'
        },
        {
          id: 7,
          text: '宣传视频',
          icon: 'fa-video-camera'
        }
      ],
      activeTabId: 1
    }
  },
  // watch: {
  //   activeTabId(data) {
  //     console.log(777777777777, data)
  //     this.$nextTick(() => {
  //       this.$refs.menu.scrollBy(300, 0)
  //     })
  //   }
  // },
  mounted() {
    window.addEventListener('scroll', this.onPageScroll)
    // let num = 10
    // setInterval(() => {
    //   this.$refs.menu.scrollLeft = num
    //   num++
    // }, 100)
  },
  destroyed() {
    window.removeEventListener('scroll')
  },
  methods: {
    onTabClick(e, data) {
      console.log(e, data)
      const width = e.target.clientWidth
      console.log('===================1', e.target.clientWidth, width * (data.id - 1))
      // this.$refs.menu.scrollTo(width * (data.id - 1), 0)
      // this.$refs.menu.scrollLeft = width * (data.id - 1)
      this.activeTabId = data.id
    },
    onPageScroll() {
      const baseHeight = this.$refs.swipe.clientHeight + this.$refs.info.clientHeight + this.$refs.menu.clientHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // const label1Height = baseHeight + this.$refs.label1.clientHeight
      // const label2Height = label1Height + this.$refs.label2.clientHeight
      // const label3Height = label2Height + this.$refs.label3.clientHeight
      // const label4Height = label3Height + this.$refs.label4.clientHeight
      // const label5Height = label4Height + this.$refs.label5.clientHeight
      // const label6Height = label5Height + this.$refs.label6.clientHeight
      // const label7Height = label6Height + this.$refs.label7.clientHeight
      const label1Height = baseHeight
      const label2Height = label1Height + this.$refs.label1.clientHeight
      const label3Height = label2Height + this.$refs.label2.clientHeight
      const label4Height = label3Height + this.$refs.label3.clientHeight
      const label5Height = label4Height + this.$refs.label4.clientHeight
      const label6Height = label5Height + this.$refs.label5.clientHeight
      const label7Height = label6Height + this.$refs.label6.clientHeight
      console.log(label1Height, label2Height, label3Height, label4Height, label5Height, label6Height, label7Height)
      if (scrollTop > label7Height) {
        this.activeTabId = this.menuList[6].id
      } else if (scrollTop > label6Height) {
        this.activeTabId = this.menuList[5].id
      } else if (scrollTop > label5Height) {
        this.activeTabId = this.menuList[4].id
      } else if (scrollTop > label4Height) {
        this.activeTabId = this.menuList[3].id
      } else if (scrollTop > label3Height) {
        this.activeTabId = this.menuList[2].id
      } else if (scrollTop > label2Height) {
        this.activeTabId = this.menuList[1].id
      } else if (scrollTop > label1Height) {
        this.activeTabId = this.menuList[0].id
      }
      // this.$nextTick(() => {
      //   const target = document.getElementsByClassName('active-item')[0]
      //   console.log('===================', target)
      //   const left = target.offsetLeft
      //   console.log('=====================', left)
      //   this.$refs.menu.scrollBy(left, 0)
      // })
    }
  }
}
</script>

<style scoped lang="less">
  .swipe-img{
    width: 100%;
    .height(450rem);
  }
  .swipe-box{
    .height(450rem);
  }
  .info-box{
    background: #000;
    .padding(20rem);
  }
  /deep/ .record-button{
    background: @main-color;
    // .font-size(24rem);
  }
  .scroll-box{
    white-space: nowrap;
    height: .height(100rem);
    width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    background: #fff;
  }
  .scroll-item{
    display: inline-block;
    text-align: center;
    .font-size(26rem);
    .height(120rem);
    .width(160rem);
    .padding(20rem, 0);
    box-sizing: border-box;
    color: @color-6;
  }
  .active-item{
    background: @main-color;
    color: #fff;
  }
  .container{
    .height(700rem);
    &:nth-child(odd){
      background: #fffbe6;
    }
    &:nth-child(even){
      background: #b0ccff;
    }
  }
</style>
