<template>
  <div class="display">
    <div class="flexRow">
      <button @click="homepage">Homepage</button>
      <button @click="contactMe">Contact me!</button>
      <button @click="myStory">My story</button>
    </div>
    <div class="flexColumn">
      <div class="textTitle"><strong>HTML</strong></div>
      <div>What is HTML?</div>
      <div>
        HTML stands for HyperText Markup Language. It is used so documents can
        be displayed in web browser.
      </div>
      <br />
      <div class="textTitle"><strong>CSS</strong></div>
      <div>What is CSS?</div>
      <div>
        CSS stands for Cascading Style Sheets and is used for "decoration" of a
        web page.
      </div>
      <br />
      <div class="textTitle"><strong>JavaScript</strong></div>
      <div>What is JavaScript?</div>
      <div>
        JavaScript is dynamically typed and single threaded programming language
        <br />
        that is used to create an interactive web pages and applications.
      </div>
      <br />
      <div class="textTitle"><strong>Vue.js</strong></div>
      <div>What is Vue.js?</div>
      <div>
        Vue is a JavaScript framework which is used for
        <br />
        building user interfaces and building SPA (Single-Page-Applications).
      </div>
      <div>
        It basically gives you easier way to combine HTML, CSS and JS,
        simplifying some functionality.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    homepage() {
      this.$router.replace("/");
    },
    contactMe() {
      this.$router.replace("/contact");
    },
    myStory() {
      this.$router.replace("/story");
    },
  },
};
</script>

<style scoped>
.display {
  height: 50%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flexRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.flexColumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 50%;
}
.textTitle {
  text-decoration: underline;
}
button {
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
button:hover {
  height: 45px;
  width: 135px;
  color: black;
  border: 4px, solid;
  border-color: black;
  background-color: lemonchiffon;
  cursor: pointer;
  opacity: 0.4;
}
</style>