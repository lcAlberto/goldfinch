<template>
<div class="flex flex-col">
  <div class="background">
    <div class="w-full flex flex-col">
      <default-header />

      <div class="flex justify-center items-center text-gray-50 overflow-hidden">
        <img
            src="~/assets/images/quero-crescer/01.png"
            alt=""
            class="w-1/4"
        />
        <div class="w-1/5">
          <h1 class="text-4xl mb-8">
            Quero<br>
            <span class="font-bold">
            crescer meu negócio
          </span>
          </h1>
          <p>
            Lorem ipsum habitant ligula lobortis risus etiam, bibendum dictum nullam dolor sit rhoncus dolor, sociosqu curabitur arcu ornare turpis.
          </p>
        </div>
      </div>
      <FormComponent>
        <template #title>
          <h1 class="text-primary text-3xl pt-20 px-14">
            Cadastre-se para receber o<br>
            <span class="font-bold">investimento</span>
          </h1>
        </template>
      </FormComponent>
    </div>
  </div>
  <DefailtFooter />
</div>
</template>
<script
    setup
    lang="ts"
>
</script>

<style scoped>
.background {
  background-color: #5600fd;
  background-image: url("~/assets/images/quero-crescer/02.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position-x: 5vw;
  //height: 100vh;
}
</style>