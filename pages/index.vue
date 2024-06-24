<template>
<!-- 色票 橘色 #f29600 黃色 #faee00 藍色 #193677 紫色 #3c245b -->
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
    <div class="index-banner">
      <img class="index-banner-1" src="@/assets/img/index/banner_bg.png" alt="music">
      <img class="index-banner-2" src="@/assets/img/index/temple.png" alt="music">
      <img class="index-banner-3" src="@/assets/img/index/firework2.png" alt="music">
      <img class="index-banner-4" src="@/assets/img/index/firework1.png" alt="music">
      <img class="index-banner-5" src="@/assets/img/index/ghost.png" alt="music">
      <img class="index-banner-6" src="@/assets/img/index/lantern.png" alt="music">
    </div>

    <!-- 展覽說明 -->
    <div class="index-desc">
      <div class="index-desc-topic">鬼朋友度中元</div>
      <div class="index-desc-intro">
        「鷄籠中元祭」作為國家無形文化資產民俗類第一號。「民俗」意指一個特定群體所呈現的文化,包括了該文化、次文化或是群體的共同傳統;而這些文化必定是對這個群體有某種延續性的意義,才會流傳下來。<br><br>
        本展即以此文化意義的概念,試圖從「鷄籠中元祭」的各式科儀、慶典活動中,提取「人與人」(比拼文化、15姓氏)、「人與靈」(科儀)、「人與物」(水燈頭、看桌共創)等主題,探究民俗活動所彰顯的在地文化價值及延續意義。<br><br>
        展覽將透過深入淺出的轉譯及活潑多元的設計規劃,將生硬的民俗祭典轉化為易懂、適合親子共讀的文化讀本。並透過「親帶子」共讀的傳承過程,帶領孩童讀懂中元祭之所以能延續170年,民俗祭典背後的核心價值,感受基隆這座城市特有的人文精神。
      </div>
      <div class="index-desc-text">日期：2024/8/8 ~ 2024/8/29</div>
      <div class="index-desc-text">開放時間：週二至週日 09:00-17:00，週一固定休館，逢國定假日及連假照常開館，順延至次日休館。</div>
      <div class="index-desc-text">地點：202基隆市中正區信一路181號</div>
      <div class="index-desc-text">指導單位：基隆市政府</div>
      <div class="index-desc-text">主辦單位：基隆市文化局</div>
      <div class="index-desc-text">協辦單位：基隆市政府教育處</div>
      <div class="index-desc-text">執行團隊：雞籠怪奇</div>
    </div>

    <!-- 展覽看點 -->
    <div id="special" class="index-special">
      <div class="index-special-header">展覽看點</div>
      
      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">互動裝置</div>
      <div class="index-special-desc">展區使用大量互動裝置，有畫畫、有翻牌、有手作；讓民眾可以由「鬼」的視角出發，穿梭在展場間，藉由互動的模式體驗各項祭儀，並從中認識中元祭。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">北管比拼</div>
      <div class="index-special-desc">本次展覽運用科技裝置，讓看展的孩童與大人，認識北管音樂的比拼文化，並可以透過觸控畫面，體驗創作屬於自己的北管音樂，以及認識北管樂器</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">近距離看水燈頭</div>
      <div class="index-special-desc">本次展覽把一座水燈頭搬進會場啦！除了了解放水燈的儀式歷程，更能近距離親眼欣賞水燈頭的細緻工藝，以及每座水燈頭所乘載的故事。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">共創米雕</div>
      <div class="index-special-desc">藉由米雕共創的形式帶領學生認識「看桌」文化。「看桌」是鷄籠中元祭的重要元素。本次由藝師進入校園，帶領學生用麵粉、牲醴雕製成各種魚蝦鳥獸、民間故事和吉祥圖案等，除了供民眾欣賞特殊的藝術形式。也將學生參與米雕創作的作品展出。</div>

      <img class="index-special-img" src="@/assets/img/index/special.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">鬼視角認識中元祭</div>
      <div class="index-special-desc">透過特別設計的「以鬼的視角感受中元祭」，讓民眾以「好兄弟」的立場，探索與體驗鷄籠中元祭的各項傳統儀式與活動。藉由獨特的體驗方式，讓人更深入理解祭祀背後的故事與文化價值。來感受一下，作為「好兄弟」參與這個重要節慶的感覺吧！</div>
    </div>

    <!-- 15 科儀 -->
    <div id="festival" class="index-festival">
      <div class="index-festival-header">科儀</div>

      
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/2.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">六月二十九開燈夜</div>
          <div class="index-festival-text">又稱「陰光照路」；在鬼門還沒開、鬼朋友還沒來到人間之前，我們就開始準備招待囉！每年「主普宗親會」會於農曆七月前一、二週在各主要街道懸掛平安燈。於農曆六月最後一日晚上子時，基隆各間陰廟（專門祭拜鬼朋友的廟）會點亮「普度公燈」，讓鬼朋友一來到人間就能看得清楚路，跟著燈籠走就能吃到普度。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/10.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初一開龕門</div>
          <div class="index-festival-text">也就是俗稱的「開鬼門」，為什麼我們稱之為「龕」呢？為了表示尊敬，我們稱鬼朋友為「老大公」，把祂們神格化，所以鬼門稱為龕門。農曆七月初一午時一過，便會開啟老大公廟的龕門，象徵鬼朋友可以從陰間出來到人間，吃普度、接受祭拜。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/12.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初四異國靈情</div>
          <div class="index-festival-text">基隆曾經有許多不同國家的人來居住，其中以清法戰爭為代表，每年農曆七月初四在清法戰爭紀念園區舉行普度，超度法國士兵的亡靈，現場會準備葡萄酒、法國麵包等異國美食，以及外國冥幣，象徵所有在基隆離世的外國鬼朋友都受到祭拜。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/11.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初九 送燈敬獻</div>
          <div class="index-festival-text">鷄籠中元祭是很大的節慶，需要很多人參與，於是大家用姓氏分成不同宗親會，每個宗親會都有小隊長稱作「爐主」。這天道士會把主普燈送到每位爐主家，將普度的重責大任交付給爐主們，並為他們誦經祈福。主普燈是宗親會的精神象徵，所以在後續的遊行及放水燈，都扮演著重要角色。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/1.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十一豎燈篙</div>
          <div class="index-festival-text">中元祭的重頭戲是普度，也就是請鬼朋友吃飯，所以我們要先發出「邀請函」，而燈篙就是邀請函。主普壇會搭建兩座燈篙，分別掛有「天燈」及「地燈」，於日夜輪流照明。燈篙立得越高，則招引範圍越廣，會來參加的神鬼就越多唷！</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/1.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十二開燈放彩</div>
          <div class="index-festival-text">主普壇是鬼朋友吃普度時的主要場所，也是鬼朋友在人間的臨時住所。農曆七月十二日晚上六點，道士會先施行法事灑淨，然後舉行點燈儀式，整座主普壇建築會變得非常明亮，佈滿五光十色的絢爛燈火，吸引鬼朋友前來接受普度供養。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/3.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十三迎斗燈</div>
          <div class="index-festival-text">各姓氏宗親會都有木雕斗燈，代表姓氏的精神信念。斗燈的雕刻、內部的各項物品：剪刀、劍、傘、白米、鏡等都是學問智慧，代表著姓氏宗親全體的性命都受到斗燈的保護。在農曆七月十三下午會舉辦各姓氏的斗燈遊行，由北管不同派系子弟班聚樂社，以及得意堂前導遶境，迎至慶安宮展示。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/9.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四發表放榜</div>
          <div class="index-festival-text">由各姓氏宗親會共同參與祭祀，道士會向上天「發表」，稟報神明將接續兩日在主普壇舉行法事，表明普度鬼朋友的心意，希望眾神明前來監督；「放榜」稟告神鬼，即將舉辦法事的主普姓氏，願能賜福平安，保佑宗族。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/7.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四迎水燈遊行</div>
          <div class="index-festival-text">這天晚間由各姓氏宗親會在陸地上展示水燈頭、花車、藝閣、陣頭等進行遶境遊行，也會有許多學校、社區、表演團體參與其中。遊行時馬路會封街，路線會行經基隆四間廟宇（哨船頭覺修宮、護國城隍廟、慶安宮、奠濟宮），廟中分別供奉不同族群的神明，象徵族群融合的中元精神。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/8.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四放水燈</div>
          <div class="index-festival-text">再發邀請函！遊行遶境結束後，各宗親會將前往八斗子望海巷，舉行放水燈儀式，向水中的鬼朋友發送邀請函。海岸邊會安置供桌，由道士誦經舉行祭儀，把遊行時用的水燈頭焚燒，推出送往大海，為海上的鬼朋友照路，讓他們上岸來接受明日的普度，也象徵脫離苦海。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/4.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五中元普度</div>
          <div class="index-festival-text">普度就像是請客吃飯，從七月初一至關龕門前，家家戶戶都可以自行擇日普度，而七月十五是一場聯合盛大普度，會擺葷菜、素菜及西洋菜三大長桌，供奉給各國及各種喜好的鬼朋友，也會備有盥洗用品給鬼朋友使用。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/6.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五跳鍾馗</div>
          <div class="index-festival-text">普度儀式結束後（鬼朋友吃飽後），為了避免鬼朋友於暑假結束後繼續逗留人間，道士會扮演驅魔真君鍾馗，提醒鬼朋友記得回到陰間。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/5.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五送大士爺</div>
          <div class="index-festival-text">「大士爺」是普度期間負責管理陽間亡靈的神，是觀世音菩薩的化身，坐鎮監督普度法會，就像是警察。普度完畢之後，為了送回大士爺，要焚燒大量金紙、銀紙，稱為「金山銀山」，也會將普度期間所有紙製供品一同焚燒。</div>
        </div>
      </div>
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/13.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">八月一日關龕門</div>
          <div class="index-festival-text">農曆七月最後一日，俗稱關鬼門。基隆老大公廟的關龕門儀式於八月一日中午才舉行，比其他地方延後一天，這也是基隆充滿人情味的特色：「開不能晚，關不能早。」讓鬼朋友放滿一個月暑假再回去陰間。</div>
        </div>
      </div>
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/14.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">八月初一交接爐</div>
          <div class="index-festival-text">今年的中元祭活動圓滿結束後，由主普宗親會將「手爐」交接給明年主普的宗親會，代表交接工作職責，所有姓氏的代表都會觀禮，象徵任務傳承。</div>
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
  background-color: #f29600;
    
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
      color: #faee00;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }
    
  &-banner {
    position: relative;
    width: 500px;
    height: 300px;
    margin: 0px auto;
    padding: 200px 0px 0px;
    
    &-1 {
      position: absolute;
      top: 140px;
      left: 30px;
      width: 450px;
    }
    
    &-2 {
      position: absolute;
      top: 270px;
      left: 120px;
      width: 300px;
    }
    
    &-3 {
      position: absolute;
      top: 250px;
      left: 350px;
      width: 100px;
    }
    
    &-4 {
      position: absolute;
      top: 250px;
      left: 80px;
      width: 100px;
    }
    
    &-5 {
      position: absolute;
      top: 60px;
      left: 0px;
      width: 250px;
    }
    
    &-6 {
      position: absolute;
      top: 250px;
      left: 220px;
      width: 100px;
    }
  }

  &-desc {
    
    &-topic {
      margin-top: 20px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-intro {
      width: 1000px;
      margin: 20px auto 40px;
      font-size: 32px;
      color: #193677;
    }
    
    &-text {
      width: 1000px;
      margin: 0px auto 10px;
      font-size: 24px;
      color: #3c245b;
    }

  }
    
  &-special {
    
    &-header {
      margin-top: 60px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: #faee00;
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
      color: #faee00;
    }
    
    &-head {
      margin-top: 20px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #193677;
    }
    
    &-desc {
      width: 400px;
      margin: 14px auto 40px;
      text-align: center;
      font-size: 18px;
      color: #3c245b;
    }
    
  }
    
  &-festival {
    
    &-header {
      margin-top: 60px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0px 0px;
    }

    &-box-reverse {
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
      color: #193677;
    }
    
    &-text {
      width: 400px;
      margin: 14px auto 40px;
      text-align: center;
      font-size: 18px;
      color: #3c245b;
    }

    &-arrow {
      width: 50px;
      margin: auto;
      display: flex;
      transform: rotate(90deg);
    }

    &-arrow-reverse {
      transform: rotate(0deg);
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
