<template>
  <div id="B-app">
    <BookHeader />
    <div class="B-content">
      <router-view />
    </div>
    <BookFooter />
  </div>
</template>

<script>
import BookHeader from './components/BookHeader/BookHeader'
import BookFooter from './components/BookFooter/BookFooter'

export default {
  components: {
    BookHeader,
    BookFooter
  }
}
</script>

<style lang="stylus">
</style>
