<template>
  <div class="air-search">
    <base-search title="同时搜索数百个机票选项。">
      <template v-slot:form-select>
        <ul class="select-list">
          <li>往返<i class="booking iconjiantou"></i></li>
          <li>1位成人<i class="booking iconjiantou"></i></li>
          <li>经济舱<i class="booking iconjiantou"></i></li>
        </ul>
      </template>

      <template v-slot:form-content>
        <div class="form-item form-begin">
          <i class="booking iconjipiao"></i>
          <span>香港</span>
        </div>
        <div class="form-item form-begin-end">
          <i class="booking iconziyuanldpi"></i>
        </div>
        <div class="form-item form-end">
          <i class="booking iconjipiao"></i>
          <span>目的地</span>
        </div>
        <div class="form-item form-leave-return">
          <div class="form-leave">
            <i class="booking iconriqi"></i>
            <span>出发</span>
            <i class="booking iconshangxiazhankai_o"></i>
          </div>
          <div class="form-split">|</div>
          <div class="form-return">
            <i class="booking iconriqi"></i>
            <span>返程</span>
            <i class="booking iconshangxiazhankai_o"></i>
          </div>
        </div>
      </template>
    </base-search>
  </div>
</template>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'
@import '~stylus/mixin.styl'

.base-search
  padding 2rem 0 5rem
  .booking
    color black
    font-size .24rem
    font-weight bold
  .select-list
    card-flex()
    width 25%
    font-size .16rem
    li
      margin-top .2rem
  .form-begin
    width 2rem
    span
      font-size .18rem
      margin-left .05rem
  .form-begin-end
    width .8rem
    position relative
    i
      position absolute
      font-size .32rem
      width .32rem
      height .32rem
      left 0
      top 0
      right 0
      bottom 0
      margin auto
  .form-end
    width 2rem
    span
      font-size .18rem
      margin-left .05rem
  .form-leave-return
    display flex
    width 60%
    .form-leave, .form-return
      width 50%
      span
        font-size .18rem
        margin-left .05rem
      .iconshangxiazhankai_o
        float right
    .form-split
      color black
      padding 0 .1rem
</style>
