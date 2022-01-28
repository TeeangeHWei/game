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

      <div class="box1">

        <!-- <div class="row1"><img src="../assets/huochai.jpeg" alt="huochai">333</div>
        <div class="row1">123</div>
        <div class="row1">123</div> -->
        <div v-for="(i,index) in huocai" :key="index" class="row1" v-show="!indexArr.includes(index)" @click="c(index)"><img class="img" src="@/assets/huichai.jpeg" alt="huochai"></div>
      </div>
      <div class="box2">
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
      </div>
      <div class="box3">
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
        <div class="row1">123</div>
      </div>

    </div>

  </div>

</template>
<script>
export default {

  data () {
    return {
      // firstDisabled: true,
      disabled: false,
      disabledGroup: '',
      ishow: true,
      huocai: [{
        value: 123,
        show: true,
      }],
      indexArr: []
    }
  },
  methods: {
    select () {
      if (this.disabledGroup) {
        this.disabled = true
      }
    },
    c (index) {
      this.indexArr.push(index)
      // this.indexArr.includes
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
  /* display: flex; */
  width: 1160px;
  height: 780px;
  background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
  border-radius: 10px;
  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
  flex-wrap: wrap;
  margin: auto;
}
.row1 {
  flex: 1;
  height: 78px;
  line-height: 78px;
  margin: 91px 0px;
}
.img {
  width: 100px;
  height: 100px;
}

.box1,
.box2,
.box3 {
  display: flex;
}
</style>