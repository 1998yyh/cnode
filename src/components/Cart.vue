<template>
  <div class="cart">
    <h1>这是购物车</h1>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/sass.scss';
h1{
  margin-top:rem(100px);
}
</style>
