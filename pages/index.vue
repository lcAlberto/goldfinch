<template>
  <!-- <div class="fixed navbar bg-primary z-10 p-16"></div> -->
  <section class="sooner bg-cover bg-[url('~/assets/images/background/em-construcao.png')] relative flex bg-gray-100 h-screen overflow-hidden">
    <div class="justify-start mt-4">
      <div class="ml-4 block">
        <h1 class="ml-4 mt-40 text-gray-400 text-fixed leading-none">
          UNDER CONSTRUCTION
        </h1>
        <h4 class="ml-4 text-lg mt-30 subtext-fixed text-gray-400 leading-tight">
          Our website will be ready soon!
        </h4>
      </div>
    </div>
    <!-- <div class="w-[60%] flex justify-start mt-[20%]">
      <div class="w-1/3 ml-[30%] block">
        <h1 class="text-5xl font leading-[3.5rem]">
          Dê um passo para
          <span class="text-secondary font-bold">investir</span>
          no futuro
        </h1>
        <h4 class="text-lg mt-16 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        </h4>
        <div class="mt-16">
          <button class="btn btn-sm btn-secondary px-5 uppercase tracking-[8px] rounded-3xl">Conheça</button>
        </div>
      </div>
    </div> -->
    <!-- <div class="w-[40%] sooner bg-[url('~/assets/images/background/home.png')]">
      <img class="w-1/2 z-1 absolute right-[15%] mt-10 mr-24" src="~/assets/images/background/01.png" alt="01">
    </div> -->
  </section>

  <!-- <section class="relative w-full flex bg-gray-100 h-screen overflow-hidden"></section> -->
</template>

<style scoped>
 .sooner {

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
 }

  .text-fixed {
  position: relative;
  font-size: 2.6rem;
  }
  .subtext-fixed {
  position: relative;
  font-size: 1.6rem;
  }
  @media (max-width: 300px) {
  .text-fixed {
    font-size: 2rem;
  }
  .subtext-fixed {
    font-size: 1.2rem;
  }
} 
</style>
<script setup lang="ts">
</script>

<style scoped>
nav > ul > li {
  @apply link no-underline hover:underline text-gray-500 font-bold;
}

nav > ul > .active {
  @apply text-secondary;
}
</style>