<template>
  <div class="car-hot-card">
    <img class="car-hot-img" src="../../assets/images/stay01.webp" alt="img" />
    <div class="car-hot-content">
      <div class="city">
        <span>伦敦</span>
        <br />
        <span>75个租车点</span>
      </div>
      <div class="price clearfix">
        <div class="car-icon">
          <i class="booking iconzuche"></i>
        </div>
        <div class="car-type">
          <span>每日HK$ 49起</span>
          <br />
          <span>小型轿车</span>
        </div>
      </div>
      <div class="search">
        <a href="javascript:;">搜索伦敦租车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.car-hot-card
  font-size .16rem
  color #6b6b6b
  width 3.4rem
  height 4.2rem
  border 1px solid #bdbdbd
  box-shadow 2px 2px 2px rgba(0,0,0,.3)
  margin-bottom .3rem
  .car-hot-img
    width 100%
    height 2.3rem
  .car-hot-content
    box-sizing border-box
    padding .2rem
    .city
      span:nth-of-type(1)
        color #000
        font-size .18rem
        font-weight 600
      span:nth-of-type(2)
        display inline-block
        margin-top .1rem
    .price
      padding .3rem 0
      &.clearfix
        *zoom 1
        &:after
          content ''
          display block
          clear both
      .car-icon
        float left
        margin-right .2rem
        i
          font-size .32rem
          width .32rem
          height .32rem
      .car-type
        float left
        line-height .18rem
    .search
      a
        text-decoration none
</style>
