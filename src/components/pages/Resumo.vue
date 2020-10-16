<template lang="pug">
  div#resumo
    section#filtros
      div.inputs.row
        //- vendas
        div.input-group.col-md-4
          div.input-group-prepend(style="max-height: 38px;" )
            span.input-group-text(style="min-width: 80px;z-index: 5;") #[font-awesome-icon.mr-2(icon="calendar-alt")] VENDAS

          date-picker.col-md-9(v-model="data" style="padding: 0px;" mode='range' color="red" :input-props='{ placeholder: "DE __/__/____ ATÉ __/__/____", id: "data-input"}') 

        

        //- botão de pesquisa
        div.button-group.col-md-2
          button(type='button' class="btn btn-secondary bt-pesquisar" @click="filtrar" value="") #[font-awesome-icon(icon="search")] PESQUISAR

    hr 

    section.cards-count
      card-resumo(icone="coins" titulo="Vendas confirmadas" total="19.000,00") 
      card-resumo(icone="ticket-alt" titulo="Ticket médio" total="0,00") 
      card-resumo(icone="chart-line" titulo="Recebíveis futuros" total="19,056,38") 
      card-resumo(icone="calendar-check" titulo="Recebíveis hoje" total="0,00") 

      div(style="min-width: 10px;")

    //- hr

    section.cards-line  
      div.card
        h3 Bandeiras
        pie-chart.pie-chart.mobile-only(:data="bandeiras" :animation="true" :label="true" :emphasis-label="false" :tooltip="true" :legend="true" radius="40%" label-position="outside" pie-style="pizza" legend-position="bottom" :theme="purple-passion")
        pie-chart.pie-chart.desktop-only(:data="bandeiras" :animation="true" :label="true" :emphasis-label="true" :tooltip="true" :legend="true" label-position="outside" pie-style="pizza" legend-position="bottom" :theme="purple-passion")

      div.card
        h3 Total a receber #[br] R$ 19.000,00
        pie-chart.pie-chart.mobile-only(:data="modalidade" label-position="center" :legend="true" pie-style="donut" :theme="purple-passion")
        pie-chart.pie-chart.desktop-only(:data="modalidade" label-position="center" pie-style="donut" legend :theme="purple-passion")

      div.card
        h3 Recebíveis da semana
        div.semana-list
          div.semana-item(v-for="venda in vendas") 
            p {{ venda.dia }}
            p {{ venda.valor }}

      div(style="min-width: 10px;")

    //- hr
    
    section.cards-line.grow-3
      div.card  
        h3 Vendas no mês
        bar-chart.bar-chart.mobile-only(:data="vendasMes" rainbow width="100%" height="100%")
        bar-chart.bar-chart.desktop-only(:data="vendasMesDesk" rainbow width="100%" height="100%")

      div(style="min-width: 10px;")
      

</template>

<script>
export default {
  name: 'Resumo',
  data() {
    return {
      vendasMes: [{
        name: "vendas",
        data: [
          { label: 'fev/19', value: 1701 },
          { label: 'mar/19', value: 40642 },
          { label: 'abr/19', value: 806 },
          { label: 'mai/19', value: 3564 },
          { label: 'jun/19', value: 40642 },
          { label: 'jul/19', value: 1364 },
          { label: 'ago/19', value: 40642 },
          { label: 'set/19', value: 4464 },
          { label: 'out/19', value: 20642 },
          { label: 'nov/19', value: 3264 },
          { label: 'dez/19', value: 706 },
        ]
      }],
      vendasMesDesk: [{
        name: "vendas",
        data: [
          { label: 'fev/19', value: 1701 },
          { label: 'mar/19', value: 40642 },
          { label: 'abr/19', value: 806 },
          { label: 'mai/19', value: 3564 },
          { label: 'jun/19', value: 40642 },
          { label: 'jul/19', value: 1364 },
          { label: 'ago/19', value: 40642 },
          { label: 'set/19', value: 4464 },
          { label: 'out/19', value: 20642 },
          { label: 'nov/19', value: 3264 },
          { label: 'dez/19', value: 706 },
          { label: 'jan/20', value: 1701 },
          { label: 'fev/20', value: 1701 },
          { label: 'mar/20', value: 40642 },
          { label: 'abr/20', value: 806 },
          { label: 'mai/20', value: 3564 },
          { label: 'jun/20', value: 40642 },
          { label: 'jul/20', value: 1364 },
        ]
      }],
      bandeiras: [
        {
          name: "Elo",
          value: 300
        },
        {
          name: "Visa",
          value: 15000
        },
        {
          name: "Mastercard",
          value: 20000
        },
        {
          name: "Hipercard",
          value: 8000
        }
      ],
      modalidade: [
        {
          name: "Crédito",
          value: 7000,
        },
        {
          name: "Débito",
          value: 12000
        }
      ],
      vendas: [
        { dia: 'segunda', valor: '20,00'},
        { dia: 'terça', valor: '20,00'},
        { dia: 'quarta', valor: '20,00'},
        { dia: 'quinta', valor: '20,00'},
        { dia: 'sexta', valor: '20,00'}
      ]
    };
  },
  computed: {
    vendasTableHeaders() {
      return [
        {
          text: "Dia",
          align: "center",
          value: "txDia",
          // width: 40,
          divider: true,
        },
        {
          text: "Valor",
          value: "nrValor",
          align: "CENTER",
          // width: 120,
          divider: true,
        }
      ];
    }
  },
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

#resumo {
  display: flex;
  flex-direction: column;

  hr { 
    border-color: $vermelho20; 
    margin: 0px;
  }

  .cards-count {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .cards-line {
    display: flex;
    margin: 40px 0px;

    .card {
      // text-align: left;
      box-shadow: 0px 0px 5px 0px #00000020;
      border-radius: 20px;
      border: 1px solid transparent;
      transition: all 1.5s ease;

      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 30px 0px $vermelho20;
        border-color: $vermelho;
      }

      .semana-list {
        margin-top: 20px;

        .semana-item {
          display: flex;
          text-align: left;
          border-bottom: 1px solid #99999950;

          &:first-child {
            border-left: 3px solid $vermelho;
          }

          padding-left: 10px;

          p { 
            width: 50%; 
            margin: 15px 0px;
          }
        }
      }
    }
  }
}

// mobile only
@media only screen and (max-width: 900px) {
  #resumo {
    #filtros {
      .inputs .input-group-text {
        border-radius: 10px 10px 0px 0px;
      }
    }

    .cards-count {
      overflow-x: scroll;
      justify-content: flex-start;

      margin-left: 10px;
    }

    .cards-line {
      display: flex;
      overflow-x: scroll;
      margin: 10px 0px;

      margin-left: 10px;

      .card {
        min-width: 90vw;
        min-height: 400px;

        padding: 40px 40px 40px 40px;
        margin: 10px 10px;

        .pie-chart {
          min-width: 100%;
          height: 90%;
        }

        .bar-chart {
          min-width: 100%;
          min-height: 90%;
        }
      }
    }

    .grow-3 {
      .card {
        min-width: 90vw;
        padding: 40px 40px 40px 20px;
      }
    }
  }
}

// desk only
@media only screen and (min-width: 901px) {
  #resumo {
    .cards-count {
      overflow-x: scroll;
      justify-content: center;
      margin-top: 10px;
    }

    .cards-line {
      display: flex;
      justify-content: center;
      overflow-x: scroll;
      margin: 10px 0px;

      margin-left: 10px;

      .card {
        min-width: 27vw;
        min-height: 300px;

        padding: 40px 40px 40px 40px;
        margin: 10px 10px;

        .pie-chart {
          min-width: 100%;
          height: 90%;
        }

        .bar-chart {
          min-width: 100%;
          min-height: 90%;
        }
      }
    }

    .grow-3 {
      .card {
        min-width: 95%;
        min-height: 400px;
        padding: 40px 40px 40px 20px;
      }
    }
  }
}

// desk
@media only screen and (min-width: 901px) and (max-width: 1500px) {
}

// wide
@media only screen and (min-width: 1501px) and (max-width: 1500px) {

}
</style>