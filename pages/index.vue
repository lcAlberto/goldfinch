<template>
  <div class="fixed navbar bg-primary z-10 p-16"></div>
  <section class="w-full relative flex bg-gray-100 h-screen overflow-hidden">
    <div class="w-[60%] flex justify-start mt-[20%]">
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
    </div>
    <div class="w-[40%] bg-[url('~/assets/images/background/home.png')]">
      <img class="w-1/2 z-1 absolute right-[15%] mt-10 mr-24" src="~/assets/images/background/01.png" alt="01">
    </div>
  </section>

  <section class="relative w-full flex bg-gray-100 h-screen overflow-hidden"></section>
</template>

<style scoped>

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