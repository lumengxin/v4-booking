<template>
  <div class="next-card" :style="{ width: bigCardWidth + 'rem' }">
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
  background url('../../assets/images/stay01.webp') no-repeat
  color #fff
  font-size .14rem
  box-sizing border-box
  padding .15rem
  .infos
    position absolute
    bottom 0
    .title
      font-size .2rem
      line-height .28rem
      font-weight 700
    .desc
      line-height .2rem
      font-weight 400
</style>
