<template>
  <div class="type-card">
    <div class="top">
      <img src="../../assets/images/next03.webp" alt="" />
    </div>
    <div class="down">
      <p class="title">酒店</p>
      <p class="num">18382家酒店</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infos: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.type-card
  .top > img
    width 2.07rem
    height 1.8rem
  .down
    font-size .14rem
    margin-top .2rem
    .title
      font-size .18rem
      font-weight 600
      color black
    .num
      color #6b6b6b
      line-height .24rem
</style>
