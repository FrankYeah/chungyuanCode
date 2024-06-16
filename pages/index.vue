<template>
  <div class="index">
    <!-- header：展覽看點、科儀 -->
    <div class="index-header">
      <div class="index-header-box">
        <nuxt-link to="/">
          <div class="index-header-text">鬼朋友度中元</div>
        </nuxt-link>
        <nuxt-link to="/#special">
          <div class="index-header-text">展覽看點</div>
        </nuxt-link>
        <nuxt-link to="/#festival">
          <div class="index-header-text">科儀</div>
        </nuxt-link>
      </div>
    </div>

    <!-- 主視覺圖 + 展名 -->
    <img class="index-banner" src="@/assets/img/index/banner.png" alt="music">

    <!-- 展覽說明 -->
    <div class="index-desc">
      <div class="index-desc-topic">鬼朋友度中元</div>
      <div class="index-desc-intro">
        「鷄籠中元祭」作為國家無形文化資產民俗類第一號。「民俗」意指一個特定群體所呈現的文化,包括了該文化、次文化或是群體的共同傳統;而這些文化必定是對這個群體有某種延續性的意義,才會流傳下來。<br><br>
        本展即以此文化意義的概念,試圖從「鷄籠中元祭」的各式科儀、慶典活動中,提取「人與人」(比拼文化、15姓氏)、「人與靈」(科儀)、「人與物」(水燈頭、看桌共創)等主題,探究民俗活動所彰顯的在地文化價值及延續意義。<br><br>
        展覽將透過深入淺出的轉譯及活潑多元的設計規劃,將生硬的民俗祭典轉化為易懂、適合親子共讀的文化讀本。並透過「親帶子」共讀的傳承過程,帶領孩童讀懂中元祭之所以能延續170年,民俗祭典背後的核心價值,感受基隆這座城市特有的人文精神。
      </div>
      <div class="index-desc-text">日期：2024/8/8 ~ 2024/8/29</div>
      <div class="index-desc-text">地點：202基隆市中正區信一路181號</div>
      <div class="index-desc-text">主辦：基隆市文化局</div>
      <div class="index-desc-text">執行：雞籠怪奇</div>
      <div class="index-desc-text">聯繫：(02)2422-4170</div>
    </div>

    <!-- 展覽看點 -->
    <div id="special" class="index-special">
      <div class="index-special-header">展覽看點</div>
      
      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">互動裝置</div>
      <div class="index-special-desc">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">北管比拼</div>
      <div class="index-special-desc">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">觀賞水燈頭</div>
      <div class="index-special-desc">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">共創米標</div>
      <div class="index-special-desc">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">鬼視角認識中元祭</div>
      <div class="index-special-desc">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
    </div>

    <!-- 15 科儀 -->
    <div id="festival" class="index-festival">
      <div class="index-festival-header">科儀</div>

      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/1.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十一豎燈篙</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/2.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十二開燈放彩</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/3.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十三迎斗燈</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/4.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五中元普渡</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/5.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五送大士爺</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/6.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五跳鍾馗</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/7.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四水燈頭繞境</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/8.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四放水燈</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/9.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四發表放榜</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/10.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初一開龕門</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/11.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初九 送燈獻祭</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/12.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初四異國靈情</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/13.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">八月一日關龕門</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/14.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">八月初一交接爐</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/15.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">六月二十九起燈腳</div>
          <div class="index-festival-text">互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字，互動裝置的說明文字。</div>
        </div>
      </div>
    </div>

    <!-- <img class="index--img" src="@/assets/img/index/ns.png" alt="music"> -->
    <!-- <div class="index-"></div> -->
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
        
    
    }
  },
  async mounted () {

  },
  destroyed () {
    
  },
  computed: {
    
  },
  methods: {
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.index {
  background-color: rgb(216, 147, 74);
    
  &-header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 60px;
    background-color: rgba(grey, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    z-index: 3;

    &-box {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: right;
      padding-right: 40px;
    }
    
    &-text {
      margin-left: 24px;
      color: white;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }
    
  &-banner {
    display: flex;
    padding-top: 100px;
    width: 400px;
    margin: 0px auto 0px;
  }

  &-desc {
    
    &-topic {
      margin-top: 20px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    
    &-intro {
      width: 1000px;
      margin: 20px auto 40px;
      font-size: 32px;
    }
    
    &-text {
      width: 1000px;
      margin: 0px auto 10px;
      font-size: 24px;
      
    }

  }
    
  &-special {
    
    &-header {
      margin-top: 60px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    
    &-img {
      width: 1000px;
      display: flex;
      margin: 20px auto;
    }
    
    &-hint {
      margin-top: 20px;
      text-align: center;
      font-size: 24px;
    }
    
    &-head {
      margin-top: 20px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
    }
    
    &-desc {
      width: 400px;
      margin: 14px auto 40px;
      text-align: center;
      font-size: 18px;
    }
    
  }
    
  &-festival {
    
    &-header {
      margin-top: 60px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    
    &-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0px 0px;
    }

    &-box:nth-child(odd) {
      flex-direction: row-reverse;
    }
    
    &-img {
      width: 30%;
    }
    
    &-inner {
      width: 50%;
    }
    
    &-head {
      margin-top: 20px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
    }
    
    &-text {
      width: 400px;
      margin: 14px auto 40px;
      text-align: center;
      font-size: 18px;
    }
    
  }
  
}

@media( max-width: 1023px ){

.index {
    
  &-header {
    
    &-text {
      
    }

  }
    
  &-banner {
    
  }

  &-desc {
    
    &-topic {
      
    }
    
    &-intro {
      
    }
    
    &-text {
      
    }

  }
    
  &-special {
    
    &-header {
      
    }
    
    &-img {
      
    }
    
    &-hint {
      
    }
    
    &-head {
      
    }
    
    &-desc {
      
    }
    
  }
    
  &-festival {
    
    &-header {
      
    }
    
    &-box {
      
    }
    
    &-img {
      
    }
    
    &-inner {
      
    }
    
    &-head {
      
    }
    
    &-text {
      
    }
    
  }

}

}

</style>
