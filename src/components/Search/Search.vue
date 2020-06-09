<template>
  <div class="search">
    <div class="search-main b-container">
      <div class="search-title">
        <h2>酒店、民宿、度假屋……更多住宿优惠搜不停</h2>
        <span>从舒适的乡村民宿到时髦的都市公寓</span>
      </div>
      <form class="search-form">
        <div class="form-item-up">
          <div class="form-item form-search">
            <i class="booking iconchuang"></i>
            <input type="search" placeholder="目的地?" />
          </div>
          <div class="form-item form-date">
            <i class="booking iconriqi"></i>
            <div class="date">
              <span>入住</span>
              <span>-</span>
              <span>退房</span>
            </div>
          </div>
          <div class="form-item form-person">
            <i class="booking iconrenyuan"></i>
            <div class="person">
              <span>2位成人</span>
              <span>·</span>
              <span>无儿童</span>
              <span>·</span>
              <span>1间客房</span>
              <i class="booking iconshangxiazhankai_o"></i>
            </div>
          </div>
          <div class="form-item form-submit">
            <input type="submit" value="搜索" />
          </div>
        </div>
        <div class="form-item-down">
          <input type="checkbox" />
          <span>我想找整租的民宿短租或公寓</span>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'

.search
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
    .form-item-up
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
      .form-search
        width 100%
        input
          border none
          background $b-search-color
          width 90%
          height 100%
          max-width 5.4rem
          margin-left .1rem
      .form-date
        width 2.8rem
        .date
          display inline-block
          margin-left .1rem
          font-size .16rem
          span:nth-child(2)
            padding 0 .1rem
      .form-person
        width 4.6rem
        .person
          display inline-block
          margin-left .1rem
          font-size .16rem
          i
            color #0071c2
      .form-submit
        width 1.8rem
        input
          border none
          background #0071c2
          width 100%
          height 100%
          color #fff
          font-size .2rem
    .form-item-down
      margin-top .2rem
      font-size .14rem
      input
        margin-left -.01rem
      span
        position: relative;
        top: -.02rem;
</style>
