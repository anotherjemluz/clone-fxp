<template lang="pug">
  header
    <!-- Logo -->
    div.logo.desktop-only
      img(src="../assets/icone.svg")
      p | Lojista

    div.logo.mobile-only.mob_toggler(@click="toggleMenu")
      img(src="../assets/icone.svg")
      p | Lojista

    <!-- Menu -->
    nav.desktop-only(v-show="isLogged")
      router-link(to="/painel/resumo") #[font-awesome-icon.mr-2(icon="chart-bar")]  Resumo
      router-link(to="/painel/vendas") #[font-awesome-icon.mr-2(icon="coins")]  Vendas
      router-link(to="/painel/simulador") #[font-awesome-icon.mr-2(icon="sliders-h")]  Simulador 
      router-link(to="/painel/recebiveis") #[font-awesome-icon.mr-2(icon="hand-holding-usd")]  Recebíveis 
      router-link(to="/painel/extrato") #[font-awesome-icon.mr-2(icon="clipboard-list")]  Extrato 

    nav.mobile-only.mob(v-show="isLogged")
      router-link(to="/painel/resumo") #[font-awesome-icon.mr-2(icon="chart-bar")]  Resumo
      router-link(to="/painel/vendas") #[font-awesome-icon.mr-2(icon="coins")]  Vendas
      router-link(to="/painel/simulador") #[font-awesome-icon.mr-2(icon="sliders-h")]  Simulador 
      router-link(to="/painel/recebiveis") #[font-awesome-icon.mr-2(icon="hand-holding-usd")]  Recebíveis 
      router-link(to="/painel/extrato") #[font-awesome-icon.mr-2(icon="clipboard-list")]  Extrato

    <!-- User menu -->
    div.user_dropdown.desktop-only(v-show="isLogged")
      p.user_drop {{ userData.razaoSocial }}
      div.user_menu
        <!-- Select ESTABELECIMENTO -->
        div.marketplace.desktop-only(v-show="isLogged")
          select(class="card-input__input -select") 
            option(value="" disabled selected) CODIGO - ESTABELECIMENTO 
            option(v-for="loja in userData.lojas") {{ loja.codigo }} #[strong {{ loja.nome }}]

        router-link(to="/painel" class="item_menu") Minha conta #[font-awesome-icon.ml-2.icon(icon="user")] 
        router-link(to="/painel" class="item_menu") Alterar senha #[font-awesome-icon.ml-2.icon(icon="lock")] 
        router-link(to="/" class="item_menu") Sair #[font-awesome-icon.ml-2.icon(icon="sign-out-alt")] 

    font-awesome-icon.mobile-only.mob_user_dropdown_toggler(icon="user" class="ml-2 icon" @click="toggleUserMenu" v-show="isLogged")

    div.mobile-only.mob_user_dropdown(v-show="isLogged")
      p.user_drop_mob {{ userData.razaoSocial }}
      div.user_menu_mob
        <!-- Select ESTABELECIMENTO -->
        div.marketplace_mob.mobile-only
          select(class="card-input__input -select") 
            option(value="" disabled selected) CODIGO - ESTABELECIMENTO 
            option(v-for="loja in userData.lojas") {{ loja.codigo }} #[strong {{ loja.nome }}]

        div.links
          router-link(to="/painel" class="item_menu mob_user_dropdown_a") Minha conta #[font-awesome-icon.ml-2.icon(icon="user")] 
          router-link(to="/painel" class="item_menu mob_user_dropdown_a") Alterar senha #[font-awesome-icon.ml-2.icon(icon="lock")] 
          router-link(to="/" class="item_menu mob_user_dropdown_a") Sair #[font-awesome-icon.ml-2.icon(icon="sign-out-alt")]

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState(["isLogged"]),
  data: () => {
    return {
      userData: {
        razaoSocial: 'CASERNA ATIVIDADE FISICA LTDA',
        lojas: [
          { codigo: 35845946335845, nome: 'CROSSFIT SIMBORA', razaoSocial: 'SIMBORA ATIVIDADE FISICA LTDA', },
          { codigo: 35845216335849, nome: 'AÇAI BIRA', razaoSocial: 'BIRA DOCES LTDA', },
          { codigo: 35845216335849, nome: 'JAMES MODAS', razaoSocial: 'JAMES ROUPAS E CALÇADOS LTDA', },
        ]
      }
    }
  },
  methods: {
    signOut() {
      this.$store.commit("setIsLogged", false)
      this.$router.push({ path: "/"})
    },
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    toggleUserMenu() {
      const icon = document.querySelector(".mob_user_dropdown_toggler");
      const menu = document.querySelector(".mob_user_dropdown");

      icon.addEventListener("click", () => {
        icon.classList.toggle("active");
        menu.classList.toggle("active");
      });
    },
    toggle() {
      const toggler = document.querySelector(".mob_toggler");
      const mob = document.querySelector(".mob");

      toggler.addEventListener("click", () => {
        toggler.classList.toggle("active");
        mob.classList.toggle("active");
      });
    },
    everyClick() {
      const mob = document.querySelector(".mob");
      const toggler = document.querySelector(".mob_toggler");
      mob.addEventListener("click", () => {
        toggler.classList.toggle("active");
        mob.classList.toggle("active");
        this.toggleMenu();
      });
    },
    everyClickUser() {
      const a = document.querySelector(".mob_user_dropdown > .user_menu_mob > .links");

      const mob = document.querySelector(".mob_user_dropdown");
      const tg = document.querySelector(".mob_user_dropdown_toggle");

      console.log(a)

      a.addEventListener("click", () => {
        mob.classList.remove("active");
        tg.classList.remove("active");
      });
    }
  },
  mounted() {
    this.toggleUserMenu();
    this.toggle();
    this.everyClick();
    this.everyClickUser();
  }
};  
</script>

<style lang='scss'>
@import "../styles/_variables.scss";

header {
  background-color: #fff;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  border-top: 4px solid $vermelho;

  .logo {
    display: flex;
    align-items: center;

    img{
      cursor: pointer;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 0px #00000020;
    }
  }

  nav {
    .router-link-exact-active {
      background-color: $vermelho;
      color: #fff;
      transition: all .3s ease;

      &:hover {
        color: #fff;
      }
    }

    a { 
      color: #777;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: all .3s ease;

      margin: 0px 3px;
      padding: 5px 10px;

      &:hover {
        text-decoration: none;
        color: $vermelho;
        border-color: $vermelho;
      }
    }
  }

  .user_mob {
    font-size: 20px;

    &:hover {
      color: $vermelho;
    }
  }

  .user_dropdown {
    color: #777;

    p { margin: 0px; }

    .user_menu a {
      display: flex;
      justify-content: flex-end;

      color: #777;
    }
  }

  //  MENU BUTTON
  .mob_toggler,
  .mob_user_dropdown_toggler {
    // position: sticky;
    // padding-top: 30px;
    // top: -20px;
    left: 5%;
    z-index: 999;
    height: 28px;
    // width: 28px;
    outline: none;
    cursor: pointer;
    display: fixed;
    align-items: center;
  }

  .mob_toggler span,
  .mob_toggler span::before,
  .mob_toggler span::after,
  .mob_user_dropdown_toggler span,
  .mob_user_dropdown_toggler span::before,
  .mob_user_dropdown_toggler span::after {
    position: absolute;
    content: "";
    width: 28px;
    height: 2.5px;
    background: $azul;
    border-radius: 20px;
    transition: 300ms cubic-bezier(0.77, 0, 0.17, 1);
  }

  .mob_toggler span::before,
  .mob_user_dropdown_toggler span::before {
    top: -8px;
  }
  .mob_toggler span::after,
  .mob_user_dropdown_toggler span::after {
    top: 8px;
  }
  .mob_toggler.active > span,
  .mob_user_dropdown_toggler > span {
    background: transparent;
  }
  .mob_toggler.active > span::before,
  .mob_toggler.active > span::after,
  .mob_user_dropdown_toggler > span::before,
  .mob_user_dropdown_toggler > span::after {
    background: white;
    top: 0px;
    margin-left: -10px;
  }
  .mob_toggler.active > span::before,
  .mob_user_dropdown_toggler > span::before {
    transform: rotate(-225deg);
  }
  .mob_toggler.active > span::after,
  .mob_user_dropdown_toggler > span::after {
    transform: rotate(225deg);
  }

  // SLIDING MENU PANEL
  .mob{
    position: absolute;
    left: -30%;
    z-index: 998;
    color: $vermelho;
    background-color: #fff;
    /* clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%); */
    width: 0vw;
    height: 100vh;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 100ms left cubic-bezier(0.1, 0, 0.1, 0);
  }

  .mob_user_dropdown {
    position: absolute;
    left: -50%;
    z-index: 998;
    color: $vermelho;
    background-color: #fff;
    /* clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%); */
    width: 0vw;
    height: 100vh;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 100ms left cubic-bezier(0.1, 0, 0.1, 0);

    .user_menu_mob > .links {
      display: flex;
      flex-direction: column;
    }
  }

  .mob p,
  .mob_user_dropdown p {
    font-size: 4.4rem;
    margin-bottom: 1rem;
    color: black;
  }

  .mob.active {
    left: 0;
    width: 100vw;
    padding-top: 100px;
  }

  .mob_user_dropdown.active {
    left: 0;
    width: 100vw;
    padding-top: 100px;
  }

  .mob a,
  .mob_user_dropdown a {
    color: #fff;
    font-size: 1.6rem;
    background-color: $azul !important;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px #32336630 !important;
    margin-bottom: 20px;
    padding: 10px 20px;

    &:hover,
    &:focus {
      background-color: #fff !important;
      color: $azul !important;
      border-color: $azul;
    }
  }
}

// mob only
@media only screen and (max-width: 900px) {
  header {
    padding: 20px 30px 20px 30px;
    // max-height: 0px;

    .logo {
      img { width: 30px;}
      p { 
        // font-weight: bold;
        font-size: 25px;
        margin: 0px 0px 0px 10px; 
      }
    }

    .mob {
      top: 0;
      width: 250px;
      left: -400px;
      padding: 50px;
    }

     .mob_user_dropdown {
      top: 0;
      width: 100px;
      left: -400px;
      padding: 50px;
      
      p {
        font-size: 1.2rem;
      }

      .marketplace_mob {
        border: 1px solid #777;
        border-radius: 10px;

        margin-bottom: 40px;

        select {
          padding: 20px auto !important;
        }
      }

      .user_menu_mob {
        display: flex;
        flex-direction: column;

        a {
          font-size: 1rem;
        }
      }
    }


    .marketplace {
      text-align: center;

      .card-input__input {
        text-align: center;
      }

      select {
        color: #777;
        padding: 5px 40px;
        box-shadow: 0px 0px 20px 0px #00000010;
        border: 1px solid #999;
        border-radius: 10px;

        option { 
          strong {

          }
        }

        &:hover {
          border: 1px solid $vermelho;
          box-shadow: 0px 0px 20px 0px $vermelho20;
        }
      }
    }

    .user_dropdown {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &:hover .user_menu {
        display: flex; 
      }

      .user_menu {
        display: none;
        flex-direction: column;
        position: absolute;


        text-align: right;
        background-color: #fff;
        box-shadow: 0px 0px 10px 0px #00000020;
        border: 1px solid #00000020;
        border-radius: 10px;
      }
    }

  }
}

// desk only
@media only screen and (min-width: 901px) {
  header {
    padding: 20px 7vw 10px 7vw;
    max-height: 80px;

    .mob,
    .mob_toggler {
      display: none;
    }

    .logo {
      img { width: 30px;}
      p { 
        // font-weight: bold;
        font-size: 25px;
        margin: 0px 0px 0px 10px; 
      }
    }

    nav {
      a {
        font-size: 14px;
      }
    }

    .marketplace {
      text-align: center;
      margin-bottom: 20px;

      .card-input__input {
        text-align: center;
      }

      select {
        color: #777;
        padding: 5px 40px;
        box-shadow: 0px 0px 10px 0px #00000000;
        border: 1px solid #999;
        border-radius: 10px;

        option { 
          &:hover {
            background-color: $vermelho;
          }
        }

        &:hover {
          border: 1px solid $vermelho;
          box-shadow: 0px 0px 10px 0px $vermelho20;
        }
      }
    }

    .user_dropdown {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &:hover .user_menu {
        display: flex; 
      }

      .user_menu {
        display: none;
        flex-direction: column;
        position: absolute;

        text-align: right;
        background-color: #fff;
        box-shadow: 0px 0px 10px 0px #00000020;
        border: 1px solid #00000020;
        border-radius: 10px;

        a { padding-right: 20px;}
      }
    }

  }
}

@media only screen and (min-width: 901px) and (max-width: 1500px) {
  header {
    padding: 20px 40px 20px 40px;
    // max-height: 80px;

    box-shadow: 0px 0px 10px 0px #77777720;

    .logo {
      img { width: 30px;}
      p { 
        // font-weight: bold;
        font-size: 25px;
        margin: 0px 0px 0px 10px; 
      }
    }

    .user_dropdown {
      p { 
        margin: 0px;
        cursor: pointer;
      }

      .user_menu {
        z-index: 999;
        top: 55px;
        // width: 400px;
        padding: 10px 20px 10px 20px;

        .marketplace {
          display: flex;
          justify-content: flex-end;
          margin: 0px 0px 10px 0px;
        }

        a {
          text-decoration: none;
          transition: all .3s ease;

          margin: 5px 0px;
          .icon {
            margin-top: 3px;
          }

          &:hover {
            color: $vermelho;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1501px) and (max-width: 2500px) {
  header {
    padding: 20px 40px 20px 40px;
    max-height: 100px;

    box-shadow: 0px 0px 10px 0px #77777720;

    .logo {
      img { width: 30px;}
      p { 
        // font-weight: bold;
        font-size: 25px;
        margin: 0px 0px 0px 10px; 
      }
    }

    .user_dropdown {
      p { 
        margin: 0px;
        cursor: pointer;
      }

      .user_menu {
        z-index: 999;
        top: 55px;
        padding: 10px;

        .marketplace {
          display: flex;
          justify-content: flex-end;
          margin: 0px 0px 10px 0px;
        }

        a {
          text-decoration: none;
          transition: all .3s ease;

          margin: 5px 0px;
          .icon {
            margin-top: 3px;
          }

          &:hover {
            color: $vermelho;
          }
        }
      }
    }
  }
}
</style>
