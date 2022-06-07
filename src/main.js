import { createApp } from 'vue'
import App from './App.vue'
import Pays from './views/Pays.vue'
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(fas)

createApp(Pays).use(VueSweetalert2)
createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


