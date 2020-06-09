<template>
  <div class="next-card" :style="{ width: bigCardWidth + 'rem' }">
    <img src="../../assets/images/stay01.webp" alt="img" />
    <div class="infos">
      <p class="title">情迷美利坚丨美妙自然风光</p>
      <p class="desc">
        如果你不曾到过美国，不曾为其壮丽的大自然感动过，一定要收下这篇旅行者攻略
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigCardWidth: {
      type: Number,
      default: 3.5
    }
  }
}
</script>

<style lang="stylus" scoped>
.next-card
  position relative
  height 3.15rem
  color #fff
  font-size .14rem
  // background url('../../assets/images/stay01.webp') no-repeat
  // box-sizing border-box
  // padding .15rem
  overflow hidden
  img
    width 100%
    height 100%
    transition transform .5s
  &:hover > img
    transform scale(1.1)
  .infos
    position absolute
    bottom 0
    margin .1rem
    .title
      font-size .2rem
      line-height .28rem
      font-weight 700
    .desc
      line-height .2rem
      font-weight 400
</style>
