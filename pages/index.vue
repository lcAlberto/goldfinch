<template>
  <section class="bg-gray-100">
    <div class="grid grid-cols-5 h-screen">
      <div class="navbar bg-base-100 col-span-3 items-start">
        <div class="navbar-start">
          <img class="w-24" src="https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="logo">
        </div>
        <div class="navbar-center">
          <ul class="flex gap-10 font-medium">
            <li class="active">
              <nuxt-link to="/"/>
              Início
            </li>

            <li>
              <nuxt-link to="/"/>
              Cadastro
            </li>

            <li>
              <nuxt-link to="/"/>
              Quem somos
            </li>

            <li>
              <nuxt-link to="/"/>
              POD
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-secondary col-span-2">
        dedewdew
      </div>
    </div>


  </section>
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