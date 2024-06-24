<template>
  <div 
  class="north">
    <div class="north-bg"
      :style="{
        'backgroundImage' : 'url(' + require('@/assets/img/music/bg2.webp') + ')'
      }"
    ></div>

    <!-- 遊戲開始前 -->

    <div v-if="currentStatus == 'start'" class="north-start">
      <div class="north-des-text">
        進入網站後，可以點擊樂器聽不同北管樂器的聲音，自行演奏樂曲。演奏 30 秒後，會播放一段傳統北管音樂。請點選「開始演奏」，進入北管樂曲的世界。
      </div>
      <div @click="inialPlay" class="north-start-btn">背景音樂</div>
      <div @click="startCard" class="north-start-btn">開始演奏</div>

      <audio ref="fullMusic" loop src="full-music.mp3"></audio>
    </div>

    <!-- 圖 + 卡 -->

    <div v-if="currentStatus == 'card'" class="north-card">
    
      <div v-if="currentCard == 1" class="north-card-box">
        <img class="north-card-img" src="@/assets/img/music/ns.png" alt="music">
        <div class="north-card-row">
          <div class="north-card-desc">北管與南管音樂，是台灣傳統音樂。</div>
          <div @click="currentCard = 2" class="north-card-btn">下一頁</div>
        </div>
      </div>

      <div v-if="currentCard == 2" class="north-card-box">
        <img class="north-card-img" src="@/assets/img/music/group-music.png" alt="music">
        <div class="north-card-row">
          <div class="north-card-desc">北管廣泛流傳於台灣民間社會，台灣北管音樂有許多派別，其中最大的派別為福祿派及西皮派。</div>
          <div @click="currentCard = 3" class="north-card-btn">下一頁</div>
        </div>
      </div>

      <div v-if="currentCard == 3" class="north-card-box">
        <img class="north-card-img" src="@/assets/img/music/keelung-group.png" alt="music">
        <div class="north-card-row">
          <div class="north-card-desc">例如基隆聚樂社為北管的福祿派。</div>
          <div @click="currentCard = 4" class="north-card-btn">下一頁</div>
        </div>
      </div>

      <div v-if="currentCard == 4" class="north-card-box">
        <img class="north-card-img" src="@/assets/img/music/instrument.png" alt="music">
        <div class="north-card-row">
          <div class="north-card-desc">使用的樂器包含嗩吶、單皮鼓、通鼓、大鑼、小鑼、鐃鈸、椰胡等。</div>
          <div @click="startCountdown" class="north-card-btn">開始遊戲</div>
        </div>
      </div>

      <audio ref="fullMusic2" loop src="full-music.mp3"></audio>
    </div>

    <!-- 遊戲中 -->
    <div v-if="currentStatus == 'game'" class="north-box">
      <!-- 點點看，這些北管樂器是什麼聲音呢？
      點選畫面上的北管樂器，聽聽它們的聲音，也可以自行演奏樂曲喔！ -->
      <div class="north-inner">
        <div  class="north-text">小鑼</div>
        <img @click="playRuo1" class="north-music north-music1" src="@/assets/img/music/smallruo.png" alt="music">
        <img @click="playRuo2" class="north-music north-music1" src="@/assets/img/music/smallruo1.png" alt="music">
      </div>

      <div class="north-inner">
        <div class="north-text">嗩吶</div>
        <img @click="playSona1" class="north-music north-music-big north-music2" src="@/assets/img/music/sona.png" alt="music">
        <img @click="playSona2" class="north-music north-music2" src="@/assets/img/music/sona1.png" alt="music">
      </div>
      
      <div class="north-inner">
        <div  class="north-text">堂鼓</div>
        <img @click="playDrum1" class="north-music north-music3" src="@/assets/img/music/tamdrum.png" alt="music">
        <img @click="playDrum2" class="north-music north-music3" src="@/assets/img/music/tamdrum1.png" alt="music">
      </div>

      <div class="north-inner">
        <div  class="north-text">椰胡</div>
        <img @click="playYehu1" class="north-music north-music-small north-music4" src="@/assets/img/music/yehu.png" alt="music">
        <img @click="playYehu2" class="north-music north-music4" src="@/assets/img/music/yehu1.png" alt="music">
      </div>

      <audio ref="audioRuo1" src="smallruo1.m4a"></audio>
      <audio ref="audioRuo2" src="smallruo2.mp3"></audio>
      <audio ref="audioSona1" src="sona1.m4a"></audio>
      <audio ref="audioSona2" src="sona2.mp3"></audio>
      <audio ref="audioDrum1" src="tamdrum1.mp3"></audio>
      <audio ref="audioDrum2" src="tamdrum2.wav"></audio>
      <audio ref="audioYehu1" src="yehu1.mp3"></audio>
      <audio ref="audioYehu2" src="yehu2.mp3"></audio>
      <img class="about-box-link" src="@/assets/img/social/link.png" alt="fb">

      
    </div>
    <div v-if="currentStatus == 'game'" class="north-second">倒數 {{ countdown }} 秒</div>

    <!-- 結束遊戲時，播放音樂，30 秒後回到一開始 -->
    
    <div v-if="currentStatus == 'end'" class="north-end">
      <div
        v-if="!isClickLast"
        @click="playCutPlay"
        class="north-last-click"
      >點選演奏</div>
      <audio ref="cutPlay" src="cutPlay.mp3"></audio>

      <div
        class="north-des-text"
      >
        北管與南管音樂，是台灣傳統音樂，北管廣泛流傳於台灣民間社會，台灣北管音樂有許多派別，其中最大的派別為福祿派及西皮派，例如基隆聚樂社為北管的福祿派，使用的樂器包含嗩吶、單皮鼓、通鼓、大鑼、小鑼、鐃鈸、椰胡等。
      </div>

      <div class="north-second">倒數 {{ countdown }} 秒</div>
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
      countdown: 11,
      isClickLast: false,
      currentCard: 1,
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
    playRuo1() {
      this.$refs.audioRuo1.play();
    },
    playRuo2() {
      this.$refs.audioRuo2.play();
    },
    playSona1() {
      this.$refs.audioSona1.play();
    },
    playSona2() {
      this.$refs.audioSona2.play();
    },
    playDrum1() {
      this.$refs.audioDrum1.play();
    },
    playDrum2() {
      this.$refs.audioDrum2.play();
    },
    playYehu1() {
      this.$refs.audioYehu1.play();
    },
    playYehu2() {
      this.$refs.audioYehu2.play();
    },
    playCutPlay() {
      this.$refs.cutPlay.play()
      this.isClickLast = true
    },
    inialPlay() {
      setTimeout(() => {
        this.$refs.fullMusic.play();
      }, 1000);
    },
    startCard() {
      this.currentStatus = 'card'
      setTimeout(() => {
        this.$refs.fullMusic2.play();
      }, 1000);

    },
    startCountdown() {
      console.log('按鈕已點擊，30秒後將觸發下一個函數');
      this.countdown = 11;
      this.currentStatus = 'game'
      this.currentCard = 1

      if (this.interval) {
        clearInterval(this.interval);
      }

      // 更新倒數顯示
      this.interval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.interval);
          this.lastStep();
        }
      }, 1000); // 每秒更新一次
    },
    lastStep() {
      // 30秒後執行的操作
      this.currentStatus = 'end'
      this.countdown = 11

      // 更新倒數顯示
      this.interval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.interval);
          this.currentStatus = 'start'
          this.isClickLast = false
          this.$refs.fullMusic.play();
        }
      }, 1000); // 每秒更新一次
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
  padding-top: 60px;

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

  &-start-btn {
    width: 170px;
    height: 80px;
    margin: 50px auto 0px;
    font-size: 26px;
    color: white;
    text-align: center;
    line-height: 80px;
    background-color: pink;
    border-radius: 13px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  // 圖 + 卡

  &-card {

    &-box {
      padding: 0px 0px 20px;
    }

    &-img {
      display: flex;
      margin: auto;
    }

    &-row {
      width: 80%;
      margin: 50px auto 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-desc {
      padding: 20px;
      width: 400px;
      margin: 0px 0px 0px;
      text-align: center;
      font-size: 24px;
      color: black;
      background-color: rgba(pink, 1);
    }

    &-btn {
      padding: 12px;
      margin: 0px auto 0px;
      font-size: 20px;
      color: white;
      text-align: center;
      background-color: pink;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  // 遊戲中

  &-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &-inner {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  &-text {
    width: 180px;
    height: 80px;
    margin: 20px 0px 30px;
    line-height: 80px;
    text-align: center;
    font-size: 24px;
    color: black;
    background-color: rgba(pink, 1);
  }

  &-music {
    width: 200px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-music-small {
    width: 110px;
  }

  &-music-big {
    width: 280px;
    margin-bottom: 40px;
  }

  &-second {
    width: 180px;
    height: 80px;
    margin: 30px auto 0px;
    line-height: 80px;
    text-align: center;
    font-size: 26px;
    color: black;
    background-color: rgba(pink, 1);
  }

  &-last-click {
    width: 220px;
    height: 80px;
    margin: 20px auto 0px;
    font-size: 26px;
    color: white;
    text-align: center;
    line-height: 80px;
    background-color: pink;
    border-radius: 13px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-des-text {
    width: 700px;
    margin: 20px auto 0px;
    padding: 10px;
    font-size: 24px;
    color: black;
    text-align: center;
    line-height: 1.6;
    background-color: pink;
    border-radius: 13px;
  }

}

@media( max-width: 1023px ){



}

</style>
