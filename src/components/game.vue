<template>
  <div class="buildBackGournd">
    <h1>游戏开始</h1>
    <h3>
      请选择先手:
      <Radio-group v-model="disabledGroup" @on-change="select">
        <Radio label="1号" :disabled="disabled"></Radio>
        <Radio label="2号" :disabled="disabled"></Radio>
      </Radio-group>
    </h3>

    <div class="deck">
      <div class="row1">123</div>
      <div class="row1">123</div>
      <div class="row1">123</div>
    </div>

  </div>

</template>
<script>
export default {

  data () {
    return {
      // firstDisabled: true,
      disabled: false,
      disabledGroup: ''
    }
  },
  methods: {
    select () {
      if (this.disabledGroup) {
        this.disabled = true
      }
    }
  },
}
</script>
<style scoped>
.buildBackGournd {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100%;
  background: #ffffff url("../assets/geometry2.png");
  font-size: 16px;
}
.deck {
  display: flex;
  width: 1160px;
  min-height: 780px;
  background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
  padding: 18px 0px 0px 18px;
  border-radius: 10px;
  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
  flex-wrap: wrap;
  margin: auto;
}
.row1 {
  flex: 1;
  height: 88px;
}
.row2 {
  flex: 1;
  height: 88px;
}
.row3 {
  flex: 1;
  height: 88px;
}
</style>