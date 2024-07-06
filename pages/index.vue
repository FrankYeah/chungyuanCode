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
        <nuxt-link to="/#activity">
          <div class="index-header-text">活動資訊</div>
        </nuxt-link>
        <nuxt-link to="/#festival">
          <div class="index-header-text">科儀</div>
        </nuxt-link>
      </div>
    </div>

    <!-- 主視覺圖 + 展名 -->
    <div class="index-banner">
      <div class="index-banner-text">基隆美術館 M 樓</div>
      <img class="index-banner-1" src="@/assets/img/index/banner_bg.png" alt="music">
      <img class="index-banner-2" src="@/assets/img/index/temple.png" alt="music">
      <img class="index-banner-3" src="@/assets/img/index/firework2.png" alt="music">
      <img class="index-banner-4" src="@/assets/img/index/firework1.png" alt="music">
      <img class="index-banner-5" src="@/assets/img/index/ghost.png" alt="music">
      <img class="index-banner-6" src="@/assets/img/index/lantern.png" alt="music">
    </div>

    <!-- 展覽說明 -->
    <div class="index-desc">
      <div class="index-desc-intro">
        中元普度是臺灣傳統的民俗節日。每年農曆七月俗稱「鬼月」，傳說地府會開放，讓鬼朋友放暑假。漢人在移民拓墾基隆時，或遭遇海難，或發生漳泉械鬥，加上基隆地理位置重要，又出產煤礦，成了外國人爭奪的目標，因此死於基隆的外國人很多。為了安撫這些鬼朋友，基隆中元普度辦得特別盛大，由十五個姓氏的宗親會輪流擔任「主普」辦理「鷄籠中元祭」，透過許多活動招待鬼朋友，到現在已有 170 年的歷史。<br><br>
        本次展覽透過孩童的「鬼朋友」視角為主題，讓民眾及親子得以用更親近、更活潑的方式認識中元祭，並從各式的互動裝置、展示品中，了解中元祭的由來，除了傳達人們包容憐憫的心境，也傳達傳統文化「傳承」的美好。
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
      
      <img class="index-special-img" src="@/assets/img/index/special1.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">認識各項祭儀</div>
      <div class="index-special-desc">化身主辦人，招待你的鬼朋友體驗鷄籠中元祭的各項傳統儀式與活動！</div>

      <img class="index-special-img" src="@/assets/img/index/special2.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">現場看水燈頭</div>
      <div class="index-special-desc">讓你近距離欣賞上面的細緻工藝，認識每座水燈頭所乘載的故事。</div>

      <img class="index-special-img" src="@/assets/img/index/special3.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">看桌米雕共創</div>
      <div class="index-special-desc">一起欣賞由藝師進入校園，帶領學生製作的各種創意米雕展出。</div>

      <img class="index-special-img" src="@/assets/img/index/special4.png" alt="music">
      <div class="index-special-hint">EXHIBITION</div>
      <div class="index-special-head">互動體驗</div>
      <div class="index-special-desc">展區使用互動裝置，有畫畫、有卡牌、有手動、有音樂演奏，讓你邊玩邊認識中元祭！</div>
    </div>

    <!-- 活動資訊 -->

    <div id="activity" class="index-activity">
      <div class="index-activity-head">活動資訊</div>
      <div class="index-activity-inner">
        <div class="index-activity-box">
          <div class="index-activity-date">日期：8/10（六）、8/18（日）</div>
          <div class="index-activity-time">時間：10:30-11:30</div>
          <div class="index-activity-name">讀繪本Ｘ玩遊戲</div>
          <div class="index-activity-content">帶領兒童閱讀繪本，認識家鄉，並透過遊戲認識中元祭。</div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
            <div class="index-activity-link">報名連結</div>
          </a>
        </div>
        <div class="index-activity-box">
          <div class="index-activity-date">日期：8/10（六）、8/18（日）</div>
          <div class="index-activity-time">時間：13:30-15:30</div>
          <div class="index-activity-name">桌遊體驗「鬥陣度中元」</div>
          <div class="index-activity-content">進行桌遊活動，帶你認識雞籠中元祭的起源。</div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
            <div class="index-activity-link">報名連結</div>
          </a>
        </div>
        <div class="index-activity-box">
          <div class="index-activity-date">日期：8/11（日）、8/17（六）</div>
          <div class="index-activity-time">時間：13:30、15:30</div>
          <div class="index-activity-name">鬼朋友度中元-導覽×戲劇活動</div>
          <div class="index-activity-content">以導覽及戲劇演出的方式，帶你認識整個鷄籠中元祭，還有鬼朋友放暑假，伴你度中元。</div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
            <div class="index-activity-link">報名連結</div>
          </a>
        </div>
        <div class="index-activity-box">
          <div class="index-activity-date">日期：8/25（日）</div>
          <div class="index-activity-time">時間：13:30-16:00</div>
          <div class="index-activity-name">電影欣賞：魔法阿媽</div>
          <div class="index-activity-content">豆豆因為爸爸出了車禍，搬到基隆和恐怖的阿媽生活，度過了一個基隆限定的魔幻假期。</div>
          <a href="https://www.accupass.com/event/2406060800181324652668" target="_blank">
            <div class="index-activity-link">報名連結</div>
          </a>
        </div>
      </div>
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

      <nuxt-link to="/#festival1">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival1" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/10.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初一開龕門</div>
          <div class="index-festival-text">也就是俗稱的「開鬼門」，為什麼我們稱之為「龕」呢？為了表示尊敬，我們稱鬼朋友為「老大公」，把祂們神格化，所以鬼門稱為龕門。農曆七月初一午時一過，便會開啟老大公廟的龕門，象徵鬼朋友可以從陰間出來到人間，吃普度、接受祭拜。</div>
        </div>
      </div>

      <nuxt-link to="/#festival2">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival2" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/12.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初四異國靈情</div>
          <div class="index-festival-text">基隆曾經有許多不同國家的人來居住，其中以清法戰爭為代表，每年農曆七月初四在清法戰爭紀念園區舉行普度，超度法國士兵的亡靈，現場會準備葡萄酒、法國麵包等異國美食，以及外國冥幣，象徵所有在基隆離世的外國鬼朋友都受到祭拜。</div>
        </div>
      </div>

      <nuxt-link to="/#festival3">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival3" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/11.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月初九 送燈敬獻</div>
          <div class="index-festival-text">鷄籠中元祭是很大的節慶，需要很多人參與，於是大家用姓氏分成不同宗親會，每個宗親會都有小隊長稱作「爐主」。這天道士會把主普燈送到每位爐主家，將普度的重責大任交付給爐主們，並為他們誦經祈福。主普燈是宗親會的精神象徵，所以在後續的遊行及放水燈，都扮演著重要角色。</div>
        </div>
      </div>

      <nuxt-link to="/#festival4">
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival4" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/1.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十一豎燈篙</div>
          <div class="index-festival-text">中元祭的重頭戲是普度，也就是請鬼朋友吃飯，所以我們要先發出「邀請函」，而燈篙就是邀請函。主普壇會搭建兩座燈篙，分別掛有「天燈」及「地燈」，於日夜輪流照明。燈篙立得越高，則招引範圍越廣，會來參加的神鬼就越多唷！</div>
        </div>
      </div>

      <nuxt-link to="/#festival5">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival5" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/15.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十二開燈放彩</div>
          <div class="index-festival-text">主普壇是鬼朋友吃普度時的主要場所，也是鬼朋友在人間的臨時住所。農曆七月十二日晚上六點，道士會先施行法事灑淨，然後舉行點燈儀式，整座主普壇建築會變得非常明亮，佈滿五光十色的絢爛燈火，吸引鬼朋友前來接受普度供養。</div>
        </div>
      </div>

      <nuxt-link to="/#festival6">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival6" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/3.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十三迎斗燈</div>
          <div class="index-festival-text">各姓氏宗親會都有木雕斗燈，代表姓氏的精神信念。斗燈的雕刻、內部的各項物品：剪刀、劍、傘、白米、鏡等都是學問智慧，代表著姓氏宗親全體的性命都受到斗燈的保護。在農曆七月十三下午會舉辦各姓氏的斗燈遊行，由北管不同派系子弟班聚樂社，以及得意堂前導遶境，迎至慶安宮展示。</div>
        </div>
      </div>

      <nuxt-link to="/#festival7">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival7" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/9.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四發表放榜</div>
          <div class="index-festival-text">由各姓氏宗親會共同參與祭祀，道士會向上天「發表」，稟報神明將接續兩日在主普壇舉行法事，表明普度鬼朋友的心意，希望眾神明前來監督；「放榜」稟告神鬼，即將舉辦法事的主普姓氏，願能賜福平安，保佑宗族。</div>
        </div>
      </div>

      <nuxt-link to="/#festival8">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival8" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/7.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四迎水燈遊行</div>
          <div class="index-festival-text">這天晚間由各姓氏宗親會在陸地上展示水燈頭、花車、藝閣、陣頭等進行遶境遊行，也會有許多學校、社區、表演團體參與其中。遊行時馬路會封街，路線會行經基隆四間廟宇（哨船頭覺修宮、護國城隍廟、慶安宮、奠濟宮），廟中分別供奉不同族群的神明，象徵族群融合的中元精神。</div>
        </div>
      </div>

      <nuxt-link to="/#festival9">
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival9" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/8.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十四放水燈</div>
          <div class="index-festival-text">再發邀請函！遊行遶境結束後，各宗親會將前往八斗子望海巷，舉行放水燈儀式，向水中的鬼朋友發送邀請函。海岸邊會安置供桌，由道士誦經舉行祭儀，把遊行時用的水燈頭焚燒，推出送往大海，為海上的鬼朋友照路，讓他們上岸來接受明日的普度，也象徵脫離苦海。</div>
        </div>
      </div>

      <nuxt-link to="/#festival10">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival10" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/4.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五中元普度</div>
          <div class="index-festival-text">普度就像是請客吃飯，從七月初一至關龕門前，家家戶戶都可以自行擇日普度，而七月十五是一場聯合盛大普度，會擺葷菜、素菜及西洋菜三大長桌，供奉給各國及各種喜好的鬼朋友，也會備有盥洗用品給鬼朋友使用。</div>
        </div>
      </div>

      <nuxt-link to="/#festival11">
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival11" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/6.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五跳鍾馗</div>
          <div class="index-festival-text">普度儀式結束後（鬼朋友吃飽後），為了避免鬼朋友於暑假結束後繼續逗留人間，道士會扮演驅魔真君鍾馗，提醒鬼朋友記得回到陰間。</div>
        </div>
      </div>

      <nuxt-link to="/#festival12">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival12" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/5.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">七月十五送大士爺</div>
          <div class="index-festival-text">「大士爺」是普度期間負責管理陽間亡靈的神，是觀世音菩薩的化身，坐鎮監督普度法會，就像是警察。普度完畢之後，為了送回大士爺，要焚燒大量金紙、銀紙，稱為「金山銀山」，也會將普度期間所有紙製供品一同焚燒。</div>
        </div>
      </div>

      <nuxt-link to="/#festival13">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival13" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/13.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">八月一日關龕門</div>
          <div class="index-festival-text">農曆七月最後一日，俗稱關鬼門。基隆老大公廟的關龕門儀式於八月一日中午才舉行，比其他地方延後一天，這也是基隆充滿人情味的特色：「開不能晚，關不能早。」讓鬼朋友放滿一個月暑假再回去陰間。</div>
        </div>
      </div>

      <nuxt-link to="/#festival14">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival14" class="index-festival-box">
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
      color: #193677;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }
    
  &-banner {
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0px auto;
    padding: 0px 0px 0px;

    &-text {
      position: absolute;
      top: 100px;
      left: 100px;
      margin-top: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-1 {
      position: absolute;
      top: 180px;
      right: 100px;
      width: 550px;
    }
    
    &-2 {
      position: absolute;
      top: 301px;
      right: 167px;
      width: 400px;
    }
    
    &-3 {
      position: absolute;
      top: 301px;
      right: 130px;
      width: 130px;
    }
    
    &-4 {
      position: absolute;
      top: 301px;
      right: 467px;
      width: 150px;
    }
    
    &-5 {
      position: absolute;
      top: 250px;
      left: 100px;
      width: 550px;
    }
    
    &-6 {
      position: absolute;
      top: 301px;
      right: 167px;
      width: 150px;
    }
  }

  &-desc {
    padding-bottom: 40px;
    
    &-intro {
      width: 1000px;
      margin: 20px auto 40px;
      font-size: 24px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      color: #193677;
    }
    
    &-text {
      width: 1000px;
      margin: 0px auto 10px;
      font-size: 20px;
      color: #3c245b;
    }

  }
    
  &-special {
    background-color: #193677;
    
    &-header {
      padding-top: 60px;
      text-align: center;
      font-size: 24px;
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
      color: #f29600;
    }
    
    &-head {
      margin-top: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-desc {
      width: 400px;
      margin: 14px auto 0px;
      padding-bottom: 40px;
      text-align: center;
      font-size: 20px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      color: #faee00;
    }
    
  }

  // 活動

  &-activity {
    padding: 30px 0px;

    &-head {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: #faee00;
    }

    &-inner {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &-box {
      width: 40%;
      padding: 20px;
      border: 1px solid;
    }

    &-date {
      margin-bottom: 14px;
      font-size: 20px;
    }

    &-time {
      margin-bottom: 14px;
      font-size: 20px;
    }

    &-name {
      margin-bottom: 14px;
      font-size: 20px;
    }

    &-content {
      margin-bottom: 14px;
      line-height: 1.5;
      font-size: 20px;
    }

    &-link {
      margin-bottom: 0px;
      font-size: 20px;
      text-decoration: underline;
    }
  }
    
  &-festival {
    background-color: #faee00;
    
    &-header {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-box {
      display: flex;
      align-items: center;
      margin: 20px 0px 0px;
    }

    &-box-reverse {
      flex-direction: row-reverse;
    }
    
    &-img {
      width: 30%;
    }
    
    &-inner {
      
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
      transform: rotate(0deg);
    }

    &-arrow-reverse {
      transform: rotate(90deg);
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
