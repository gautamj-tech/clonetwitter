<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :profileData="profileData" />
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  name: "App",
  computed: {...vuex.mapGetters(["profileData"]),},
  methods: {
    ...vuex.mapActions(['details']),
  },
  
  async created() {
    this.details();
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #aab8c2 transparent;
}
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #aab8c2;
  border-radius: 20px;
  border: transparent;
}
</style>