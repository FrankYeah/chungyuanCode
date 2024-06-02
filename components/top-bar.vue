<template>
  <div class="top">
    <div class="top-box">
      <div class="top-left"></div>
      <div class="top-right">
        <!-- <nuxt-link to="/entry" class="top-text">事務所入口</nuxt-link>
        <nuxt-link to="/about" class="top-text">關於我們</nuxt-link> -->
      </div>
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
        
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  computed: {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

.top {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  padding: 30px 0px;
  background-color: rgba(black, 0.2);
  z-index: 1;

  &-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  &-left {

  }

  &-right {
    display: flex;
  }

  &-text {
    margin-left: 25px;
  }
  

}


@media( max-width: 1023px ){

  .top {


  }
}

</style>
