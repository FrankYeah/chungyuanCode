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
      <img class="index-banner-banner" src="@/assets/img/index/banner_bg.png" alt="music">
      <img class="index-banner-temple" src="@/assets/img/index/temple.png" alt="music">
      <img class="index-banner-lantern" src="@/assets/img/index/lantern.png" alt="music">
      <!-- <img class="index-banner-3" src="@/assets/img/index/firework2.png" alt="music">
      <img class="index-banner-4" src="@/assets/img/index/firework1.png" alt="music"> -->
      <img class="index-banner-date" src="@/assets/img/index/date.png" alt="music">
      <img class="index-banner-ghost" src="@/assets/img/index/ghost.png" alt="music">
    </div>

    <!-- 展覽說明 -->
    <div class="index-desc">
      <img class="index-desc-fire1" src="@/assets/img/index/firework-pink1.png" alt="music">
      <div class="index-desc-intro">
        每年農曆七月俗稱「鬼月」，傳說地府會讓「好兄弟」出來放暑假。「中元普度」是臺灣農曆七月重要的民俗活動，其中又以基隆的「鷄籠中元祭」最為著名。<br><br>
        基隆擁有豐富又多元的歷史，過去曾有許多國家的人來過基隆，因海難、疾病、戰爭、械鬥等原因去世。為了安撫這些鬼朋友，基隆人特別重視中元普度，發展出由十五個姓氏的宗親會輪流主普「鷄籠中元祭」，透過非常多的祭典儀式招待鬼朋友，至今已有 170 年歷史，展現基隆人的悲天憫人情懷。<br><br>
        「鬼朋友度中元 」是兒童版的中元祭展覽，以完整的農曆七月祭儀活動，搭配淺顯易懂的介紹與活潑的互動裝置，邀請大家一起玩一趟「鷄籠中元祭」。透過認識中元祭的由來，傳達包容萬物的憐憫善意，展現傳統文化的傳承美好。
      </div>
      <div class="index-desc-head">
        <div>「鬼朋友度中元」特展</div>
        <div>2024/8/8～2024/8/29</div>
      </div>
      <div class="index-desc-text">基隆美術館</div>
      <div class="index-desc-text">開放時間：週二至週日 09:00-17:00，週一固定休館，逢國定假日及連假照常開館，順延至次日休館。</div><br>

      <div class="index-desc-text">指導單位：基隆市政府</div>
      <div class="index-desc-text">主辦單位：基隆市文化局</div>
      <div class="index-desc-text">協辦單位：基隆市政府教育處</div>
      <div class="index-desc-text">執行團隊：雞籠怪奇</div>
      <img class="index-desc-fire2" src="@/assets/img/index/firework-pink2.png" alt="music">
    </div>

    <!-- 展覽看點 -->
    <div id="special" class="index-special">
      <div class="index-special-header">展覽看點</div>
      
      <div class="index-special-inner">
        <img class="index-special-img" src="@/assets/img/index/detail.png" alt="music">
        <div class="index-special-box">
          <div class="index-special-head">「有點仔細」十五項祭儀</div>
          <div class="index-special-desc">化身主辦人，招待你的鬼朋友體驗鷄籠中元祭的各項傳統儀式與活動！</div>
        </div>
      </div>

      <div class="index-special-inner">
        <img class="index-special-img index-special-img2" src="@/assets/img/index/cross.png" alt="music">
        <div class="index-special-box">
          <div class="index-special-head">「有點貼近」看水燈頭</div>
          <div class="index-special-desc">近距離欣賞水燈頭的細緻工藝。</div>
        </div>
      </div>

      <div class="index-special-inner">
        <img class="index-special-img" src="@/assets/img/index/mini.png" alt="music">
        <div class="index-special-box">
          <div class="index-special-head">「有點迷你」看桌米雕共創</div>
          <div class="index-special-desc">謝源章老師進入校園，帶領學生製作的縮小版創意米雕。</div>
        </div>
      </div>

      <div class="index-special-inner">
        <img class="index-special-img index-special-img2" src="@/assets/img/index/cool.png" alt="music">
        <div class="index-special-box">
          <div class="index-special-head">「有點巧思」互動體驗</div>
          <div class="index-special-desc">展區規劃多樣互動裝置，讓你邊玩邊認識中元祭！</div>
        </div>
      </div>

    </div>

    <!-- 活動資訊 -->

    <div id="activity" class="index-activity">
      <div class="index-activity-head">系列活動</div>
      <img class="index-activity-lantain" src="@/assets/img/index/lantern.png" alt="music">
      <img class="index-activity-fire" src="@/assets/img/index/firework-pink2.png" alt="music">
      
      <div class="index-activity-inner">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
          <img class="index-activity-img" src="@/assets/img/index/activily1.png" alt="music">
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
          <img class="index-activity-img" src="@/assets/img/index/activily2.png" alt="music">
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNTzwWTSaB9A6DlZvL7n4p5ETAoZb07Waxt--NtQr2YzIyew/viewform" target="_blank">
          <img class="index-activity-img" src="@/assets/img/index/activily3.png" alt="music">
        </a>
        <a href="https://www.accupass.com/event/2406060800181324652668" target="_blank">
          <img class="index-activity-img" src="@/assets/img/index/activily4.png" alt="music">
        </a>
      </div>
    </div>

    <!-- 15 科儀 -->
    <div id="festival" class="index-festival">
      <div class="index-festival-header">科儀</div>
      
      <div class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/2.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">開燈夜<span class="index-festival-span">六月二十九</span></div>
          <div class="index-festival-text">又稱「陰光照路」；在鬼門還沒開、鬼朋友還沒來到人間之前，我們就開始準備招待囉！每年「主普宗親會」會於農曆七月前一、二週在各主要街道懸掛平安燈。於農曆六月最後一日晚上子時，基隆各間陰廟（專門祭拜鬼朋友的廟）會點亮「普度公燈」，讓鬼朋友一來到人間就能看得清楚路，跟著燈籠走就能吃到普度。</div>
        </div>
      </div>

      <nuxt-link to="/#festival1">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival1" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/10.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">開龕門<span class="index-festival-span">七月初一</span></div>
          <div class="index-festival-text">也就是俗稱的「開鬼門」，為什麼我們稱之為「龕」呢？為了表示尊敬，我們稱鬼朋友為「老大公」，把祂們神格化，所以鬼門稱為龕門。農曆七月初一午時一過，便會開啟老大公廟的龕門，象徵鬼朋友可以從陰間出來到人間，吃普度、接受祭拜。</div>
        </div>
      </div>

      <nuxt-link to="/#festival2">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival2" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/12.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">異國靈情<span class="index-festival-span">七月初四</span></div>
          <div class="index-festival-text">基隆曾經有許多不同國家的人來居住，其中以清法戰爭為代表，每年農曆七月初四在清法戰爭紀念園區舉行普度，超度法國士兵的亡靈，現場會準備葡萄酒、法國麵包等異國美食，以及外國冥幣，象徵所有在基隆離世的外國鬼朋友都受到祭拜。</div>
        </div>
      </div>

      <nuxt-link to="/#festival3">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival3" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/11.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">送燈敬獻<span class="index-festival-span">七月初九</span></div>
          <div class="index-festival-text">鷄籠中元祭是很大的節慶，需要很多人參與，於是大家用姓氏分成不同宗親會，每個宗親會都有小隊長稱作「爐主」。這天道士會把主普燈送到每位爐主家，將普度的重責大任交付給爐主們，並為他們誦經祈福。主普燈是宗親會的精神象徵，所以在後續的遊行及放水燈，都扮演著重要角色。</div>
        </div>
      </div>

      <nuxt-link to="/#festival4">
      <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival4" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/1.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">豎燈篙<span class="index-festival-span">七月十一</span></div>
          <div class="index-festival-text">中元祭的重頭戲是普度，也就是請鬼朋友吃飯，所以我們要先發出「邀請函」，而燈篙就是邀請函。主普壇會搭建兩座燈篙，分別掛有「天燈」及「地燈」，於日夜輪流照明。燈篙立得越高，則招引範圍越廣，會來參加的神鬼就越多唷！</div>
        </div>
      </div>

      <nuxt-link to="/#festival5">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival5" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/15.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">開燈放彩<span class="index-festival-span">七月十二</span></div>
          <div class="index-festival-text">主普壇是鬼朋友吃普度時的主要場所，也是鬼朋友在人間的臨時住所。農曆七月十二日晚上六點，道士會先施行法事灑淨，然後舉行點燈儀式，整座主普壇建築會變得非常明亮，佈滿五光十色的絢爛燈火，吸引鬼朋友前來接受普度供養。</div>
        </div>
      </div>

      <nuxt-link to="/#festival6">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival6" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/3.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">迎斗燈<span class="index-festival-span">七月十三</span></div>
          <div class="index-festival-text">各姓氏宗親會都有木雕斗燈，代表姓氏的精神信念。斗燈的雕刻、內部的各項物品：剪刀、劍、傘、白米、鏡等都是學問智慧，代表著姓氏宗親全體的性命都受到斗燈的保護。在農曆七月十三下午會舉辦各姓氏的斗燈遊行，由北管不同派系子弟班聚樂社，以及得意堂前導遶境，迎至慶安宮展示。</div>
        </div>
      </div>

      <nuxt-link to="/#festival7">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival7" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/9.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">發表放榜<span class="index-festival-span">七月十四</span></div>
          <div class="index-festival-text">由各姓氏宗親會共同參與祭祀，道士會向上天「發表」，稟報神明將接續兩日在主普壇舉行法事，表明普度鬼朋友的心意，希望眾神明前來監督；「放榜」稟告神鬼，即將舉辦法事的主普姓氏，願能賜福平安，保佑宗族。</div>
        </div>
      </div>

      <nuxt-link to="/#festival8">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival8" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/7.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">迎水燈遊行<span class="index-festival-span">七月十四</span></div>
          <div class="index-festival-text">這天晚間由各姓氏宗親會在陸地上展示水燈頭、花車、藝閣、陣頭等進行遶境遊行，也會有許多學校、社區、表演團體參與其中。遊行時馬路會封街，路線會行經基隆四間廟宇（哨船頭覺修宮、護國城隍廟、慶安宮、奠濟宮），廟中分別供奉不同族群的神明，象徵族群融合的中元精神。</div>
        </div>
      </div>

      <nuxt-link to="/#festival9">
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival9" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/8.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">放水燈<span class="index-festival-span">七月十四</span></div>
          <div class="index-festival-text">再發邀請函！遊行遶境結束後，各宗親會將前往八斗子望海巷，舉行放水燈儀式，向水中的鬼朋友發送邀請函。海岸邊會安置供桌，由道士誦經舉行祭儀，把遊行時用的水燈頭焚燒，推出送往大海，為海上的鬼朋友照路，讓他們上岸來接受明日的普度，也象徵脫離苦海。</div>
        </div>
      </div>

      <nuxt-link to="/#festival10">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival10" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/4.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">中元普度<span class="index-festival-span">七月十五</span></div>
          <div class="index-festival-text">普度就像是請客吃飯，從七月初一至關龕門前，家家戶戶都可以自行擇日普度，而七月十五是一場聯合盛大普度，會擺葷菜、素菜及西洋菜三大長桌，供奉給各國及各種喜好的鬼朋友，也會備有盥洗用品給鬼朋友使用。</div>
        </div>
      </div>

      <nuxt-link to="/#festival11">
      <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival11" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/6.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">跳鍾馗<span class="index-festival-span">七月十五</span></div>
          <div class="index-festival-text">普度儀式結束後（鬼朋友吃飽後），為了避免鬼朋友於暑假結束後繼續逗留人間，道士會扮演驅魔真君鍾馗，提醒鬼朋友記得回到陰間。</div>
        </div>
      </div>

      <nuxt-link to="/#festival12">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival12" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/5.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">送大士爺<span class="index-festival-span">七月十五</span></div>
          <div class="index-festival-text">「大士爺」是普度期間負責管理陽間亡靈的神，是觀世音菩薩的化身，坐鎮監督普度法會，就像是警察。普度完畢之後，為了送回大士爺，要焚燒大量金紙、銀紙，稱為「金山銀山」，也會將普度期間所有紙製供品一同焚燒。</div>
        </div>
      </div>

      <nuxt-link to="/#festival13">
        <img class="index-festival-arrow" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival13" class="index-festival-box index-festival-box-reverse">
        <img class="index-festival-img" src="@/assets/img/index/13.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">關龕門<span class="index-festival-span">八月一日</span></div>
          <div class="index-festival-text">農曆七月最後一日，俗稱關鬼門。基隆老大公廟的關龕門儀式於八月一日中午才舉行，比其他地方延後一天，這也是基隆充滿人情味的特色：「開不能晚，關不能早。」讓鬼朋友放滿一個月暑假再回去陰間。</div>
        </div>
      </div>

      <nuxt-link to="/#festival14">
        <img class="index-festival-arrow index-festival-arrow-reverse" src="@/assets/img/icon/right-down.png" alt="icon">
      </nuxt-link>
      <div id="festival14" class="index-festival-box">
        <img class="index-festival-img" src="@/assets/img/index/14.png" alt="music">
        <div class="index-festival-inner">
          <div class="index-festival-head">交接爐<span class="index-festival-span">八月初一</span></div>
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
    max-width: 1000px;
    width: 100%;
    min-height: 100vh;
    margin: 0px auto;
    padding: 0px 0px 0px;
    
    &-banner {
      position: absolute;
      top: 180px;
      right: 10px;
      width: 560px;
    }
    
    &-temple {
      position: absolute;
      top: 362px;
      right: 62px;
      width: 452px;
    }
    
    &-lantern {
      position: absolute;
      top: 301px;
      left: 10px;
      width: 150px;
    }
    
    &-date {
      position: absolute;
      top: 500px;
      left: 84px;
      width: 350px;
    }
    
    &-ghost {
      position: absolute;
      top: 184px;
      left: 10px;
      width: 570px;
    }
  }

  &-desc {
    position: relative;
    padding: 20px 0px 40px;

    &-fire1 {
      position: absolute;
      top: -200px;
      left: 0px;
      width: 400px;
    }

    &-fire2 {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 400px;
    }
    
    &-intro {
      position: relative;
      width: 1000px;
      margin: 20px auto 0px;
      font-size: 24px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      color: #193677;
    }

    &-head {
      position: relative;
      width: 1000px;
      display: flex;
      margin: 100px auto 30px;
      color: #3c245b;
      font-size: 24px;

      & div:last-child {
        margin-left: 14px;
      }
    }
    
    &-text {
      position: relative;
      width: 1000px;
      margin: 0px auto 10px;
      font-size: 20px;
      color: #3c245b;
    }

  }
    
  &-special {
    background-color: #193677;
    padding: 0px 0px 50px;
    
    &-header {
      padding-top: 60px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #faee00;
    }

    &-inner {
      width: 830px;
      display: flex;
      align-items: center;
      margin: 0px auto 10px;
    }
    
    &-img {
      width: 160px;
      margin: 20px 0px;
    }

    &-img2 {
      margin: 20px 0px 0px 170px;
    }

    &-box {
      margin-left: 30px;
    }
    
    &-head {
      font-size: 24px;
      font-weight: bold;
      color: #faee00;
    }
    
    &-desc {
      margin: 14px 0px 0px;
      font-size: 20px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      color: #faee00;
    }
    
  }

  // 活動

  &-activity {
    position: relative;
    padding: 30px 0px 60px;

    &-head {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #193677;
    }

    &-lantain {
      position: absolute;
      top: 60px;
      left: 10px;
      width: 300px;
    }

    &-fire {
      position: absolute;
      bottom: 50px;
      right: 10px;
      width: 350px;
    }

    &-inner {
      position: relative;
      width: 780px;
      margin: 0px auto 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-img {
      margin: 50px 0px 0px;
      width: 350px;
    }

    &-link {
      margin-bottom: 0px;
      font-size: 20px;
      text-decoration: underline;
    }
  }
    
  &-festival {
    padding: 30px 0px 30px;
    background-color: #faee00;
    
    &-header {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #193677;
    }
    
    &-box {
      width: 1000px;
      display: flex;
      align-items: center;
      margin: 20px auto 0px;
    }

    &-box-reverse {
      flex-direction: row-reverse;
    }
    
    &-img {
      width: 30%;
    }
    
    &-inner {
      margin: 0px 50px;
    }
    
    &-head {
      margin-top: 24px;
      font-size: 32px;
      font-weight: bold;
      color: #193677;
    }

    &-span {
      margin: 0px 0px 0px 20px;
      font-size: 20px;
    }
    
    &-text {
      margin: 14px 0px 40px;
      font-size: 20px;
      color: #3c245b;
    }

    &-arrow {
      width: 50px;
      margin: 20px auto;
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
  background-color: #f29600;
    
  &-header {
    // width: 100vw;
    // height: 60px;

    &-box {
      // height: 60px;
      // padding-right: 40px;
    }
    
    &-text {
      // margin-left: 24px;
      // font-size: 24px;
    }

  }
    
  &-banner {
    // max-width: 1000px;
    // width: 100%;
    // min-height: 100vh;
    // margin: 0px auto;
    // padding: 0px 0px 0px;
    
    &-banner {
      top: 180px;
      right: 10px;
      width: 320px;
    }
    
    &-temple {
      top: 362px;
      right: 62px;
      width: 300px;
    }
    
    &-lantern {
      top: 301px;
      left: 10px;
      width: 50px;
    }
    
    &-date {
      top: 500px;
      left: 84px;
      width: 250px;
    }
    
    &-ghost {
      top: 184px;
      left: 10px;
      width: 300px;
    }
  }

  &-desc {
    padding: 20px 0px 40px;

    &-fire1 {
      display: none;
    }

    &-fire2 {
      display: none;
    }
    
    &-intro {
      width: 100%;
      // margin: 20px auto 0px;
    }

    &-head {
      width: 100%;
      // margin: 100px auto 30px;

      & div:last-child {
        // margin-left: 14px;
      }
    }
    
    &-text {
      width: 100%;
      // margin: 0px auto 10px;
      // font-size: 20px;
    }

  }
    
  &-special {
    // padding: 0px 0px 50px;
    
    &-header {
      // padding-top: 60px;
      // font-size: 32px;
    }

    &-inner {
      width: 100%;
      flex-direction: column;
      // margin: 0px auto 10px;
    }
    
    &-img {
      // width: 160px;
      // margin: 20px 0px;
    }

    &-img2 {
      // margin: 20px 0px 0px 170px;
    }

    &-box {
      // margin-left: 30px;
    }
    
    &-head {
      
    }
    
    &-desc {
      // margin: 14px 0px 0px;
    }
    
  }

  // 活動

  &-activity {
    // padding: 30px 0px 60px;

    &-head {
      // font-size: 32px;
    }

    &-lantain {
      display: none;
    }

    &-fire {
      display: none;
    }

    &-inner {
      width: 100%;
    }

    &-img {
      // margin: 50px 0px 0px;
      width: 280px;
    }

    &-link {
      
    }
  }
    
  &-festival {
    // padding: 30px 0px 30px;
    
    &-header {
      // font-size: 32px;
    }
    
    &-box {
      width: 100%;
      // margin: 20px auto 0px;
    }

    &-box-reverse {

    }
    
    &-img {
      // width: 30%;
    }
    
    &-inner {
      // margin: 0px 50px;
    }
    
    &-head {
      // margin-top: 24px;
      // font-size: 32px;
    }

    &-span {
      // margin: 0px 0px 0px 20px;
    }
    
    &-text {
      // margin: 14px 0px 40px;
    }

    &-arrow {
      // width: 50px;
      // margin: 20px auto;
    }

    &-arrow-reverse {
      
    }
    
  }
  
}

}

</style>
