<template>
  <div class="score-card">
    <div class="top">
      <img src="../../assets/images/next01.webp" alt="img" />
    </div>
    <div class="down">
      <div class="title">
        Page148 Boutique Hotel Tsim Sha Tsui
      </div>
      <div class="loaction">香港特别行政区</div>
      <div class="price">$HK &nbsp;345起</div>
      <div class="infos">
        <span class="score">9.1</span>
        <span class="comment">好极了</span>
        <span class="num">2018条点评</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.score-card
  font-size .14rem
  .top > img
    width: 2.6rem
    height 2.4rem
  .down
    line-height .24rem
    .loaction
      color #6b6b6b
    .price
      color black
      font-weight 600
      line-height .35rem
    .infos
      .score
        padding .05rem
        color #fff
        background #003580
        border-radius: .06rem .06rem .06rem 0
      .comment
        padding 0 .05rem
        color #003580
      .num
        color #6b6b6b
</style>
