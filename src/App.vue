<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap");
html,
body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  color: lemonchiffon;
  background-image: url("C:\Users\karlo\vue-portfolio\public\lG06Zo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "Open Sans", sans-serif;
}

/* route transition */
.route-enter-active,
.route-leave-active {
  transition: opacity 0.4s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>