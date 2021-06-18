import Vue from "vue";
import Router from "vue-router";
import MainMenu from "./components/MainMenu.vue"
//import ColorPicker from "./components/demos/ColorPicker.vue"
import Inspiration from "./components/Inspiration.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    name: "index",
    component: MainMenu,
    props: {
      menu: [{
        name: "programming",
        path: "/programming"
      },{
        name: "photography",
        path: "https://flux.smugmug.com/",
        external: true
      },{
        name: 'writing',
        path: '/writing'
      },{
        name: 'inspiration',
        path: '/inspiration'
      }]
    }
  },{
    path: "/programming",
    name: "programming",
    component: MainMenu,
    props: {
      menu: [{
        name: "gitlab",
        path: "https://gitlab.com/flux2341/"
      },{
        name: "apps",
        path: "/programming/apps"
      },{
        name: "codepen",
        path: "https://codepen.io/flux2341/"
      }]
    }
  },{
    path: "/programming/apps",
    name: "apps",
    component: MainMenu,
    props: {
      menu: [{
        name: "projects",
        path: ""
      },{
        name: "apps",
        path: "/programming/apps"
      },{
        name: "demos",
        path: "/programming/demos"
      }]
    }
  },{
    path: "/programming/demos",
    name: "demos",
    component: MainMenu,
    props: {
      menu: [{
        name: "color picker",
        path: "/programming/demos/colorpicker"
      }]
    }
  },{
    path: "/inspiration",
    name: 'inspiration',
    component: Inspiration
  }/*,{
    path: "/programming/demos/colorpicker",
    name: "color picker",
    component: ColorPicker
  }*/]
});
