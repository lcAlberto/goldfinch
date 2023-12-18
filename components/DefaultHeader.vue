<template>
  <div class="w-1/2 p-5 mx-auto flex items-center justify-between text-gray-100">
    <img
        src="~/assets/images/logo-GOLDFINCH_white_footer.png"
        class="w-32"
        alt=""
    />
    <ul class="flex gap-5">
      <li>
        <NuxtLink to="/">Início</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/investor">Cadastro</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">Quem somos</NuxtLink>
      </li>
      <li>
        <NuxtLink>POD</NuxtLink>
      </li>
    </ul>
    <div class="border border-gray-100 py-1 px-5 font-bold text-xs">
      <div class="flex flex-col items items-center">
        IDIOMA
      </div>
      <div class="flex items-center gap-2">
        <span>ENG</span>
        <span>|</span>
        <span>ESP</span>
        <span>|</span>
        <span>PT</span>
      </div>
    </div>
  </div>
</template>
<script
    setup
    lang="ts"
>

</script>


<style scoped>

</style>