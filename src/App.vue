<template>
  <div id="B-app">
    <BookHeader />
    <!-- <div class="wrapper">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div> -->
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
.wrapper div {
	  height: .5rem;
	}
	.box1 {
	  width: 2rem;
	  background-color: coral;
	}
	.box2 {
	  width: 4rem;
	  background-color: skyblue;
	}
	.box3 {
	  width: 6rem;
	  background-color: palegreen;
	}
</style>
