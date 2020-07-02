<template>
  <div class="base-search">
    <div class="search-main b-container">
      <div class="search-title">
        <h2>{{ title }}</h2>
        <span>
          <slot name="info"></slot>
        </span>
      </div>
      <form class="search-form">
        <div class="form-item-select">
          <slot name="form-select"></slot>
        </div>
        <div class="form-item-search">
          <slot name="form-content"></slot>
          <div class="form-item form-submit">
            <input type="submit" value="搜索" />
          </div>
        </div>
        <div class="form-item-checkout">
          <slot name="form-checkout"></slot>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'

.base-search
  height $search-height
  color $second-text-color
  background $b-search-color
  .search-title
    padding-top .4rem
    color #333
    height .6rem
    h2
      font-size .24rem
      font-weight 600
    span
      font-size .14rem
      font-weight 400
      position relative
      top -.6rem
  .search-form
    margin-top .3rem
    font-size .24rem
    .form-item-select
    .form-item-search
      display flex
      width 100%
      height .6rem
      .form-item
        border .04rem solid #febb02
        &:not(:first-child)
          border-left-style none
          border-radius 0
        &:not(:last-child)
          box-sizing border-box
          padding .1rem
        &:first-child
          border-top-left-radius .04rem
          border-bottom-left-radius .04rem
        &:last-child
          border-top-right-radius .04rem
          border-bottom-right-radius .04rem
      .form-submit
        width 1.8rem
        input
          border none
          background #0071c2
          width 100%
          height 100%
          color #fff
          font-size .2rem
    .form-item-checkout
      margin-top .2rem
      font-size .14rem
      input
        margin-left -.01rem
      span
        position: relative;
        top: -.02rem;
</style>
