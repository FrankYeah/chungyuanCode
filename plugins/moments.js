// 全局加载组件
import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'

// 使用中文时间
moment.locale('zh-cn')
Vue.prototype.$moment = moment
