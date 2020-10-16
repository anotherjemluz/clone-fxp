<template lang="pug">
  div.resumo-card
    div
      font-awesome-icon(:icon="icone" class="icon")
      p {{ titulo }}
    h3 R$ {{ total }}

</template>

<script>
export default {
  name: 'ResumoCard',
  props: ['icone', 'titulo', 'total']
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

.resumo-card {
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #00000020;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: all 1.5s ease;

  padding: 40px 60px;
  margin: 20px 10px;

  .icon {
    font-size: 30px;
    margin-bottom: 10px;
    color: $vermelho;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 30px 0px $vermelho20;
    border-color: $vermelho;
  }
}

// mobile only
@media only screen and (min-width: 901px) {
}

// MOBILE
@media only screen and (max-width: 900px) {
  .resumo-card {
    padding: 30px 40px;
    text-align: center;
    margin: 10px 10px;

    white-space: nowrap;

    div p { margin: 0px; }

    .icon {
      font-size: 30px;
    }
  } 
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  
}

// WIDE
@media only screen and (min-width: 2500px) {

}
</style>