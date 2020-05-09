import Vue from 'vue'
Vue.prototype.$isHalfWidthCharacters = (className) => {
    return className.match(match(/^[A-Za-z0-9]*$/));
}