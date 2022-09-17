<template>
  <div class="display">
    <div class="flexRow">
      <button @click="homepage">Homepage</button>
      <button @click="myExpertise">My expertise</button>
      <button @click="contactMe">Contact me!</button>
    </div>
    <div class="story">
      <div>
        My name is Karlo, I was born 29th of May 1993 in a small town in
        Croatia.
      </div>
      <div>
        I have a high school diploma and I've never actually went too college.
      </div>
      <div>
        After school I started working in a factory that produces handguns and
        assult rifles.
      </div>
      <div>
        You can check it out
        <a 
        type="link" 
        href="https://hs-produkt.hr/" 
        target="_blank">here</a> !
      </div>
      <div>
        After 7 years of working in HS-Produkt I decided to change my job.
        <br />
        So I applied for a job in Akrapovič and they hired me.
      </div>
      <div>
        If you never heard of them, you can also look them up
        <a
          type="link"
          href="https://www.akrapovic.com/en/intro?returnUrl=%2F"
          target="_blank"
          >here</a> !
      </div>
      <div>
        After 1 year or so I was unhappy with my current job and I didn't know
        what
        <br />
        do I actually want to do with my life.
      </div>
      <div>
        Thankfully a friend of mine has introduced me to one programmer and I
        was intrigued.
        <br />
        As a matter of fact, so intrigued that I wanted to learn and work as a
        programmer.
      </div>
      <div>
        He gave me some material (Udemy courses) that cover HTML, CSS,
        JavaScript and Vue.js.
      </div>
      <div>
        So while working in Akrapovič I was also learning these languages. In
        this exact order of course.
      </div>
      <div>
        It took me 2 years to cover all of the courses and the assingments that
        i have recieved
        <br />
        from my, not just a programmer, also my friend.
      </div>
      <div>
        I still have a lot to practice and learn, so I found it a good practice
        to make this "portfolio".
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
    myExpertise() {
      this.$router.replace("/expertise");
    },
  },
};
</script>

<style scoped>
.display {
  height: 70%;
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
a:link,
a:visited {
  color: black;
  text-decoration: none;
}
a:hover {
  color: gray;
}
.story {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 20px;
}
</style>