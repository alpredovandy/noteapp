 require('./bootstrap');

window.Vue = require('vue');

Vue.component('navigation', require('./components/Navigation.vue').default);

const app = new Vue({
    el: '#app',
});
