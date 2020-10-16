import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'

import TabsSimulador from './components/cards/TabsSimulador'
Vue.component('tabs-simulador', TabsSimulador)

import ResumoCard from './components/cards/ResumoCard'
Vue.component('card-resumo', ResumoCard)

import VendasCard from './components/cards/VendasCard'
Vue.component('card-vendas', VendasCard)

import DrVueEcharts from 'dr-vue-echarts';
Vue.use(DrVueEcharts)

// register the plugin on vue
import Toasted from 'vue-toasted';
Vue.use(Toasted)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import AOS from 'aos'
import 'aos/dist/aos.css'

import VueMask from 'v-mask'
Vue.use(VueMask);

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
Vue.component('date-picker', DatePicker)
Vue.component('calendar', Calendar)

import Tabs from 'vue-tabs-component';
Vue.use(Tabs);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
Vue.use(Tooltip);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import {
  faSignOutAlt,
  faUser,
  faLock,
  faCoins,
  faChartLine,
  faCalendarCheck,
  faTicketAlt,
  faCheckCircle,
  faTimesCircle,
  faToggleOff,
  faToggleOn,
  faChartBar,
  faSlidersH,
  faWallet,
  faHandHoldingUsd,
  faClipboardList,
  faFileExcel,
  faSearch,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons'

import vuetify from './plugins/vuetify';

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(
  faSignOutAlt,
  faUser,
  faLock,
  faCoins,
  faChartLine,
  faCalendarCheck,
  faTicketAlt,
  faCheckCircle,
  faTimesCircle,
  faToggleOff,
  faToggleOn,
  faChartBar,
  faSlidersH,
  faWallet,
  faHandHoldingUsd,
  faClipboardList,
  faFileExcel,
  faSearch,
  faCalendarDay
)


Vue.config.productionTip = false

new Vue({
  created() { AOS.init() },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
