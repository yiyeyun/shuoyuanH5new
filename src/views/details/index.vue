<template>
  <div>

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
    <div id="label-1" ref="label1" class="container border-bottom-20">
      <div class="title border-bottom mt20">产业介绍</div>
      <div class="text-justify">
        苍溪是世界红心猕猴桃原产地、全国首批猕猴桃栽培试点县，成功选育了红阳、红华、红美等新品种，成为世界第三代当家品种。苍溪是红心猕猴桃最佳适生区，猕猴桃种植面积38.5万亩，年产鲜果12.6万吨，产值46亿元。果王、华朴等公司研发出的猕猴桃果酱、汁、酒、酵素等6大系30多种产品，销往全国各大主要城市，鲜果远销欧盟、日本、台湾等20多个国家和地区。鲜果和系列加工产品深受广大消费者喜欢。
        <br>
        苍溪红心猕猴桃是中国驰名商标、国家生态原产地保护产品、中国红心猕猴桃第一县、国家现代农业猕猴桃示范区、全国绿色食品标准化原料生产基地、全国安全健康食品供货基地和国家级出口农产品质量安全示范区等。
        <br>
        计划全县实现种植猕猴桃面积50万亩，年产量达50万吨，实现猕猴桃百亿产业融合发展，建成“世界红心猕猴桃之都”。
      </div>
      <div class="flex space-between align-center mt20">
        <div class="flex-1 img-box">
          <img class="img" src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/logo1.jpg">
        </div>
        <div class="flex-1 img-box">
          <img class="img" src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/logo2.jpg">
        </div>
        <div class="flex-1 img-box">
          <img class="img" src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/logo3.jpg">
        </div>
      </div>
    </div>
    <div id="label-2" ref="label2" class="container border-bottom-20">
      <div class="title border-bottom mt20">产品介绍</div>
      <div class="text-justify">
        苍溪红心猕猴桃外型美观，果心呈放射状红色条纹，宛如东升旭日．果实味微酸浓甜，伴有浓浓的馥香，品质上乘，口感极佳，回味悠长。
        <br>
        苍溪红心猕猴桃富含18种人体所需氨基酸、多种矿物质、维生素，维Ｃ含量比柑桔高３—４倍，比苹果高20倍，可溶性固形物、总糖及磷、钙、钾等矿物质也远远高于其他同类品种。苍溪红心猕猴桃有很好的抗癌作用外，还具有美容、医疗保健作用，提高肌体活力，促进新陈代谢，协调肌体功能，增强体质，提高人体免疫力，对心血管、消化道等多种疾病有很好的疗效。
      </div>
      <van-swipe :autoplay="3000" class="product-img-box mt20" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/wj1.png"
            class="product-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/wj2.jpg"
            class="product-img"
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="label-3" ref="label3" class="container border-bottom-20">
      <div class="title border-bottom mt20">资质荣誉</div>
      <van-swipe :autoplay="3000" class="product-img-box mt20" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/p1.jpg"
            class="product-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/p2.jpg"
            class="product-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/p3.jpg"
            class="product-img"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://qms5.sy315.cn/cxmht/custom/trace/siteId_00000/Trace/mob/images/p4.jpg"
            class="product-img"
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="label-4" ref="label4" class="container border-bottom-20">
      <div class="title border-bottom mt20">乡镇信息</div>
      <div class="mt20 flex">
        <div class="name">乡镇</div>
        <div class="value">元坝镇</div>
      </div>
      <div class="mt20 flex">
        <div class="name">投产5亩以上户数</div>
        <div class="value">23(户)</div>
      </div>
      <div class="mt20 flex">
        <div class="name">投产面积</div>
        <div class="value">1693(亩)</div>
      </div>
      <div class="mt20 flex">
        <div class="name">红阳</div>
        <div class="value">1693</div>
      </div>
      <div class="mt20 flex">
        <div class="name">红阳普遍果</div>
        <div class="value">369</div>
      </div>
      <div class="mt20 flex">
        <div class="name">红阳生态果</div>
        <div class="value">215</div>
      </div>
    </div>
    <div id="label-5" ref="label5" class="container border-bottom-20">
      <div class="title border-bottom mt20">产地信息</div>
      <baidu-map
        class="map"
        :zoom="10"
        :center="{lat: '31.8202508029', lng: '106.0714394287'}"
        ak="DD279b2a90afdf0ae7a3796787a0742e"
      />
      <div class="relative">
        <img src="../../assets/imgs/tiajnqi.jpg" class="full-width">
        <div class="time">{{ currentTime }}</div>
      </div>
    </div>
    <div id="label-6" ref="label6" class="container border-bottom-20">
      <div class="title border-bottom mt20">生产档案</div>
      <div class="mt20">休眠期</div>
      <div class="mt20 flex">
        <div class="name">月份或节气</div>
        <div class="value">一月 小寒——大寒</div>
      </div>
      <div class="mt20 flex">
        <div class="name">病虫防治</div>
        <div class="value">树冠全面喷施5波美度石硫合剂，降低病虫害发生基数。</div>
      </div>
      <div class="mt20 flex">
        <div class="name">农艺措施</div>
        <div class="value">幼树整形，成年树修剪,育苗圃整地,嫁接,新建园栽苗。</div>
      </div>
    </div>
    <div id="label-7" ref="label7" class="container border-bottom-20">
      <div class="title border-bottom mt20">宣传视频</div>
      <video class="video" src="http://qms5.sy315.cn/cxmht/custom/cxx.mp4" controls="controls">
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'Index',
  components: {
    BaiduMap
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
    this.getCurrentTime()
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
    toRecord() {
      this.$router.push({
        path: '/record'
      })
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
    },
    onTabClick(e, data) {
      // e.preventDefault()
      this.changeLock = true
      setTimeout(() => {
        this.changeLock = false
      }, 500)
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
      if (scrollTop > label7Height && !this.changeLock) {
        this.activeTabId = this.menuList[6].id
      } else if (scrollTop > label6Height && !this.changeLock) {
        this.activeTabId = this.menuList[5].id
      } else if (scrollTop > label5Height && !this.changeLock) {
        this.activeTabId = this.menuList[4].id
      } else if (scrollTop > label4Height && !this.changeLock) {
        this.activeTabId = this.menuList[3].id
      } else if (scrollTop > label3Height && !this.changeLock) {
        this.activeTabId = this.menuList[2].id
      } else if (scrollTop > label2Height && !this.changeLock) {
        this.activeTabId = this.menuList[1].id
      } else if (scrollTop > label1Height && !this.changeLock) {
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
</style>
