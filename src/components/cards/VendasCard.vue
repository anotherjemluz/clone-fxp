<template lang="pug">
  div.vendas-card
    p.label {{ titulo }}

    div
      font-awesome-icon.mr-3(:icon="icone" class="icon")
      h2 R$ {{ total }}
        
    p(v-show="transacoes") ({{ transacoes }} transações)

</template>

<script>
export default {
  name: 'VendasCard',
  props: ['icone', 'titulo', 'total', 'transacoes']
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

.vendas-card {
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #00000020;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: all 1.5s ease;

  padding: 40px 100px;
  margin: 0px 10px;

  min-width: 280px;

  .label {
    display: inline-block;
    border-radius: 20px;
    border: 1px solid #999;
    color: #999;

    margin-bottom: 10px;
    padding: 0px 40px;
  }

  p {
    margin: 0px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 { margin: 0px; }
  }

  .icon {
    font-size: 30px;
    color: $vermelho;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 30px 0px $vermelho20;
    border-color: $vermelho;
  }
}

// desk only
@media only screen and (min-width: 901px) {
}

// MOBILE
@media only screen and (max-width: 900px) {
  .vendas-card {
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
  .vendas-card {
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

// WIDE
@media only screen and (min-width: 2500px) {

}
</style>