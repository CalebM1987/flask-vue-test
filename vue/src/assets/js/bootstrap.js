import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';

import { 
  AlertPlugin,
  ButtonPlugin,
  FormSpinbuttonPlugin,
  LayoutPlugin,
  ModalPlugin,
  ToastPlugin,
  SpinnerPlugin
} from 'bootstrap-vue';

const plugins = [
  AlertPlugin,
  ButtonPlugin,
  FormSpinbuttonPlugin,
  LayoutPlugin,
  ModalPlugin,
  ToastPlugin,
  SpinnerPlugin
];

for (const plugin of plugins){
  Vue.use(plugin);
}