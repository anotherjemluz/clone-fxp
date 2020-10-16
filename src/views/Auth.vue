<template lang="pug">
  div#signinSignout( 
    data-aos="fade-up" 
    data-aos-duration="300"  
    data-aos-anchor-placement="top-bottom")

    h1 Login

    //- SIGNIN FORM
    div(v-show="isSignIn" 
      data-aos="fade-up" 
      data-aos-duration="300"  
      data-aos-anchor-placement="top-bottom")

      form(@submit.prevent="signIn()" class="form-box")
        //- INPUT EMAIL
        div(class="form-group") 
          input(
            type="email" 
            class="form-control" 
            placeholder="Seu e-mail" 
            v-model='user.txEmail')

        //- INPUT PASSWORD
        div(class="form-group") 
          input(
            type="password" 
            class="form-control" 
            placeholder="Sua a senha" 
            v-model='user.txSenha')
        
        //- BUTTON ACESSAR
        div(class="button-group") 
          button.bt-acessar(
            type='submit' 
            id="acessar" 
            class="btn btn-secondary" 
            value="Acessar") Acessar

        //- BUTTON CADASTRE-SE
        div(class="button-group")  
          input.bt-cadastro(
            type='button' 
            class="btn " 
            @click="showSignUp" 
            value="Cadastre-se aqui")

        //- BUTTON ESQUECEU A SENHA?
        div(class="button-group")  
          input.bt-esqueceu(
            type='button' 
            class="btn " 
            @click="showForgetPass" 
            value="Esqueci minha senha")

        //- a(href="mailto:faleconosco@jgv.net.br" class="mt-4") contato: #[strong faleconosco@jgv.net.br]

    //- FORGET PASS FORM
    div(v-show="isForgetPass" 
      data-aos="fade-up" 
      data-aos-duration="300"  
      data-aos-anchor-placement="center-bottom")

      form(@submit.prevent="recoverUser" class="form-box")
        //- INPUT CPF
        div(class="form-group") 
          input(
            type="tel" 
            class="form-control" 
            label="CPF *" 
            v-mask="'###.###.###-##'" 
            placeholder="CPF (Apenas números)" 
            v-model='user.txCpf' required)
        
        //- INPUT EMAIL
        div(class="form-group") 
          input(
            type="text" 
            class="form-control" 
            label="E-mail *" 
            placeholder="Utilize o e-mail cadastrado" 
            v-model='user.txEmail' required)

        //- BUTTON RECUPERAR
        div(class="button-group")
          button.bt-recuperar(
            type='submit' 
            class="btn btn-secondary" 
            value="Recuperar") Recuperar

        //- BUTTON VOLTAR PRO LOGIN
        div(class="button-group") 
          input.bt-login-voltar(
            type='button' 
            class="btn " 
            @click="showSignIn" 
            value="Voltar para login")

    //- SIGNUP FORM
    div(v-show="isSignUp" 
        data-aos="fade-up" 
        data-aos-duration="300"  
        data-aos-anchor-placement="center-bottom")

      form(@submit.prevent="").form-box
        //- INPUT CPF
        div(class="form-group") 
          input(
            type="tel" 
            class="form-control" 
            label="CPF *" 
            placeholder="CPF (Apenas números)" 
            v-mask="'###.###.###-##'" 
            v-model='user.txCpf' required)

        //- INPUT NOME
        div(class="form-group") 
          input(
            type="text" 
            class="form-control" 
            label="Nome *" 
            placeholder="Nome Sobrenome" 
            v-model='user.txNome' required)
          
        //- INPUT DDD
        div(class="form-group") 
          input(
            type="text" 
            class="form-control" 
            label="DDD *" 
            placeholder="DDD" 
            v-model='user.nrDDD' required 
            maxlength="2")
        
        //- INPUT TELEFONE
        div(class="form-group") 
          input(
            type="text" 
            class="form-control" 
            label="Telefone *" 
            v-mask="'#####-####'" 
            placeholder="Telefone" 
            v-model='user.nrTelefone' required)

        //- INPUT EMAIL
        div(class="form-group") 
          input(
            type="email" 
            class="form-control" 
            label="E-mail *" 
            placeholder="Email" 
            v-model='user.txEmail' required)

        //- INPUT SENHA
        div(class="form-group") 
          input(
            type="password" 
            class="form-control" 
            label="Senha *" 
            placeholder="Senha " 
            v-model='user.txSenha' required)
        //- INPUT CONFIRMAR SENHA
        div(class="form-group") 
          input(
            type="password" 
            class="form-control" 
            label="Senha *" 
            placeholder="Confirmar Senha " 
            v-model='user.txConfirmarSenha' required)
          
        //- BUTTON CADASTRAR
        div(class="button-group")
          button.bt-cadastrar(
            type='submit' 
            class="btn btn-secondary" 
            value="Cadastrar") Cadastrar
            
        //- BUTTON JA TEM CONTA
        div(class="button-group") 
          input.bt-tem-conta(
            type='button' 
            class="btn" 
            @click="showSignIn" 
            value="Já tem conta? Entre aqui.")

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Auth",
  computed: mapState(["isLogged"]),
  data: () => {
    return {
      isSignIn: true,
      isSignUp: false,
      isForgetPass: false,
      user: {
        txEmail: '',
        txNome: '',
        txSenha: '',
        txConfirmarSenha: '',
        nrDDD: '',
        nrTelefone: '',
        txCpf: '',
      }
    }
  },
  methods: {
    signIn() {
      this.$store.commit("setIsLogged", true)
      this.$router.push({ path: '/painel/resumo'})
    },
    showSignUp() {
      this.isSignIn = false
      this.isSignUp = true
      this.isForgetPass = false
    },
    showSignIn() {
      this.isSignIn = true
      this.isSignUp = false
      this.isForgetPass = false
    },
    showForgetPass() {
      this.isSignIn = false
      this.isSignUp = false
      this.isForgetPass = true
    },
    recoverUser() {
      return false
    },
  },
  mounted() {
      this.$store.commit("setIsLogged", false)
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

#signinSignout {
  border-radius: 20px;
  height: min-content;

  padding: 30px 0px;

  h1 {
    font-size: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

    // inputs
    .form-control {
      margin: 0px auto;

      // inputs selecionados
      &:focus {
        border-color: $vermelho;
        box-shadow: 0px 0px 10px 5px $vermelho10;
      }
    }

    .bt-cadastro,
    .bt-login-voltar,
    .bt-esqueceu,
    .bt-tem-conta {
      text-transform: unset;
    }

    // botões
    .bt-acessar,
    .bt-recuperar,
    .bt-cadastrar {
      color: $branco;
      background-color: $vermelho;
      box-shadow: 0px 0px 10px 5px $vermelho20;
      border: none;
      border-radius: 10px;

      &:hover,
      &:focus {
        background-color: $vermelho-escuro;
      }
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #signinSignout {
    margin: 10px auto 0px auto;
    width: 90vw;

    form {
      .form-control {
        width: 80%;
      }
      .bt-acessar,
      .bt-cadastrar {
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 20px;
      }
    }
  }
}

// NOTEBOOK
@media only screen and (min-width: 901px) and (max-width: 1500px) {
  #signinSignout {
    margin: 0px auto 0px auto;
    width: 30vw;

    form {
      .form-control {
        width: 70%;
      }
      .bt-acessar,
      .bt-cadastrar {
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 16px;
      }
    }
  }
}

// MONITORES
@media only screen and (min-width: 1501px) {
  #signinSignout {
    margin: 200px auto 0px auto;
    width: 25vw;

    form {
      .form-control {
        width: 60%;
      }
      .bt-acessar,
      .bt-cadastrar {
        margin: 20px auto;
        padding: 7px 20px;
        font-size: 16px;
      }
    }
  }
}
</style>