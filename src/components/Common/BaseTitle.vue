<template>
  <div class="base-title">
    <h3>{{ title }}</h3>
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
.base-title
  margin .38rem 0 .2rem 0
  color #333
  font-size .24rem
  font-weight 700
  line-height .32rem
</style>
