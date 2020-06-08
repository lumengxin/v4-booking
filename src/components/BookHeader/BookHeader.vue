<template>
  <div class="B-header">
    <div class="b-top b-container">
      <img class="logo" src="../../assets/images/b-logo.png" alt="booking">
      <div class="user-infos">
        <ul class="list">
          <li>HK$</li>
          <li>中文</li>
          <li>微信</li>
          <li>帮助</li>
          <li>
            <button>上线我的住宿</button>
          </li>
          <li>
            <button>注册</button>
          </li>
          <li>
            <button>登录</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="b-nav b-container">
      <ul class="nav-list">
        <router-link tag="li" to="/stays">
          <span class="booking iconzhusu"></span>
          <span>住宿</span>
        </router-link>
        <router-link tag="li" to="/flights">
          <span class="booking iconjipiao"></span>
          <span>机票</span>
        </router-link>
        <router-link tag="li" to="/cars">
          <span class="booking iconzuche"></span>
          <span>租车</span>
        </router-link>
        <router-link tag="li" to="/attractions">
          <span class="booking iconjingdian"></span>
          <span>景点</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'

.router-link-active
  color $main-text-color

.B-header
  color $main-dark-text-color
  background $b-header-color
  .b-top
    height $top-height
    .logo
      width 1.98rem
      height .25rem
      margin-top .12rem
      float left
    .user-infos
      width 4.6rem
      height 100%
      font-size .14rem
      float right
      .list
        display flex
        height 100%
        align-items center
        justify-content space-around
  .b-nav
    height $nav-height
    .nav-list
      display flex
      justify-content flex-start
      font-size .14rem
      > li
        width .78rem
        height $nav-height
        line-height $nav-height
        .booking
          font-size .24rem
          padding-right .05rem
</style>
