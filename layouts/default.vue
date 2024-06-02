<template>
  <div class="default">
    <topBar v-if="currentRoute != '/north-sound/'" />
    <div class="default-box">
      <nuxt/>
    </div>
    <bottomBar />
  </div>
</template>

<script>

export default {
  components: {
    topBar: require('~/components/top-bar.vue').default,
    bottomBar: require('~/components/bottom-bar.vue').default,
  },
  props: {

  },
  data () {
    return {
      currentRoute: ''
    }
  },
  async mounted () {
    this.currentRoute = this.$route.path
    console.log("當前路徑是：", this.currentRoute)

  },
  computed: {
    
  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.default {
  
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, img, ins, kbd, q, s, samp,
small, strike,  sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
	line-height: 1;
  margin: 0px;
  padding: 0px;
  // font-family: 'Noto Sans TC', 'Noto Sans SC' ,sans-serif;
  font-size: 16px;
  line-height: 1.3;
  color: white;
  font-family: 'SF';
  // background-color: #000019;
  // font-family: 'SF Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,PingFang TC,Hiragino Sans GB,Microsoft JhengHei,sans-serif!important';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
      opacity: 0.8;
  }
}

input {
  padding: 0px;
  margin: 0px;
  outline: none;
  border: 0px;
 -webkit-appearance: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8D8D8D;
  }
}

textarea {
  font-family: 'SF';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #D2D2D2;
  }
}

button {
  border: 0px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
}

input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

@media( max-width: 1023px ){

  .default {
    
  }

}

</style>
