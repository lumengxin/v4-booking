<template>
  <div class="cars">
    <car-search></car-search>

    <div class="cars-content">
      <ul class="cars-icons b-container">
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
      <div class="cars-hot b-container">
        <base-title title="热门租车目的地"></base-title>
        <div class="card-list">
          <car-hot-card></car-hot-card>
          <car-hot-card></car-hot-card>
          <car-hot-card></car-hot-card>
          <car-hot-card></car-hot-card>
          <car-hot-card></car-hot-card>
          <car-hot-card></car-hot-card>
        </div>
      </div>
      <div class="cars-service">
        <div class="service-content b-container">
          <base-title title="全球规模最大的在线租车服务之一"></base-title>
          <p>让我们帮您在出行目的地找到合适的车辆吧！</p>
          <div class="service-list">
            <div class="item">
              <div class="icon">
                <img src="../../assets/images/svg/earth-1681722.svg" alt="" />
              </div>
              <div class="content">
                <span>60,000+个</span>
                <br />
                <span>租车点</span>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="../../assets/images/svg/earth-147591.svg" alt="" />
              </div>
              <div class="content">
                <span>60,000+个</span>
                <br />
                <span>租车点</span>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="../../assets/images/svg/message.svg" alt="" />
              </div>
              <div class="content">
                <span>60,000+个</span>
                <br />
                <span>租车点</span>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="../../assets/images/svg/star-1601162.svg" alt="" />
              </div>
              <div class="content">
                <span>60,000+个</span>
                <br />
                <span>租车点</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cars-problem b-container">
        <div class="problems">
          <base-title title="常见问题及解答"></base-title>
        </div>
        <ul class="details">
          <li>
            <span class="problem">租车有什么要求呢？</span>
            <span class="booking iconjiantou"></span>
          </li>
          <li>
            <span class="problem">租车有什么要求呢？</span>
            <span class="booking iconjiantou"></span>
          </li>
          <li>
            <span class="problem">租车有什么要求呢？</span>
            <span class="booking iconjiantou"></span>
          </li>
          <li>
            <span class="problem">租车有什么要求呢？</span>
            <span class="booking iconjiantou"></span>
          </li>
          <li>
            <span class="problem">租车有什么要求呢？</span>
            <span class="booking iconjiantou"></span>
          </li>
        </ul>
      </div>
      <div class="cars-global b-container">
        <base-title title="全球热门租车目的地"></base-title>
        <div class="card-list">
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
          <next-card :bigCardWidth="2.5"></next-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarSearch from 'components/Search/CarSearch'

export default {
  components: {
    CarSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl'

.cars
  .cars-content
    .cars-icons
      card-flex()
    .cars-hot
      .card-list
        card-flex()
        margin-bottom 0.2rem
    .cars-service
      height 2.8rem
      background-color #fff0e0
      margin-top -0.2rem
      .service-content
        position relative
        top 0.8rem
        font-size 0.16rem
        .service-list
          card-flex()
          .item
            width 25%
            margin-top .4rem
            .icon
              float left
              img
                width .5rem
                height .5rem
            .content
              margin-left .1rem
              font-size .18rem
              line-height .2rem
              font-weight 600
              float left
    .cars-problem
      height 2.84rem
      margin-top .4rem
      card-flex()
      .problems
        background rgb(245, 245, 245)
        width 25%
        .base-title
          margin-left .2rem
      .details
        width 75%
        font-size .2rem
        display flex
        flex-direction column
        justify-content space-around
        box-sizing border-box
        border 1px solid #e6e6e6
        line-height .5rem
        li
          // margin-left .2rem
          &:not(:last-child)
            border-bottom 1px solid #e6e6e6
          .problem
            margin-left .2rem
          .booking
            float right
            margin-right .2rem
    .cars-global
      .card-list
        card-flex()
        margin-bottom 0.2rem
        .next-card
          margin-bottom .4rem
</style>
