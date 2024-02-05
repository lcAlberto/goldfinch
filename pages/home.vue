<template>
  <div class="w-full flex flex-col items-center">
    <default-header :dark="true" />
    <section class="md:w-1/2 flex flex-row items-center">
      <div class="z-10">
        <h1 class="text-lg md:text-5xl mb-4">
          Dê um passo 
          <br>
          para
          <span class="font-bold text-secondary">investir</span>
          <br>
          no futuro
        </h1>
        <p class="text-gray-500 mb-3 text-md md:text-lg">
          Únete ahora a la nueva forma de conectar empresas 
          disruptivas e inversores visionarios.
        </p>
        <NuxtLink to="/about">
          <button class="btn btn-secondary btn-sm rounded-full font-bold py-1 px-7 mt-7">
            CONHEÇA
          </button>
        </NuxtLink>
      </div>
      <div class="z-10">
        <img
            src="~/assets/images/background/01.png"
            class=""
        >
      </div>
      <div class="hidden md:block fixed right-0 top-0 -z-1">
        <img
            src="~/assets/images/background/home.png"
            class="ml-auto md:w-1/2 lg:w-full"
        >
      </div>
    </section>

    <section class="w-full md:-mt-7 bg-white flex flex-col items-center justify-center z-10 py-10">

      <div class="card card-side shadow-xl bg-secondary my-5">
        <div class="hidden sm:block bg-[url('~/assets/images/home/01.png')] bg-cover h-72 rounded-l-lg w-3/5" />
        <div class="w-1/2 card-body text-white flex flex-col justify-center items-center">
          <h2 class="card-title text-2xl">
            <span class="font-normal">Quero</span>
            investir
          </h2>
          <div class="">
          <span class="mt-3 text-center">
            Descubre oportunidades de
            <br> 
            inversión en empresas innovadoras y de alto
            crecimiento a través de la negociación
            de “equity”
          </span>
          </div>
          <div class="card-actions justify-center mt-auto">
            <NuxtLink to="/investor">
              <button class="btn btn-secondary btn-sm bg-purple-500 px-10 font-bold">
                SAIBA MAIS
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="card card-side shadow-xl bg-primary my-5">
        <div class="hidden sm:block bg-[url('~/assets/images/home/handshake.png')] bg-cover md:h-72 rounded-l-lg w-3/5" />
        <div class="w-1/2 card-body text-white flex flex-col justify-center items-center">
          <h2 class="text-2xl">
            Quero
            <span class="font-bold">crescer<br> meu negócio</span>
          </h2>
          <span class="mt-3 text-center">
            Descubre cómo desbloquear todo el potencial 
            de tu negocio a través de la
            negociación de “equity”
          </span>
          <div class="card-actions justify-center mt-auto">
            <NuxtLink to="/receive">
              <button class="btn btn-primary bg-indigo-900 btn-sm px-10 font-bold">
                SAIBA MAIS
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full bg-[url('~/assets/images/home/04.png')] z-10">
      <div class="w-8/12 flex justify-center">
        <div class="hidden sm:block overflow-hidden h-72 h-70">
          <img
              src="~/assets/images/home/05.png"
              alt="image"
              class="w-3/4 ml-auto md:-mt-32"
          >
        </div>
        <div class="w-1/4 flex flex-col md:justify-center text-white">
          <h2 class="text-2xl md:text-4xl">
            Un nuevo mundo de <span class="font-bold">negocios</span>
            en la palma
            <span class="font-bold">
            de tu mano.
          </span>
          </h2>
          <div class="">
            <NuxtLink to="/about"> 
              <button class="btn btn-sm rounded-full bg-transparent border border-gray-100 text-white px-10 text-center my-10 hover:text-primary">
                SAIBA MAIS
              </button>
            </NuxtLink>  
          </div>
        </div>
      </div>
    </section>
    <section class="w-full z-10">
      <defailt-footer />
    </section>
  </div>
</template>
<script lang="ts">
import DefaultHeader from "~/components/DefaultHeader.vue";

export default {
  components: { DefaultHeader }
}
</script>


<style scoped>
@media (min-width: 766px) {
  .h-70 {
    height: 70vh;
  }
}

.btn2-hover {
  color: blueviolet;
}
  
</style>