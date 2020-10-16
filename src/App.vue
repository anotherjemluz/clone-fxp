<template lang="pug">
  #app

    Header

    router-view
    //- v-overlay(:value="overlayAtivo")
    //-   span(v-if="!overlayAtivo")
    //-   b-spinner(v-else)

</template>

<script>
import axios from "axios";
import router from "./config/router";

import Header from "./components/Header";

import { mapState } from "vuex";

export default {
  name: "app",
  components: { Header },
  methods: {
  }
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";
@import "./styles/_tabs.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

// FONTES
@import url('https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;700&display=swap');
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: none;
}

.vuesax-app-is-ltr {
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px  $vermelho-escuro; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $vermelho; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: $vermelho-escuro; 
  }
}

input {
  outline: none;
}

#app {
  background-color: #99999905;
  // font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: "Baloo Chettan 2", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;

  height: auto;
  min-height: 100vh;

  background-attachment: fixed;

  input,
  select {
    text-transform:uppercase;
    transition: all .5s ease-in;
  }

  button {
    transition: all .5s ease-in;
  }
}

.form-group .form-control:focus {
  // border-color: $azul;
  // box-shadow: 0px 10px 20px -13px $azul10;
}

// MOBILE
@media only screen and (max-width: 900px) {
  #app {
    // background-image: url("./assets/mobile-bg.svg");
    background-size: cover;
  }
  .desktop-only {
    display: none !important;
  }
}

// DESKTOP
@media only screen and (min-width: 901px) {
  #app {
    // background-image: url("./assets/desktop-bg.svg");
  }
  .mobile-only {
    display: none !important;
  }
}

// mobile only
@media only screen and (min-width: 901px) {

}

// MOBILE
@media only screen and (max-width: 900px) {

}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  
}

// WIDE
@media only screen and (min-width: 2500px) {
  
}
</style>
