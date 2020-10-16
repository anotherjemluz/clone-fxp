<template lang="pug">
  div#simulador
    section#filtros
      div.inputs.row
        //- status
        div.input-group.col-md-3
          div.input-group-prepend
            span.input-group-text VALOR
          
          input(class="form-control" v-model="status" placeholder="0,00")
        //- botão de pesquisa
        div.button-group.col-md-2
          button(type='button' class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon(icon="search")] PESQUISAR

    hr 

    section#resultados
      tabs-simulador()
        template(v-slot:eloContent)
            

        template(v-slot:visaContent)
        template(v-slot:amexContent)
        template(v-slot:hiperContent)
        template(v-slot:dinnersContent)
        template(v-slot:desconhecidoContent)

</template>

<script>
export default {
  name: 'Simulador',
  data() {
    return {
      toggleOff: true,
      terminal: '',
      tipo: '',
      status: '',
      bandeiras: [
        { nome: 'DESCONHECIDA' },
        { nome: 'VISA' },
        { nome: 'MASTERCARD' },
        { nome: 'HIPERCARD' },
        { nome: 'AMEX' },
        { nome: 'CREDISHOP' },
        { nome: 'SODEXO' },
        { nome: 'LIBERCARD' },
        { nome: 'GOODCARD' },
        { nome: 'AURA' },
        { nome: 'LOSANGO' },
        { nome: 'ELO' },
        { nome: 'SOROCRED' },
        { nome: 'CABAL' },
        { nome: 'DINERS' },
        { nome: 'AGIPLAN' },
        { nome: 'FORTBRASIL' },
        { nome: 'CREDZ' }
      ],
      bandeiraPesquisa: '',
      bandeiraFinal: '',
      nsu: [
        { codigo: 74358945 },
        { codigo: 52385445 },
        { codigo: 96358945 },
        { codigo: 82358563 }
      ],
      vendas: [
        { 
          nrNsu: 123584698, 
          imgFlag: require("@/assets/elo.svg"),
          dtVenda: '04/08/2020',
          txCaptura: 'POS',
          txNatureza: 'VENDA A CREDITO',
          nrValorBruto: 3828.00,
          nrTaxa: 110.28,
          nrLiquido: 3717.72,
          nrRecebido: 0.00,
          blConciliada: true
        },
        { 
          nrNsu: 123584698, 
          imgFlag: require("@/assets/mastercard.svg"),
          dtVenda: '04/08/2020',
          txCaptura: 'POS',
          txNatureza: 'VENDA A CREDITO',
          nrValorBruto: 3828.00,
          nrTaxa: 110.28,
          nrLiquido: 3717.72,
          nrRecebido: 0.00,
          blConciliada: true
        },
        { 
          nrNsu: 123584698, 
          imgFlag: require("@/assets/visa.svg"),
          dtVenda: '04/08/2020',
          txCaptura: 'POS',
          txNatureza: 'VENDA A CREDITO',
          nrValorBruto: 3828.00,
          nrTaxa: 110.28,
          nrLiquido: 3717.72,
          nrRecebido: 0.00,
          blConciliada: true
        },
        { 
          nrNsu: 123584698, 
          imgFlag: require("@/assets/mastercard.svg"),
          dtVenda: '04/08/2020',
          txCaptura: 'POS',
          txNatureza: 'VENDA A CREDITO',
          nrValorBruto: 3828.00,
          nrTaxa: 110.28,
          nrLiquido: 3717.72,
          nrRecebido: 0.00,
          blConciliada: true
        },
        { 
          nrNsu: 123584698, 
          imgFlag: require("@/assets/elo.svg"),
          dtVenda: '04/08/2020',
          txCaptura: 'POS',
          txNatureza: 'VENDA A CREDITO',
          nrValorBruto: 3828.00,
          nrTaxa: 110.28,
          nrLiquido: 3717.72,
          nrRecebido: 0.00,
          blConciliada: true
        }
      ]
    };
  },
  computed: {
    filteredFlags () {
      return this.bandeiras.filter((item) => {
          return item.nome.toLowerCase().indexOf(this.bandeiraPesquisa.toLowerCase()) > -1
        }
      ) 
    },
  },
  methods: {
    toggle() {
      this.toggleOff = !this.toggleOff
    },
    showAllFlags() {
      this.bandeiraPesquisa = ``
    },
    setFlag(nome) {
      this.bandeiraPesquisa = ``
      this.bandeiraFinal = nome
    },
  }
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

#simulador {
  display: flex;
  flex-direction: column;

  hr { 
    border-color: $vermelho20; 
    margin: 0px;
  }

  #resultados {
    .line-cards {
      display: flex;
      justify-content: center;
      margin: 20px 0px;
    }

    .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
      color: #777;
      background-color: transparent;
      border: none;
      text-align: left;
      font-size: 16px;
      padding: 20px 10px 10px 10px;
    }

    .table {
      background-color: transparent;
      border: 1px solid #77777720;
      box-shadow: 0px 0px 10px 0px #77777720;
      border-radius: 10px;
      transition: all .3s ease-in;

      padding: 0px 50px 20px 50px;
      margin-top: 0px;

      &:hover {
        border-color: $vermelho20;
        // box-shadow: 0px 0px 20px 0px $vermelho20;
      }

      .thead-light tr {
        border-radius: 10px !important;
      }
      
      tr td {
        color: #999;
        font-size: 16px;
        text-align: left;
        align-items: center;

        padding: 10px 10px;

        p {
          margin-top: 7px;
        }

        // botão pesquisar
        .bt-expandir,
        .bt-baixar {
          background-color: $vermelho;
          box-shadow: 0px 0px 10px 5px $vermelho20;
          border: none;
          border-radius: 7px;
          align-self: center;

          &:hover,
          &:focus {
            background-color: $vermelho-escuro;
          }
        }
      }
    }
  }
}

// mobile only
@media only screen and (max-width: 900px) {
  #simulador {
    #filtros {
      .inputs .top {
        border-radius: 10px 10px 0px 0px;
      }
    }

    #resultados {
      .tabs-component-tabs {
        display: flex !important;
        border: none;
        overflow-x: scroll;
        // margin-bottom: 5px;
      }
    }
  }
}

// desk only
@media only screen and (min-width: 901px) {
  #simulador {
  }
}

// desk
@media only screen and (min-width: 901px) and (max-width: 1500px) {
}

// wide
@media only screen and (min-width: 1501px) and (max-width: 1500px) {

}
</style>