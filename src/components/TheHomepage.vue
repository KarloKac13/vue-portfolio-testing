<template>
  <div class="display">
    <div class="buttons">
      <button class="button" @click="contactMe">Contact me!</button>
      <button class="button" @click="myStory">My story</button>
      <button class="button" @click="myExpertise">My expertise</button>
    </div>
    <div class="flexColumn">
      <div>Hello and welcome to my portfolio!</div>
      <div>My name is Karlo and I am a frontend developer!</div>
      <div>
        I have experties in HTML, CSS, JavaScript and Vue.js.
        <br />
        All of which you can check out in "My expertise".
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    contactMe() {
      this.$router.replace("/contact");
    },
    myStory() {
      this.$router.replace("/story");
    },
    myExpertise() {
      this.$router.replace("/expertise");
    },
  },
};
</script>

<style scoped>
.display {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
}
.flexColumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  word-spacing: 3px;
  text-align: center;
  font-size: 25px;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.button {
  height: 50px;
  width: 135px;
  color: lemonchiffon;
  border: 4px, solid;
  border-color: lemonchiffon;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
}
.button:hover {
  height: 50px;
  width: 135px;
  color: black;
  border: 4px, solid;
  border-color: black;
  background-color: lemonchiffon;
  cursor: pointer;
  opacity: 0.4;
}
</style>