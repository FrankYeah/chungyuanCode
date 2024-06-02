<template>
  <div 
  class="north">
    <div class="north-bg"
      :style="{
        'backgroundImage' : 'url(' + require('@/assets/img/music/bg1.webp') + ')'
      }"
    ></div>

    <!-- 遊戲開始前 -->

    <div v-if="currentStatus == 'start'" class="north-start">
      <div @click="startCountdown" class="north-start-btn">開始</div>
    </div>

    <!-- 遊戲中 -->
    <div v-if="currentStatus == 'game'" class="north-box">
      <img @click="playSound1" class="north-music north-music1" src="@/assets/img/music/smallruo1.webp" alt="music">
      <div  class="north-text">小鑼</div>

      <img @click="playSound2" class="north-music north-music2" src="@/assets/img/music/sona1.webp" alt="music">
      <div  class="north-text">嗩吶</div>

      <img @click="playSound3" class="north-music north-music2" src="@/assets/img/music/tamdrum1.webp" alt="music">
      <div  class="north-text">堂鼓</div>

      <img @click="playSound4" class="north-music north-music2" src="@/assets/img/music/yehu2.webp" alt="music">
      <div  class="north-text">椰胡</div>

      <audio ref="audioPlayer1" src="smallruo.m4a"></audio>
      <audio ref="audioPlayer2" src="sona.m4a"></audio>
      <audio ref="audioPlayer3" src="tamdrum.m4a"></audio>
      <audio ref="audioPlayer4" src="yehu.m4a"></audio>
      <img class="about-box-link" src="@/assets/img/social/link.png" alt="fb">

      <div class="north-second">game：倒數 {{ countdown }} 秒</div>
    </div>

    <!-- 結束遊戲播放音樂，回到一開始 -->
    
    <div v-if="currentStatus == 'end'" class="north-end">
      <audio ref="audioPlayer4" src="yehu.m4a"></audio>

      <div class="north-second">end：倒數 x 秒</div>
    </div>

  </div>
</template>

<script>


export default {
  layout: 'default',
  components: {

  },
  props: {

  },
  data () {
    return {
      currentStatus: 'start',
      countdown: 30,
      // audioSrc: require('@/assets/plum.mp3')
    }
  },
  async mounted () {

  },
  destroyed () {
    
  },
  computed: {
    
  },
  methods: {
    playSound1() {
      this.$refs.audioPlayer1.play();
    },
    playSound2() {
      this.$refs.audioPlayer2.play();
    },
    playSound3() {
      this.$refs.audioPlayer3.play();
    },
    playSound4() {
      this.$refs.audioPlayer4.play();
    },
    startCountdown() {
      console.log('按鈕已點擊，30秒後將觸發下一個函數');
      this.countdown = 30;
      this.currentStatus = 'game'

      if (this.interval) {
        clearInterval(this.interval);
      }

      // 更新倒數顯示
      this.interval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.interval);
          this.nextFunction();
        }
      }, 1000); // 每秒更新一次

      // 設定30秒的延遲保險措施
      setTimeout(() => {
        if (this.countdown > 0) {
          clearInterval(this.interval);
          this.nextFunction();
        }
      }, 30000); // 30000 毫秒即 30 秒
    },
    nextFunction() {
      this.currentStatus = 'end'
      console.log('30秒後觸發的函數');
      // 在這裡添加您希望在30秒後執行的操作
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.north {
  min-height: 100vh;
  position: relative;

  &-bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    z-index: -1;
    opacity: 0.3;
  }

  &-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &-music {
    width: 200px;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
    }
  }
  
  &-music1 {

    &:hover {
      transition: 0.3s;
    }
  }
  
  &-music2 {

    &:hover {
      transition: 0.3s;
    }
  }
  
  &-music3 {

    &:hover {

      transition: 0.3s;
    }
  }
  
  &-music4 {

    &:hover {
      transition: 0.3s;
    }
  }

  &-text {
    color: black;
  }

  &-start-btn {
    width: 200px;
    height: 100px;
    font-size: 30px;
    color: white;
    text-align: center;
    line-height: 100px;
    background-color: blue;
  }

}

@media( max-width: 1023px ){



}

</style>
