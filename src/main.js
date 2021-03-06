import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import './plugins/element.js'
// import "../axios"
import animated from "animate.css"
// import Vue from "vue"
import mavonEditor from "mavon-editor"
import "mavon-editor/dist/css/index.css"

import APlayer from '@moefe/vue-aplayer';

import vueParticles from "vue-particles"

import "github-markdown-css/github-markdown.css"

import "./assets/font_icon/iconfont.css"
import "./assets/font_icon/iconfont"

import md5 from "js-md5"
Vue.prototype.$md5=md5;

// import API from "./API"

// import animated from "animate.css"
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/test'


Vue.use(vueParticles);

Vue.use(mavonEditor);
Vue.use(animated);
// Vue.use()
Vue.use(APlayer, {
    defaultCover: 'https://github.com/u3u.png',
    productionTip: true,
});


// console.log("axios.defaults.baseURL = ",axios.defaults.baseURL);
    // if (process.env.NODE_ENV === "'dev'") {
    //     axios.defaults.baseURL = 'test'
    // } else {
    //     axios.defaults.baseURL = 'http://49.235.198.134:9090/test'
    // }

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')