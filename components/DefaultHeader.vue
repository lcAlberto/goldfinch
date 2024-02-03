<template>
  <div
      class="max-w-100 lg:w-1/2 p-5 mx-auto flex flex-row gap-3 items-center justify-between flex-wrap z-10"
      :class="{
        'bg-primary': transparent,
        // 'bg-transparent': !transparent,
        'text-gray-100': !dark,
      }"
  >
    <img
        v-if="dark"
        src="~/assets/images/logo-GOLDFINCH.png"
        class="md:w-32 w-1/4"
        alt=""
    />
    <img
        v-else
        src="~/assets/images/logo-GOLDFINCH_white_footer.png"
        class="md:w-32 w-1/4"
        alt=""
    />
    <ul class="flex flex-row gap-2 md:gap-5">
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
        <NuxtLink to="/#d">POD</NuxtLink>
      </li>
    </ul>
    <div
        class="flex lg:flex-col border py-1 px-5 font-bold text-xs"
        :class="{'border-gray-100': !dark, 'text-white': dark}"
    >
      <div class="flex flex-col items items-center">
        IDIOMA
      </div>
      <div class="flex items-center ml-2 gap-2">
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
const props = defineProps({
  transparent: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
})
</script>


<style scoped>

</style>