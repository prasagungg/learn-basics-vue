<template>
  <h1>hello world</h1>
  <SignupForm />
</template>

<script>
import SignupForm from "./components/SignupForm.vue";

export default {
  components: { SignupForm },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eeeeee;
}
</style>
