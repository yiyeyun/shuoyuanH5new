<template>
  <div>
    <!--<scroll />-->
    <div ref="swipe">
      <van-swipe :autoplay="3000" class="swipe-box" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/cxx.jpg"
            class="swipe-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/cxx2.jpg"
            class="swipe-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/cxx3.jpg"
            class="swipe-img"
          >
        </van-swipe-item>
      </van-swipe>
    </div>

    <div ref="info" class="flex info-box align-center border-bottom-20">
      <div class="flex-1 font-size-26 font-weight-600">
        <div class="text-white">您查询的是: 苍溪县猕猴桃产业发展局监制, 元坝镇生产的: 红心猕猴桃</div>
        <div class="text-warning mt10">已扫码56次, 谨防假冒</div>
      </div>
      <!--<van-button type="primary" class="record-button" size="small" @click="toRecord">扫码记录</van-button>-->
    </div>

    <van-sticky>
      <div class="scroll-box">
        <ul class="box">
          <li
            v-for="item in menuList"
            :key="item.id"
            class="scroll-item"
          >
            <div class="fa" :class="item.icon" />
            <div>{{ item.text }}</div>
          </li>
        </ul>
      </div>
    </van-sticky>
    <div class="t1 t" />
    <div class="t2 t" />
    <div class="t3 t" />
    <div class="t4 t" />
    <div class="t5 t" />
    <div class="t6 t" />
    <div class="t7 t" />
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import {
  getInfo
} from '../../api/login'
import {
  getQueryVariable
} from '../../utils/utils'
import {
  LiftEffect
} from '../../utils/utils'
import scroll from './scroll-x'
export default {
  name: 'Index',
  components: {
    // BaiduMap,
    scroll
  },
  data() {
    return {
      changeLock: false,
      currentTime: '',
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

  mounted() {
    this.getCurrentTime()
    this.$nextTick(() => {
      LiftEffect({
        'control1': '.scroll-box', // 侧栏电梯的容器
        'control2': '.box', // 需要遍历的电梯的父元素
        'target': ['.t1', '.t2', '.t3', '.t4', '.t5', '.t6'], // 监听的内容，注意一定要从小到大输入
        'current': 'active-item'
      })
    })
  },
  destroyed() {
    window.removeEventListener('scroll')
  },
  methods: {
    async getDetail() {
      try {
        const id = getQueryVariable('id')
        const data = await getInfo(id)
      } catch (e) {
        console.log(e)
      }
    },
    getCurrentTime() {
      const date = new Date()
      const year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let week = date.getDay()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      switch (week) {
        case 1: week = '一'; break
        case 2: week = '二'; break
        case 3: week = '三'; break
        case 4: week = '四'; break
        case 5: week = '五'; break
        case 6: week = '六'; break
        case 0: week = '日'; break
      }
      this.currentTime = `四川 苍溪县 ${year}年${month}月${day}日 星期${week}`
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
  .product-img{
    width: 100%;
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
    .font-size(26rem);
    .padding(20rem);
    color: #666;
  }
  #label-1 .img{
    width: 100%;
  }
  .title{
    .font-size(30rem);
    font-weight: 600;
    .padding(15rem, 0);
  }
  .img-box{
    .padding-right(30rem);
    &:last-child{
      .padding-right(0);
    }
  }
  .name{
    .width(220rem);
    text-align: right;
    .margin-right(20rem);
  }
  .value{
    font-weight: 600;
  }
  .video{
    width: 100%;
  }
  .map{
    .height(400rem);
  }
  .time{
    position: absolute;
    .font-size(28rem);
    color: #fff;
    .top(20rem);
    .left(20rem);
  }
  .t{
    height: 400px;
  }
  .t:nth-child(odd){
    background: red;
  }
  .t:nth-child(even){
    background: blue;
  }
</style>
