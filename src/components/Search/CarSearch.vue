<template>
  <div class="car-search">
    <base-search title="不管哪种旅途，都有好车相伴">
      <template v-slot:info>
        比较大型租车公司的优惠车型
      </template>

      <template v-slot:form-select>
        <label> <input name="car" type="radio" />相同地点还车 </label>
        <label> <input name="car" type="radio" />不同地点还车 </label>
      </template>

      <template v-slot:form-content>
        <div class="form-item form-location">
          <i class="booking iconzuche"></i>
          <span>取车地点</span>
        </div>
        <div class="form-item form-get-car">
          <i class="booking iconriqi"></i>
          <span>7月2日星期四, 10:00</span>
        </div>
        <div class="form-item form-return-car">
          <i class="booking iconriqi"></i>
          <span>7月4日星期五, 10:00</span>
        </div>
      </template>

      <template v-slot:form-checkout>
        <input type="checkbox" />
        <span>司机年龄为30岁至65岁</span>
      </template>
    </base-search>
  </div>
</template>

<style lang="stylus" scoped>
.car-search
  height 3.4rem
  .base-search
    height 100%
    .form-item-select
      label
        font-size .18rem
        margin-right .2rem
        margin-top .15rem
        input
          margin-right .1rem
    .form-item-search
      .booking
        font-size .24rem
        margin-right .1rem
      span
        font-size .18rem
      .form-location
        width 50%
      .form-get-car, .form-return-car
        width 2.6rem
    .form-item-checkout
      input
        margin-right .1rem
      span
        font-size .16rem
</style>
