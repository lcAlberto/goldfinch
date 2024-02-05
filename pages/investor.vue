<template>
<div class="flex flex-col">
  <div class="background">
    <div class="w-full flex flex-col">
      <default-header :transparent="true" />

      <div class="flex justify-center items-center text-gray-50 overflow-hidden md:h-auto min-h-100">
        <img
            src="~/assets/images/received/01.png"
            alt=""
            class="hidden sm:block w-1/3 md:w-1/4"
        />
        <div class="w-1/3 lg:w-1/5">
          <h1 class="text-2xl text-center md:text-4xl lg:mb-8">
            Quero<br>
            <span class="font-bold">
            investir
          </span>
          </h1>
          <p class="break-words">
            Descubre oportunidades de inversión
            en empresas innovadoras y de alto
            crecimiento a través de la negociación
            de “equity”
          </p>
        </div>
      </div>
      <FormComponent>
        <template #title>
          <h1 class="text-primary text-3xl pt-20 px-14">
            Únete a nosotros<br>
            como
            <span class="font-bold">inversor</span>
          </h1>
        </template>
      </FormComponent>
      <div class="w-full bg-base-200">
        <!-- <div class="w-1/2 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-5 my-10"> -->
          <!-- Primeira linha -->
          <!-- <div class="md:col-span-2 lg:col-span-2">
            <img
                src="~/assets/images/received/barracao-original.jpg"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 1"
            >
          </div> -->
          <!-- <div class="md:col-span-1 lg:col-span-1">
            <img
                src="~/assets/images/brands/axcel.png"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 2"
            >
          </div> -->

          <!-- Segunda linha -->
          <!-- <div class="md:col-span-1 lg:col-span-1">
            <img
                src="~/assets/images/received/city.jpg"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 3"
            >
          </div> -->
          <!-- <div class="md:col-span-1 lg:col-span-1">
            <img
                src="~/assets/images/brands/consult.png"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 4"
            >
          </div> -->
          <!-- <div class="md:col-span-1 lg:col-span-1">
            <img
                src="~/assets/images/received/team.jpg"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 5"
            >
          </div> -->

          <!-- Terceira linha -->
          <!-- <div class="md:col-span-1 lg:col-span-1">
            <img
                src="~/assets/images/brands/company.png"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 6"
            >
          </div> -->
          <!-- <div class="md:col-span-2 lg:col-span-2">
            <img
                src="~/assets/images/received/shopping.jpg"
                class="w-full h-36 object-cover rounded-lg"
                alt="Imagem 7"
            >
          </div> -->
<!--          <div class="card col-span-6 bg-base-100 shadow-xl image-full overflow-hidden max-h-60">-->
<!--            <img-->
<!--                src="~/assets/images/received/barracao-original.jpg"-->
<!--                alt="Shoes"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="card col-span-3 bg-base-100 shadow-xl image-full overflow-hidden max-h-60">-->
<!--            <figure>-->
<!--              <img-->
<!--                  src="~/assets/images/brands/mantu.png"-->
<!--                  alt="Shoes"-->
<!--              />-->
<!--            </figure>-->
<!--          </div>-->
<!--          <div class="col-span-6 shadow-xl">-->
<!--            <img-->
<!--                src="~/assets/images/received/barracao-original.jpg"-->
<!--                alt="img"-->
<!--                class="rounded-2xl"-->
<!--            >-->
<!--          </div>-->
<!--          <img-->
<!--              src="~/assets/images/brands/mantu.png"-->
<!--              alt="img"-->
<!--              width="500"-->
<!--              class=""-->
<!--          >-->
<!--          <img-->
<!--              src="~/assets/images/brands/axcel.png"-->
<!--              alt="img"-->
<!--              class=""-->
<!--          >-->
<!--          <figure>-->
<!--            <img-->
<!--                src="~/assets/images/brands/grafeno.png"-->
<!--                alt="img"-->
<!--                class=""-->
<!--            >-->
<!--          </figure>-->
<!--          <img-->
<!--              src="~/assets/images/brands/company.png"-->
<!--              alt="img"-->
<!--              class=""-->
<!--          >-->
<!--          <img-->
<!--              src="~/assets/images/brands/consult.png"-->
<!--              alt="img"-->
<!--              class=""-->
<!--          >-->
        </div>
      </div>
    </div>
  </div>
  <DefailtFooter />
<!-- </div> -->
</template>
<script
    setup
    lang="ts"
>
</script>

<style scoped>
.background {
  background-color: #8d00ec;
  background-image: url("~/assets/images/received/02.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position-x: 5vw;
  //height: 100vh;
}
.card.image-full:before {
  background-color: transparent !important;
}
.barracao {
  background-image: url("~/assets/images/received/02.png") !important;
}
</style>