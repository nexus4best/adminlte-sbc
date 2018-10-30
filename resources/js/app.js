require('./bootstrap')
window.Vue = require('vue')
import router from './route'
import store from './vuex/store'

const app = new Vue({
    router,
    store,    
    el: '#app'
});
