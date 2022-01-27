<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/hc.jpeg">
    <h1>{{ msg }}</h1>
    <Button type="success" class="succBtn" @click="go">开始游戏</Button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    go () {
      // console.log(this.$router);
      this.$router.push('game')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.succBtn {
  font-size: 20px;
  width: 150px;
}
</style>
