<template lang="pug">
  div#vendas
    section#filtros
      div.inputs.row
        //- vendas
        div.input-group.col-md-4
          div.input-group-prepend(style="max-height: 38px;" )
            span.input-group-text.top(style="min-width: 80px;z-index: 5;") #[font-awesome-icon.mr-2(icon="calendar-alt")] VENDAS

          date-picker.col-md-9.bottom(v-model="data" style="padding: 0px;" mode='range' color="red" :input-props='{ placeholder: "DE __/__/____ ATÉ __/__/____", id: "data-input"}') 

        //- terminal
        div.input-group.col-md-3
          div.input-group-prepend
            span.input-group-text TERMINAL
          
          select(class="form-control" v-model="terminal" )
            option(value="" selected) TODOS
            option(value="6C53RDF44") 6C53RDF44
            option(value="6C53RDF44") 6C53RDF44
        
        //- tipo
        div.input-group.col-md-2
          div.input-group-prepend
            span.input-group-text TIPO
          
          select(class="form-control" v-model="tipo" )
            option(value="" selected) TODOS
            option(value="CREDITO") CRÉDITO
            option(value="DEBITO") DÉBITO

      div.inputs.row
        //- status
        div.input-group.col-md-2
          div.input-group-prepend
            span.input-group-text STATUS
          
          select(class="form-control" v-model="status" )
            option(value="" selected) TODOS
            option(value="CREDITO") CONFIRMADO
            option(value="DEBITO") CANCELADO

        //- bandeira
        div.input-group.col-md-3.drop_flags
          div.input-group-prepend
            span.input-group-text #[font-awesome-icon.user_icon(icon="user" @click="showAllFlags()")]

          input.form-control.dropdown_flags(v-model="bandeiraFinal" placeholder="TODOS" style="height: 38px;")
          div.list_flags(v-show="bandeiras")
            input.form-control.input_fake(style="border-right: 1px solid transparent;" placeholder="PESQUISAR" v-model="bandeiraPesquisa")
            a(v-for="bandeira in filteredFlags" @click="setFlag(bandeira.nome)") {{ bandeira.nome }}

        //- nsu
        div.input-group.col-md-2
          div.input-group-prepend
            span.input-group-text NSU
          
          select(class="form-control" v-model="status" )
            option(value="" selected) TODOS
            option(value="CREDITO" v-for="item in nsu") {{ item.codigo }}

        //- botão de pesquisa
        div.button-group.col-md-2
          button(type='button' class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon(icon="search")] PESQUISAR

    hr 

    section#resultados
      div.line-cards.row
        card-vendas(icone="check-circle" titulo="Vendas confirmadas" total="4.000,00" transacoes="5") 
        card-vendas(icone="times-circle" titulo="Vendas canceladas" total="0,00" transacoes="0") 

      hr

      div.line-table
        v-data-table.table(
          :headers="vendasTableHeaders"
          :items="vendas"
          item-key="item"
          :footer-props="{itemsPerPageOptions:[10,15,25]}"
        )

          template(v-slot:item.imgFlag="{ item }")
            img.table-item(:src="item.imgFlag")


</template>

<script>
export default {
  name: 'Vendas',
  data() {
    return {
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
    vendasTableHeaders() {
      return [
        {
          text: "NSU",
          align: "left",
          value: "nrNsu",
          divider: false
        },
        {
          text: "Bandeira",
          value: "imgFlag",
          align: "left",
          divider: false
        },
        {
          text: "Data",
          value: "dtVenda",
          align: "left",
          divider: false
        },
        {
          text: "Captura",
          value: "txCaptura",
          align: "left",
          divider: false
        },
        {
          text: "Natureza",
          value: "txNatureza",
          align: "left",
          divider: false
        },
        {
          text: "Vl Bruto",
          value: "nrValorBruto",
          align: "left",
          divider: false
        },
        {
          text: "Taxa Cartão",
          value: "nrTaxa",
          align: "left",
          divider: false
        },
        {
          text: "Vl Liquido",
          value: "nrLiquido",
          align: "left",
          divider: false
        },
        {
          text: "Vl Recebido",
          value: "nrRecebido",
          align: "left",
          divider: false
        },
        {
          text: "Conciliada",
          value: "blConciliada",
          align: "left",
          divider: false
        }
      ];
    }
  },
  methods: {
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

#vendas {
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
      background-color: #fff;
      border: 1px solid #77777720;
      box-shadow: 0px 0px 10px 0px #77777720;
      border-radius: 10px;
      transition: all .3s ease-in;

      padding: 0px 50px 20px 50px;
      margin-top: 20px;

      &:hover {
        border-color: $vermelho;
        box-shadow: 0px 0px 20px 0px $vermelho20;
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
  #vendas {
    #filtros {
      .inputs .top {
        border-radius: 10px 10px 0px 0px;
      }
    }
  }
}

// desk only
@media only screen and (min-width: 901px) {
  #vendas {

  }
}

// desk
@media only screen and (min-width: 901px) and (max-width: 1500px) {
}

// wide
@media only screen and (min-width: 1501px) and (max-width: 1500px) {

}
</style>