<template lang="pug">
  div#recebiveis
    section#filtros
      div.inputs.row
        //- vendas
        div.input-group.col-md-4
          div.input-group-prepend(style="max-height: 38px;" )
            span.input-group-text(style="min-width: 80px;z-index: 5;") #[font-awesome-icon.mr-2(icon="calendar-alt")] VENDAS

          date-picker.col-md-9(v-model="data" style="padding: 0px;" mode='range' color="red" :input-props='{ placeholder: "DE __/__/____ ATÉ __/__/____", id: "data-input"}') 


          //- botão de pesquisa
        div.button-group.col-md-2
          button(type='button' style="margin: 0px;" class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon(icon="search")] PESQUISAR

    hr 

    section#resultados.row
      div.calendar.col-md-3.col-sm-12
        calendar(title-position="center" :attributes='attrs' is-expanded)
      
      div.line-table.col-md-9
        div.row.cards-line
          card-vendas(icone="check-circle" titulo="Total Compensado" total="5.750,00") 
          card-vendas(icone="times-circle" titulo="Total á Receber" total="306,00" ) 

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
  name: 'Recebiveis',
  data: () => {
    return {
      attrs: [
        {
          bar: 'green',
          dates: [
            new Date(2020, 7, 1), // Jan 1st
          ],
          popover: {
            label: 'Recebido: R$ 147,88',
            visibility: 'focus'
          },
        },
        {
          bar: 'red',
          dates: [
            new Date(2020, 7, 1), // Jan 1st
            new Date(2020, 7, 10), // Jan 10th
            new Date(2020, 7, 22), // Jan 22nd
          ],
          popover: {
            label: 'A receber: R$ 147,88',
            visibility: 'focus'
          },
        },
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
        // {
        //   text: "Captura",
        //   value: "txCaptura",
        //   align: "left",
        //   divider: false
        // },
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
        // {
        //   text: "Conciliada",
        //   value: "blConciliada",
        //   align: "left",
        //   divider: false
        // }
      ];
    }
  },
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

#recebiveis {
  #resultados {
    display: flex;

    .calendar {
      margin-bottom: 20px;
    }

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
      margin-top: 0px 20px;

      &:hover {
        border-color: $vermelho;
        box-shadow: 0px 0px 20px 0px $vermelho20;
      }

      .thead-light tr {
        border-radius: 10px !important;
      }
      
      tr td {
        color: #999;
        font-size: 12px;
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
  #recebiveis {
    #filtros {
      .inputs .input-group-text {
        border-radius: 10px 10px 0px 0px;
      }
    }

    #resultados {
      flex-direction: column;

      .calendar {
        max-width: 97vw;
        margin: 0px auto 0px auto;
      }

      .line-table {
        .vendas-card {
          margin: 10px auto;
          width: 85%;
        }
      }

      .table {
        margin-top: 40px;
      }
    }
  }
}

// desk only
@media only screen and (min-width: 901px) {
  #recebiveis {
    #resultados {
      display: flex;

      .cards-line {
        display: flex;
        align-items: center;

        margin-bottom: 0px auto 20px auto;
        .vendas-card {
          width: 48%;
        }
      }
    }
  }
}
</style>