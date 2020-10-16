<template lang="pug">
  div#extrato
    section#filtros
      div.inputs.row
        //- vendas
        div.input-group.col-md-4
          div.input-group-prepend(style="max-height: 38px;" )
            span.input-group-text(style="min-width: 80px;z-index: 5;") #[font-awesome-icon.mr-2(icon="calendar-alt")] VENDAS

          date-picker.col-md-9(v-model="data" style="padding: 0px;" mode='range' color="red" :input-props='{ placeholder: "DE __/__/____ ATÉ __/__/____", id: "data-input"}') 


        //- botão de pesquisa
        div.button-group.col-md-2
          button(type='button' style="margin: 0px;" class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon.mr-2(icon="search")] PESQUISAR

        

    hr 

    section#resultados.row
      div.line-table.col-md-9
        div.row.line-cards
          card-vendas(icone="calendar-day" titulo="Lançamentos Futuros" total="26.472,36" ) 
          card-vendas(icone="wallet" titulo="Saldo disponível" total="0,00" ) 

        v-data-table.table(
          :headers="vendasTableHeaders"
          :items="extrato"
          item-key="item"
          :footer-props="{itemsPerPageOptions:[10,15,25]}"
        )

        //- botão de exportar
        div.button-group.mb-3
          button(type='button' style="margin: 0px;" class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon.mr-2(icon="file-excel")] EXPORTAR

</template>

<script>
export default {
  name: 'Extrato',
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
      extrato: [
        { 
          id: 8, 
          txTipoLancamento: 'Saque',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 27.72,
          nrValorLancamento: 27.72,
          nrSaldoFInal: 0.00,
          isNegative: true,
        },
        { 
          id: 8, 
          txTipoLancamento: 'Pagamento',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 69.90,
          nrValorLancamento: 97.62,
          nrSaldoFInal: 27.72,
          isNegative: true,
          isVlSaldoNegative: true,
        },
        { 
          id: 8, 
          txTipoLancamento: 'Saque',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 0.00,
          nrValorLancamento: 69.90,
          nrSaldoFInal: 69.90,
          isVlLancamentoNegative: true,
          isVlSaldoNegative: true,
        },{ 
          id: 8, 
          txTipoLancamento: 'Saque',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 27.72,
          nrValorLancamento: 27.72,
          nrSaldoFInal: 12.00,
          isNegative: false,
          isVlSaldoNegative: true,
        },
        { 
          id: 8, 
          txTipoLancamento: 'Saque',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 27.72,
          nrValorLancamento: 27.72,
          nrSaldoFInal: 85.00,
          isNegative: false,
          isVlSaldoNegative: true,
        },
        { 
          id: 8, 
          txTipoLancamento: 'Saque',
          dtLancamento: '04/08/2020',
          nrSaldoAnterior: 27.72,
          nrValorLancamento: 27.72,
          nrSaldoFInal: 23.00,
          isNegative: true,
          isVlSaldoNegative: true,
        }
      ]
    };
  },
  computed: {
    vendasTableHeaders() {
      return [
        {
          text: "ID",
          align: "left",
          value: "id",
          divider: false
        },
        {
          text: "Tipo Lançamento",
          value: "txTipoLancamento",
          align: "left",
          divider: false
        },
        {
          text: "Data",
          value: "dtLancamento",
          align: "left",
          divider: false
        },
        {
          text: "Saldo Anterior",
          value: "nrSaldoAnterior",
          align: "left",
          divider: false
        },
        {
          text: "Valor Lançamento",
          value: "nrValorLancamento",
          align: "left",
          divider: false
        },
        {
          text: "Saldo final",
          value: "nrSaldoFInal",
          align: "left",
          divider: false
        }
      ];
    }
  },
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

#extrato {
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
        font-size: 18px;
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
  #extrato {
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
  #extrato {
    #resultados {
      display: flex;
      justify-content: center;

      .line-table {
        .line-cards {
          margin: 0px auto 10px auto;
          .vendas-card {
            // width: 48%;
          }
        }

      }
    }
  }
}
</style>