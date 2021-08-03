<template>
     <v-app id="app">
       <v-main id="main">
          <router-view></router-view>
       </v-main>
   </v-app>
 </template>

<script>

export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
  }),
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

#main {
  background-color:#FB9EB6 !important;
}
.v-subheader{
  font-size:18px;
  padding-left: 0;
}
.v-header{
  text-align:center;
  font-size:25px;
  font-weight:bold;
  margin-left: 50%;
  transform: translateX(-50%)

}
#app {
  font-family: 'Roboto', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{
  background-color:#FB9EB6 !important;
font-family: 'Roboto', sans-serif;
}
.v-messages__message__ {
    color: red;
}
</style>
