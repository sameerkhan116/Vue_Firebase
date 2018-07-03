// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

Vue.filter('snippet', (val) => {
  if (!val || typeof val !== 'string') {
    return '';
  }
  // eslint-disable-next-line
  val = val.slice(0, 200) + '...';
  return val;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
