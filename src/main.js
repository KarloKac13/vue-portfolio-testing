import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ContactForm from "./components/ContactForm.vue";
import TheHomepage from "./components/TheHomepage.vue";
import MyStory from "./components/MyStory.vue";
import MyExpertise from "./components/MyExpertise.vue";
import NotFound from "./components/NotFound.vue"

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/homepage" },
    { path: "/homepage", component: TheHomepage },
    { path: "/contact", component: ContactForm },
    { path: "/story", component: MyStory },
    { path: "/expertise", component: MyExpertise },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

app.use(router);
app.mount('#app');