<template lang="pug">
  div.painel
    div(class="painel")
      router-view

</template>

<script>
export default {
  name: "Painel",
  data: () => {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

// estilo global dos elementos no painel
.painel {
  #filtros {
    border-radius: 10px;
    border: 1px solid transparent;
    transition: all 0.5s;

    margin: 0px 0px;
    padding: 20px 20px 20px 20px;

    .inputs {
      justify-content: center;

      p {
        margin-bottom: 0px;
        align-self: center;
      }

      .vc-bg-white,
      input,
      select {
        border-color: #999;
        border-radius: 0px 10px 10px 0px; 

        &:hover {
          outline: none;
          box-shadow: none;
        }

        &::placeholder {
          color: #777;
          opacity: 0.9;
        }
      }

      // inputs com icones
      .input-group-text {
        background-color: #999;
        color: #fff;
        border-color: #999;
        border-radius: 10px 0px 0px 10px;
        max-height: 38px;
        max-width: 150px !important;
      }

      .input_fake {
        outline: none;
        box-shadow: none;

        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        margin: 10px 0px;
      }

      .drop_flags:hover .list_flags {
        display: flex;
        width: 90%;
        cursor: pointer;
        text-align: left;
        justify-content: flex-start;
      }

      .drop_flags input {
        font-size: 15px;
      }

      .list_flags {
        z-index: 999;
        display: none;
        overflow-y: scroll;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        text-align: left;

        background-color: #fff;
        box-shadow: 0px 0px 10px 0px #00000020;
        border: 1px solid #00000020;
        border-radius: 10px;

        padding: 10px 20px;
        margin-top: 30px;
        max-height: 200px;

        a {
          margin-bottom: 5px;
          text-align: left;
          opacity: .8;
          transition: all .5s ease;
          color: #777;

          padding: 2px 8px;
        
          &:hover {
            opacity: 1;
            cursor: pointer;
            color: #fff;
            border-radius: 5px;

            background-color: $vermelho;
          }
        }
      }

      .bt-pesquisar {
        background-color: $vermelho;
        box-shadow: 0px 0px 10px 5px $vermelho20;
        border: none;
        border-radius: 7px;
        align-self: center;
        color: white;

        &:hover,
        &:focus {
          background-color: $vermelho-escuro;
        }
      }
      

      // &:hover {
      //   box-shadow: 0px 0px 20px -13px rgba(32, 56, 117, 0.35);
      //   border-color: $vermelho20;
      // }
    }
  }
}

// mobile only
@media only screen and (min-width: 901px) {

}

// MOBILE
@media only screen and (max-width: 900px) {
  .painel {
    width: 100vw;
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  .painel {
    width: 95vw;
    margin: 0px auto;
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  
}
</style>