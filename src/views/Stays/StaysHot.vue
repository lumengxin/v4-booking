<template>
  <div class="stays-hot">
    <base-title title="热门目的地"></base-title>
    <div class="hot-tabs">
      <ul class="hot-list clearfix">
        <li class="hot-area active">区域</li>
        <li class="hot-city">城市</li>
        <li class="hot-place">周边地标/景点</li>
      </ul>
    </div>
    <div class="hot-navs">
      <div class="navs-col">
        <ul>
          <li>国家/地区</li>
          <li>区域</li>
          <li>城市</li>
          <li>区</li>
          <li>机场</li>
          <li>酒店</li>
          <li>周边地标/景点</li>
        </ul>
      </div>
      <div class="navs-col">
        <ul>
          <li>民宿短租</li>
          <li>公寓</li>
          <li>度假村</li>
          <li>别墅</li>
          <li>青旅</li>
          <li>住宿加早餐旅馆</li>
          <li>旅馆</li>
        </ul>
      </div>
      <div class="navs-col">
        <ul>
          <li>全球独特住宿</li>
          <li>所有目的地</li>
          <li>客人点评</li>
          <li>游记攻略</li>
        </ul>
      </div>
       <div class="navs-col">
        <ul>
          <li>公寓</li>
          <li>度假村</li>
          <li>别墅</li>
          <li>青旅</li>
          <li>旅馆</li>
        </ul>
      </div>
      <div class="navs-col">
        <ul>
          <li>全球独特住宿</li>
          <li>所有目的地</li>
          <li>客人点评</li>
          <li>游记攻略</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.stays-hot
  font-size .14rem
  color #737373
  .hot-tabs
    border-bottom 1px solid #0071c2
    .clearfix
      *zoom 1
      &:after
        display block
        content '' 
        clear both
      li
        float left
        padding .1rem .15rem
        &.active
          color #fff
          background #0071c2
  .hot-navs
    display flex
    justify-content space-between
    .navs-col
      margin-top .2rem
      width 20%
</style>