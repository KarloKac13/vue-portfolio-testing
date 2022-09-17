<template>
  <div class="display">
    <div>
      <button class="button" @click="homepage">Back to homepage</button>
    </div>
    <div id="submitted" value=""></div>
    <div id="redirect" value=""></div>
    <form class="flexInput">
      <input
        id="name"
        type="text"
        class="size"
        placeholder="Your firstname"
        @click="inputSelectName"
      />
      <input
        id="lastname"
        type="text"
        class="size"
        placeholder="Your lastname"
        @click="inputSelectLastName"
      />
      <input
        id="email"
        type="email"
        class="size"
        placeholder="Your e-mail"
        @click="inputSelectEmail"
      />
      <textarea
        id="inquiry"
        type="text"
        class="textArea"
        placeholder="Your inquiry"
        maxlength="250"
        @click="inputSelectInquiry"
      />
      <div>
        <button class="button" @click.prevent="submitForm()">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    homepage() {
      this.$router.replace("/");
    },
    submitForm() {
      const data = {
        name: document.getElementById("name").value.trim(),
        lastname: document.getElementById("lastname").value.trim(),
        email: document.getElementById("email").value.trim(),
        inquiry: document.getElementById("inquiry").value.trim(),
      };

      if (data.name === "") {
        document.getElementById("name").style.borderColor = "#C21010";
        document.getElementById("name").style.opacity = "0.7";
        document.getElementById("name").value = "Please enter a valid name";
      }
      if (data.lastname === "") {
        document.getElementById("lastname").style.borderColor = "#C21010";
        document.getElementById("lastname").style.opacity = "0.7";
        document.getElementById("lastname").value =
          "Please enter a valid lastname";
      }
      if (data.email === "" || !data.email.includes("@")) {
        document.getElementById("email").style.borderColor = "#C21010";
        document.getElementById("email").style.opacity = "0.7";
        document.getElementById("email").value = "Please enter a valid email";
      }
      if (data.inquiry === "") {
        document.getElementById("inquiry").style.borderColor = "#C21010";
        document.getElementById("inquiry").style.opacity = "0.7";
        document.getElementById("inquiry").value =
          "Please enter a valid inquiry";
      }
      if (
        data.name !== "" &&
        data.lastname !== "" &&
        data.email !== "" &&
        data.email.includes("@") &&
        data.inquiry !== ""
      ) {
        document.getElementById("submitted").innerText =
          "Form was succesfully submited!";
        document.getElementById("redirect").innerText =
          "You will be redirected to homepage!";
        setTimeout(() => this.homepage(), 2500);
      }
    },
    inputSelectName() {
      if (
        document.getElementById("name").value === "Please enter a valid name"
      ) {
        document.getElementById("name").style.borderColor = "gray";
        document.getElementById("name").style.background = "black";
        document.getElementById("name").style.opacity = "0.4";
        document.getElementById("name").value = "";
      }
    },
    inputSelectLastName() {
      if (
        document.getElementById("lastname").value ===
        "Please enter a valid lastname"
      ) {
        document.getElementById("lastname").style.borderColor = "gray";
        document.getElementById("lastname").style.background = "black";
        document.getElementById("lastname").style.opacity = "0.4";
        document.getElementById("lastname").value = "";
      }
    },
    inputSelectEmail() {
      if (
        document.getElementById("email").value === "Please enter a valid email"
      ) {
        document.getElementById("email").style.borderColor = "gray";
        document.getElementById("email").style.background = "black";
        document.getElementById("email").style.opacity = "0.4";
        document.getElementById("email").value = "";
      }
    },
    inputSelectInquiry() {
      if (
        document.getElementById("inquiry").value ===
        "Please enter a valid inquiry"
      ) {
        document.getElementById("inquiry").style.borderColor = "gray";
        document.getElementById("inquiry").style.background = "black";
        document.getElementById("inquiry").style.opacity = "0.4";
        document.getElementById("inquiry").value = "";
      }
    },
  },
};
</script>

<style scoped>
.display {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 75%;
  align-items: center;
  justify-content: space-around;
}
.flexInput {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 75%;
  align-items: center;
  justify-content: center;
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
.size {
  margin-bottom: 15px;
  height: 100px;
  width: 500px;
  background-color: rgb(0, 0, 0);
  opacity: 0.4;
}
.textArea {
  opacity: 0.4;
  background-color: black;
  margin-bottom: 10px;
  height: 600px;
  width: 502px;
}

::placeholder {
  color: lemonchiffon;
}

input,
select,
textarea {
  color: lemonchiffon;
}

textarea:focus,
input:focus {
  color: lemonchiffon;
}
</style>