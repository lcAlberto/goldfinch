<template>
<div class="flex flex-col">
  <div class="background">
    <div class="w-full flex flex-col">
      <default-header />

      <div class="flex justify-center items-center text-gray-50 overflow-hidden h-[60vh]">
        <div class="w-1/3">
          <h1 class="text-5xl font-bold mb-8">
            Quem somos
          </h1>
          <p class="w-1/2">
            Lorem ipsum habitant ligula lobortis risus etiam, bibendum dictum nullam dolor sit rhoncus dolor, sociosqu curabitur arcu ornare turpis.
          </p>
        </div>
      </div>

      <div class="bg-base-100 flex justify-center p-10">
        <div class="w-1/2 flex justify-between mt-20">
            <div class="pr-10">
              <h1 class="text-secondary text-3xl">
                Nossa
                <span class="font-bold">
                história
              </span>
              </h1>
              <p class="mt-10">
                Lorem ipsum habitant ligula lobortis risus etiam, bibendum dictum nullam
                dolor sit rhoncus dolor, sociosqu curabitur arcu ornare turpis.
                Dui tempor platea fames mauris risus venenatis sodales accumsan erat,
                nec volutpat velit massa iaculis pretium risus et arcu lacinia, ac libero
                nibh iaculis varius quisque ornare habitant. eros curabitur sodales diam nisi
                aenean adipiscing sodales sagittis, justo etiam justo euismod himenaeos erat eros viverra sem
              </p>
            </div>
          <img
              src="~/assets/images/about/01.png"
              alt="img"
              class="w-1/2"
          >
        </div>
      </div>

      <div class="w-full bg-base-200">
        <div class="w-1/2 mx-auto grid grid-cols-4 gap-3 py-5 my-10">
          <h2 class="col-span-4 text-secondary text-3xl text-center my-5">
            Nosso
            <span class="font-bold">time</span>
          </h2>
          <div class="text-center">
            <img
                src="~/assets/images/about/03.png"
                alt="img"
                class=""
            >
            <h2 class="text-xl text-secondary font-bold my-2">
              John Smith
            </h2>
            <span>CEO</span>
          </div>
          <div class="text-center">
            <img
                src="~/assets/images/about/04.png"
                alt="img"
                class=""
            >
            <h2 class="text-xl text-secondary font-bold my-2">
              Matt Seth
            </h2>
            <span>Director</span>
          </div>
          <div class="text-center">
            <img
                src="~/assets/images/about/05.png"
                alt="img"
                class=""
            >
            <h2 class="text-xl text-secondary font-bold my-2">
              Mx Wiliam
            </h2>
            <span>Marketing Director</span>
          </div>
          <div class="text-center">
            <img
                src="~/assets/images/about/06.png"
                alt="img"
                class=""
            >
            <h2 class="text-xl text-secondary font-bold my-2">
              Peter Son
            </h2>
            <span>Finances</span>
          </div>
        </div>
      </div>

      <div class="w-full bg-base-100 pt-10">
        <h2 class="col-span-4 text-secondary text-3xl text-center mt-10">
          Cases de
          <span class="font-bold">sucesso</span>
        </h2>
        <div class="w-1/2 mx-auto grid grid-cols-3 grid-rows-2 gap-3 pb-5 my-10 items-center content-center">
          <img
              src="~/assets/images/brands/mantu.png"
              alt="img"
              class=""
          >
          <img
              src="~/assets/images/brands/axcel.png"
              alt="img"
              class=""
          >
          <img
              src="~/assets/images/brands/grafeno.png"
              alt="img"
              class=""
          >
          <img
              src="~/assets/images/brands/company.png"
              alt="img"
              class=""
          >
          <img
              src="~/assets/images/brands/consult.png"
              alt="img"
              class=""
          >
        </div>
      </div>
      <div class="w-full bg-base-100 pt-10">
        <h2 class="col-span-4 text-secondary text-3xl text-center my-10">
          Downloads
        </h2>
        <div class="card bg-base-300 w-1/3 mx-auto p-5 grid grid-cols-2 gap-4 mb-10">
          <div class="bg-base-100 flex justify-between items-center rounded-lg p-5">
            <span>Documento 1.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center rounded-lg p-5">
            <span>Documento 2.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center rounded-lg p-5">
            <span>Documento 3.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center rounded-lg p-5">
            <span>Documento 4.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-8"
            >
          </div>
        </div>
      </div>
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
  background-color: #8d00ec;
  background-image: url("~/assets/images/about/02.png");
  background-size: 100%;
  background-attachment: fixed;
}
</style>