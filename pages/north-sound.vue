<template>
  <div class="north">
    <!-- :style="{
      'backgroundImage' : 'url(' + require('@/assets/img/music/bg2.webp') + ')'
    }" -->
    <!-- <div @click="inialPlay" class="north-start-btn">音樂</div>
    <div @click="startCard" class="north-start-btn">認識北管</div>
    <audio ref="fullMusic" loop src="full-music.mp3"></audio> -->

    <!-- 遊戲開始前 -->

    <div v-if="currentStatus == 'start'" class="north-start north-bg"
      :style="{
        'backgroundImage' : 'url(' + require('@/assets/img/music2/bg1.png') + ')'
      }"
    >
      <div class="north-start-empty"></div>
      <div class="north-start-text north-des-text">
        帶你認識遊行陣頭的傳統音樂<br>
        還可以實際體驗北管樂器喔!
      </div>
      <img @click="startCard"
        class="north-start-btn"
        src="@/assets/img/music2/know.png"
        alt="music"
      >
    </div>

    <!-- 圖 + 卡 -->

    <div v-if="currentStatus == 'card'" class="north-card">
    
      <div v-if="currentCard == 1" class="north-card-box north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg2.png') + ')'
        }"
      >

        <div class="north-card-inner">
          <img class="north-card-img" src="@/assets/img/music/music1.jpg" alt="music">
          <div class="north-card-desc">北管與南管音樂，是台灣傳統音樂，<br>北管廣泛流傳於台灣民間社會。</div>
        </div>
        <img @click="currentCard = 2"
          class="north-card-btn"
          src="@/assets/img/music2/arrow.png"
          alt="music"
        >
      </div>

      <div v-if="currentCard == 2" class="north-card-box north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg2.png') + ')'
        }"
      >
        <div class="north-card-inner">
          <img class="north-card-img" src="@/assets/img/music/music5.jpg" alt="music">
          <div class="north-card-desc">台灣北管音樂有許多派別，<br>其中最大的派別為福祿派及西皮派。<br>（圖 / 中華民國傳統民俗文化協會）</div>
        </div>
        <img @click="currentCard = 3"
          class="north-card-btn"
          src="@/assets/img/music2/arrow.png"
          alt="music"
        >

      </div>

      <div v-if="currentCard == 3" class="north-card-box north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg2.png') + ')'
        }"
      >
          <div class="north-card-inner">
            <img class="north-card-img" src="@/assets/img/music/music4.jpg" alt="music">
            <div class="north-card-desc">例如基隆聚樂社為北管的福祿派，<br>得意堂則為西皮派。</div>
          </div>
          <img @click="currentCard = 4"
            class="north-card-btn"
            src="@/assets/img/music2/arrow.png"
            alt="music"
          >
          
      </div>

      <div v-if="currentCard == 4" class="north-card-box north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg2.png') + ')'
        }"
      >
          <div class="north-card-inner">
            <img class="north-card-img" src="@/assets/img/music/music6.jpg" alt="music">
            <div class="north-card-desc">使用的樂器包含嗩吶、單皮鼓、通鼓、<br>大鑼、小鑼、鐃鈸、椰胡等。<br>（圖 / 中華民國傳統民俗文化協會）</div>
          </div>
          <img @click="currentCard = 5"
            class="north-card-btn"
            src="@/assets/img/music2/arrow.png"
            alt="music"
          >
          
      </div>

      <div v-if="currentCard == 5" class="north-card-box north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg3.png') + ')'
        }"
      >
      
          <div class="north-card-last-text">
            北管與南管是臺灣傳統音樂，<br>而北管廣泛流傳於臺灣民間社會。<br>
            臺灣北管音樂有許多派別，<br>其中最大的派別為西皮派及福祿派。<br>
            例如基隆聚樂社為福祿派；<br>得意堂則為西皮派。<br>
            北管使用的樂器包含嗩吶、單皮鼓、<br>通鼓、大鑼、小鑼、鐃鈸、椰胡等。<br>
            這些北管樂器會發出什麼聲音呢？<br>
            用手指頭點擊，試著演奏看看吧！
          </div>
          <img @click="startCountdown"
            class="north-card-btn-last"
            src="@/assets/img/music2/startplay.png"
            alt="music"
          >
          
      </div>

      <audio ref="fullMusic2" loop src="full-music.mp3"></audio>
    </div>

    <!-- 遊戲中 -->
    <div v-if="currentStatus == 'game'" class="north-game north-bg"
      :style="{
        'backgroundImage' : 'url(' + require('@/assets/img/music2/bg3.png') + ')'
      }"
    >

      <div v-if="currentStatus == 'game'" class="north-second">{{ countdown }}</div>

      <div class="north-inner">
        <img class="north-music-icon" src="@/assets/img/music2/smallruo.png" alt="music">
        <img @click="playRuo1" class="north-music" src="@/assets/img/music/smallruo.png" alt="music">
        <img @click="playRuo2" class="north-music north-music-big" src="@/assets/img/music/smallruo1.png" alt="music">
      </div>

      <div class="north-inner">
        <img class="north-music-icon" src="@/assets/img/music2/sona.png" alt="music">
        <img @click="playSona1" class="north-music north-music-big" src="@/assets/img/music/sona.png" alt="music">
        <img @click="playSona2" class="north-music" src="@/assets/img/music/sona1.png" alt="music">
      </div>
      
      <div class="north-inner">
        <img class="north-music-icon" src="@/assets/img/music2/tamtam.png" alt="music">
        <img @click="playDrum1" class="north-music north-music-big" src="@/assets/img/music/tamdrum.png" alt="music">
        <img @click="playDrum2" class="north-music north-music-big" src="@/assets/img/music/tamdrum1.png" alt="music">
      </div>

      <div class="north-inner">
        <img class="north-music-icon" src="@/assets/img/music2/yehu.png" alt="music">
        <img @click="playYehu1" class="north-music" src="@/assets/img/music/yehu.png" alt="music">
        <img @click="playYehu2" class="north-music north-music-big" src="@/assets/img/music/yehu1.png" alt="music">
      </div>

      <div  class="north-text">點點看，<br>這些北管樂器是什麼聲音呢？</div>

      <audio ref="audioRuo1" src="smallruo1.m4a"></audio>
      <audio ref="audioRuo2" src="smallruo2.mp3"></audio>
      <audio ref="audioSona1" src="sona1.m4a"></audio>
      <audio ref="audioSona2" src="sona2.mp3"></audio>
      <audio ref="audioDrum1" src="tamdrum1.mp3"></audio>
      <audio ref="audioDrum2" src="tamdrum2.wav"></audio>
      <audio ref="audioYehu1" src="yehu1.mp3"></audio>
      <audio ref="audioYehu2" src="yehu2.mp3"></audio>
      <!-- <img class="about-box-link" src="@/assets/img/social/link.png" alt="fb"> -->
    </div>
    
    <!-- 結束遊戲時，播放音樂，30 秒後回到一開始 -->
    
    <div v-if="currentStatus == 'end'" class="north-end north-bg"
        :style="{
          'backgroundImage' : 'url(' + require('@/assets/img/music2/bg4.png') + ')'
        }"
      >
      <!-- <div
        v-if="!isClickLast"
        @click="playCutPlay"
        class="north-last-click"
      >點選演奏</div>
      <audio ref="cutPlay" src="cutPlay.mp3"></audio> -->

      <div
        class="north-des-text north-end-text"
      >
        臺灣早期各地的北管，都曾發生西皮和福祿派系的衝突，其中也包含基隆，兩派經常發生流血事件。<br>

      後來為了避免傷亡，在地方仕紳及政府的協調下，改以「拼陣頭代替打破頭」的方式，用文化競技來避免派系衝突，後來又發展成迎斗燈那天，雙方禮讓的「交陣」儀式，展現文化與價値觀的反轉。
      </div>

      <img @click="currentStatus = 'start'"
        class="north-card-btn-last"
        src="@/assets/img/music2/back.png"
        alt="music"
      >

      <!-- <div class="north-second">倒數 {{ countdown }} 秒</div> -->
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
      currentStatus: 'end',
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
  padding-top: 0px;
  background-color: #193677;

  &-bg {
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    z-index: -1;
  }

  &-des-text {
    width: 700px;
    font-size: 24px;
    color: white;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 1.3px;
  }

  &-start {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-start-empty {
    width: 100px;
    height: 100px;
  }

  &-start-text {
    padding-top: 1300px;
    font-size: 50px;
  }

  &-start-btn {
    width: 500px;
    margin: 10px 0px 0px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  // 圖 + 卡

  &-card {
    
    &-box {
      // padding: 40px 0px 20px;
    }

    &-inner {
      // height: 700px;
      // padding-top: 700px;
      width: 700px;
      height: 870px;
      margin: auto;
      padding-top: 700px;
    }

    &-img {
      display: flex;
      margin: auto;
      width: auto;
      height: 470px;
    }

    &-desc {
      width: 800px;
      margin: 20px auto 0px;
      font-size: 40px;
      color: white;
      text-align: center;
      line-height: 1.6;
      letter-spacing: 1.3px;
    }

    &-last-text {
      width: 800px;
      margin: 20px auto 0px;
      padding: 700px 0px 230px;
      font-size: 40px;
      color: white;
      text-align: center;
      line-height: 1.6;
      letter-spacing: 1.3px;
    }

    &-btn {
      width: 230px;
      margin: 0px auto 40px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-btn-last {
      width: 500px;
      margin: 0px auto 40px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  // 遊戲中

  &-game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-second {
    padding: 20px 0px 400px 450px;
    font-size: 100px;
    color: white;
  }

  &-inner {
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-music-icon {
    width: 220px;
    // margin: 50px 0px 40px;
  }

  &-music {
    width: 184px;
    margin-right: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-music-small {
    width: 0px;
  }

  &-music-big {
    width: 220px;
    margin-right: 0px;
  }

  &-text {
    width: 700px;
    padding: 20px 0px 50px;
    font-size: 46px;
    color: white;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 1.3px;
  }

  &-end {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-end-text {
    width: 1000px;
    padding: 1204px 0px 0px;
    font-size: 34px;
  }

}

@media( max-width: 1023px ){



}

</style>
