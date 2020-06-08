<template>
  <div class="search">
    <div class="search-main b-container">
      <div class="search-title">
        <h2>酒店、民宿、度假屋……更多住宿优惠搜不停</h2>
        <span>从舒适的乡村民宿到时髦的都市公寓</span>
      </div>
      <form class="search-form">
        <div class="form-item">
          <input type="search" placeholder="目的地?" />
          <input type="date" />
          <input type="submit" />
        </div>
        <div class="form-item">
          <input type="checkbox" /><span>我要出差</span>
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
    padding-top .2rem
    color #333
    h2
      font-size .24rem
      // line-height .32rem
      font-weight 600
    span
      font-size .14rem
      line-height .2rem
      font-weight 400
  .search-form
    margin-top .3rem
    font-size .24rem
</style>