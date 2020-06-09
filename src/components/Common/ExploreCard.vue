<template>
  <div class="explore-card b-elleipes">
    <div class="top">
      <div class="title">
        <span>休闲、餐厅、购物，一切等你来！下一站，美国！</span>
      </div>
    </div>
    <div class="down">
      美国
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.explore-card
  position relative
  font-size .14rem
  width 2.1rem
  height 1.8rem
  .top
    height 1.3rem
    background url('../../assets/images/stay01.webp') no-repeat
    background-size 100% 100%
    box-sizing border-box
    padding .15rem .2rem
    color #fff
    .title
      position absolute
      background rgba(0, 0, 0, .3)
      top 0
      left 0
      padding 0 .1rem
      line-height .4rem
      transition all .5s
    &:hover > .title
      background rgba(0, 0, 0, 0)
      transform translateY(.3rem)
  .down
    color #0071c2
    text-align center
    margin-top .05rem
</style>
