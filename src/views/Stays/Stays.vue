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
      <div class="stays-hot">
        <base-title title="热门目的地"></base-title>
      </div>
      <div class="stays-explore">
        <base-title title="探索目的地"></base-title>
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

export default {
  components: {
    Search
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
    .card-list
      display flex
      justify-content space-between
      // margin-top .2rem
</style>
