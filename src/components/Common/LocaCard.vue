<template>
  <div class="loca-card" :style="{ width: bigCardWidth + 'rem' }">
    <div class="top">
      <div class="city">
        <span class="title">台北</span>
        <span class="flag">旗子</span>
      </div>
      <div class="num">1232家住宿</div>
    </div>
    <div class="down">
      <span class="desc">均价</span>
      <span class="price">HK$ &nbsp;323</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigCardWidth: {
      type: Number,
      default: 2.6
    }
  }
}
</script>

<style lang="stylus" scoped>
.loca-card
  position relative
  // width 2.6rem
  height 2.7rem
  background url('../../assets/images/stay01.webp') no-repeat
  background-size 100% 100%
  font-size .14rem
  .top
    padding .25rem .2rem
    color #fff
    .city
      .title
        font-size .3rem
        font-weight 600
    .num
      margin-top .15rem
  .down
    position absolute
    right .2rem
    bottom .2rem
    width .72rem
    height .42rem
    background #333
    border-radius .03rem
    color #fff
    .desc
      position absolute
      right .05rem
      top .05rem
    .price
      position absolute
      bottom .02rem
      font-size .14rem
      width 95%
      text-align center
</style>
