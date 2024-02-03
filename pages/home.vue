<template>
  <div class="w-full flex flex-col items-center">
    <default-header :dark="true" />
    <section class="w-1/2 flex flex-row">
      <div class="z-10">
        <h1 class="text-3xl">
          Dê um passo para
          <span class="font-bold text-secondary">investir</span>
          no futuro
        </h1>
        <p class="text-gray-500 text-sm">
          Lorem ipsum varius faucibus ultrices maecenas cubilia curabitur aptent, nulla magna felis sem maecenas
        </p>
        <button class="btn btn-secondary btn-sm rounded-full font-bold py-1 px-7">
          CONHEÇA
        </button>
      </div>
      <div class="z-10">
        <img
            src="~/assets/images/background/01.png"
            class=""
        >
      </div>
      <div class="fixed right-0 top-0 -z-1">
        <img
            src="~/assets/images/background/home.png"
            class="ml-auto md:w-1/2 lg:w-full"
        >
      </div>
    </section>
    <section class="w-full -mt-7 bg-white flex flex-col items-center justify-center z-10 py-10">
      <div class="card card-side shadow-xl bg-secondary my-5">
        <div class="bg-[url('~/assets/images/about/01.png')] bg-cover h-72 rounded-l-lg w-3/5" />
        <div class="w-1/2 card-body text-white flex flex-col justify-center items-center">
          <h2 class="card-title text-2xl">
            <span class="font-normal">Quero</span>
            investir
          </h2>
          <span class="mt-3">
            Lorem ipsum varius faucibus ultrices maecenas cubilia curabitur aptent, nulla magna felis sem maecenas
          </span>
          <div class="card-actions justify-center mt-auto">
            <button class="btn btn-secondary btn-sm bg-indigo-500 px-10 font-bold">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>

      <div class="card card-side shadow-xl bg-primary my-5">
        <div class="bg-[url('~/assets/images/home/handshake.png')] bg-cover h-72 rounded-l-lg w-3/5" />
        <div class="w-1/2 card-body text-white flex flex-col justify-center items-center">
          <h2 class="card-title text-2xl">
            <span class="font-normal">Quero</span>
            crescer meu negócio
          </h2>
          <span class="mt-3">
            Lorem ipsum varius faucibus ultrices maecenas cubilia curabitur aptent, nulla magna felis sem maecenas
          </span>
          <div class="card-actions justify-center mt-auto">
            <button class="btn btn-primary bg-indigo-900 btn-sm px-10 font-bold">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex bg-[url('~/assets/images/home/04.png')] z-10">
      <div class="text-white">
        <img
            src="~/assets/images/home/05.png"
            class="w-4/5"
        >
        <h2 class="card-title text-2xl">
          Oportunidades para <span>investir</span>
          e também pra receber
          <span class="font-bold">
            investimento
          </span>
        </h2>
        <button class="btn btn-outline-white">
          SAIBA MAIS
        </button>
      </div>
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

</style>