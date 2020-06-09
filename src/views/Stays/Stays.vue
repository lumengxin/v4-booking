<template>
  <div class="stays">
    <Search />
    <div class="stays-content b-container">
      <div class="stays-ad"></div>
      <div class="stays-stay">
        <base-title title="干净舒适，适合住久一点"></base-title>
        <div class="card-list">
          <score-card></score-card>
          <score-card></score-card>
          <score-card></score-card>
          <score-card></score-card>
        </div>
      </div>
      <div class="stays-type">
        <base-title title="根据住宿类型浏览"></base-title>
        <div class="card-list">
          <type-card></type-card>
          <type-card></type-card>
          <type-card></type-card>
          <type-card></type-card>
          <type-card></type-card>
        </div>
        <div class="card-list">
          <loca-card :bigCardWidth="5.5"></loca-card>
          <loca-card :bigCardWidth="5.5"></loca-card>
        </div>
        <div class="card-list">
          <loca-card></loca-card>
          <loca-card></loca-card>
          <loca-card></loca-card>
          <loca-card></loca-card>
        </div>
      </div>
      <div class="stays-short">
        <base-title title="客人喜爱的民宿短租"></base-title>
        <div class="card-list">
          <score-card></score-card>
          <score-card></score-card>
          <score-card></score-card>
          <score-card></score-card>
        </div>
      </div>
      <div class="stays-next">
        <base-title title="精彩下一站，灵感这里找"></base-title>
        <div class="card-list">
          <next-card></next-card>
          <next-card></next-card>
          <next-card></next-card>
        </div>
        <div class="card-list">
          <next-card :bigCardWidth="5.5"></next-card>
          <next-card :bigCardWidth="5.5"></next-card>
        </div>
      </div>
      <StaysHot />
      <div class="stays-explore">
        <base-title title="探索目的地"></base-title>
        <div class="explore-pages">
          <ul class="pages-list">
            <li class="page" v-for="i in 11" :key="i">
              <span class="pager">{{ i }}</span>
            </li>
          </ul>
          <span class="pages-more">更多目的地</span>
        </div>
        <div class="card-list">
          <explore-card></explore-card>
          <explore-card></explore-card>
          <explore-card></explore-card>
          <explore-card></explore-card>
          <explore-card></explore-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from 'components/Search/Search'
import StaysHot from './StaysHot'

export default {
  components: {
    Search,
    StaysHot
  }
}
</script>

<style lang="stylus" scoped>
.stays-content
  .stays-ad
    width 100%
    height 2.76rem
    margin-top .54rem
    font-size .24rem
    background url('../../assets/images/b-ad.jpg') no-repeat
    background-size 100% 100%
  .stays-stay
    .card-list
      display flex
      justify-content space-between
  .stays-type
    .card-list
      display flex
      justify-content space-between
      margin-top .2rem
  .stays-short
    .card-list
      display flex
      justify-content space-between
  .stays-next
    .card-list
      display flex
      justify-content space-between
      margin-top .2rem
  .stays-explore
    .explore-pages
      color #fff
      font-size .14rem
      // 使用浮动定位，清除浮动影响？
      // float right
      display flex
      justify-content flex-end
      margin-bottom .15rem
      .pages-list
        display inline-block
        .page
          display inline-block
          width .24rem
          height .24rem
          background #838383
          margin-right .1rem
          text-align center
          line-height .24rem
      .pages-more
        color #0071c2
        line-height .24rem
    .card-list
      display flex
      justify-content space-between
</style>
