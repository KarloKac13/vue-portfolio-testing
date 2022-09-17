<template>
  <div class="div">
    <div>The page you are searching for does not exist</div>
    <div>Maybe start from <router-link to="/">homepage</router-link>?</div>
  </div>
</template>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 30px;
}

a:link,
a:visited {
  text-decoration: none;
  color: black;
}

a:hover {
  color: gray;
}
</style>