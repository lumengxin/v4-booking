<template>
  <div class="B-footer">
    <div class="footer-top">
      <div class="contact b-container">
        <div class="tel">
          <div class="tel-hour">
            <p class="tel-logo"></p>
            <h3>24小时客服助您安心出行</h3>
            <p class="order">订单有问题？我们来帮您！</p>
          </div>
          <div class="tel-others">
            <div class="tel-more">
              <p class="tel-center">中文客服热线</p>
              <p class="tel-link">点击了解更多客服帮助</p>
            </div>
            <div class="tel-help">
              <p class="tel-center">常见问题</p>
              <p>
                去
                <span class="tel-link">帮助中心</span>看看
              </p>
            </div>
          </div>
        </div>
        <div class="addr">
          <div class="addr-top">
            <h3>方便又省钱！</h3>
            <p>立即注册，获取优惠好价！</p>
          </div>
          <form>
            <input type="email" placeholder="您的电子邮箱地址" />
            <input type="button" value="订阅!" />
            <br />
            <input type="checkbox" />请同时给我发送Booking.com免费App下载链接
          </form>
        </div>
      </div>
    </div>
    <div class="footer-center">
      <div class="links b-container">
        <div class="links-top">
          <button>上线我的住宿</button>
        </div>
        <div class="links-split"></div>
        <ul class="links-down">
          <li>平板电脑版视图</li>
          <li>手机版视图</li>
          <li>您的帐户</li>
          <li>在线修改订单客</li>
          <li>服帮助中心</li>
          <li>成为分销合作伙伴</li>
          <li>Booking.com商旅服务</li>
          <li>关注Booking.com官方微信号</li>
        </ul>
      </div>
    </div>
    <div class="footer-down b-container">
      <WebNavs />
      <div class="intros">
        <p class="nums">
          不管你是谁，想要住哪种类型的住宿，我们都能满足你的需求。
          我们网站上共有2,948万个房源，
          包括656万家度假屋、公寓和其他独特的住宿， 遍布全球225个国家和地区的
          15万个目的地。Booking.comB.V.总部位于荷兰阿姆斯特丹，由位于
          <span
            class="nums-highlight"
          >全球70个国家和地区的 198个办公室</span>提供支持。
        </p>
        <p class="backstage">登录后台</p>
        <div class="copyright">版权 © 1996–2020 Booking.com™. 版权所有.</div>
        <div class="service">
          <p class="title">
            Booking.com隶属于Booking Holdings
            Inc.，该集团是深受全球用户好评的在线旅行 及周边服务供应商。
          </p>
          <div class="icons">
            <ul class="list clearfix">
              <li>
                <img src="../../assets/images/icons/i14.png" alt />
              </li>
              <li>
                <img src="../../assets/images/icons/i15.png" alt />
              </li>
              <li>
                <img src="../../assets/images/icons/i16.png" alt />
              </li>
              <li>
                <img src="../../assets/images/icons/i17.png" alt />
              </li>
              <li>
                <img src="../../assets/images/icons/i18.png" alt />
              </li>
              <li>
                <img src="../../assets/images/icons/i19.png" alt />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebNavs from './WebNavs'

export default {
  components: {
    WebNavs
  }
}
</script>

<style lang="stylus" scoped>
.B-footer
  font-size 0.14rem
  .footer-top
    height 2.5rem
    box-sizing border-box
    padding 50px 0
    background-color #00224f
    color #fff
    .contact
      .tel
        float left
        width 4.8rem
        background #fff
        color black
        box-sizing border-box
        padding 0.15rem
        .tel-hour
          .tel-logo
            float left
            width 0.5rem
            height 0.5rem
            background url('../../assets/images/icons.png') no-repeat
          h3
            position relative
            left 0.15rem
            font-size 0.24rem
            font-weight bold
            margin-left 0.1rem
          .order
            position relative
            left 0.15rem
            font-size 0.16rem
            line-height 0.3rem
            color #8e8e8e
        .tel-others
          font-size 0.16rem
          display flex
          box-sizing border-box
          padding 0 0.65rem
          justify-content space-between
          .tel-center
            text-align center
            line-height 0.3rem
          .tel-link
            color #0071c2
      .addr
        float right
        .addr-top
          text-align center
          h3
            font-size 0.24rem
            line-height 0.32rem
            font-weight 300
          p
            font-size 0.16rem
            line-height 0.24rem
            color #bdbdbd
        form
          margin-top 0.2rem
          input:nth-of-type(1)
            width 3.5rem
            height 0.5rem
          input:nth-of-type(2)
            margin-left 0.15rem
            width 1.6rem
            height 0.56rem
            background-color #0071c2
          input:nth-of-type(3)
            margin 0.15rem 0.02rem 0 -0.01rem
  .footer-center
    background #003580
    .links-top
      text-align center
      button
        width 1.8rem
        height 0.4rem
        margin 0.2rem 0
        background rgba(12, 12, 12, 0)
        color #fff
    .links-split
      position absolute
      left 0
      right 0
      height 0.01rem
      background #fff
    .links-down
      display flex
      justify-content space-between
      color #fff
      padding 0.2rem 0
      > li
        text-decoration underline
  .footer-down
    .intros
      font-size 0.12rem
      color #333
      .nums
        line-height 1.2
        .nums-highlight
          color #0071c2
      .backstage
        margin 0.5rem 0
        text-align center
        color #0071c2
      .service
        text-align center
        .title
          margin 0.2rem 0
        .icons
          display inline-block
          color red
          .clearfix
            *zoom 1
            &:after
              display block
              content ''
              clear both
            li
              float left
              margin-right 0.3rem
</style>
