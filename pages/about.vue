<template>
<div class="flex flex-col">
  <div class="background-sm md:background-md">
    <div class="w-full flex flex-col">
      <default-header />

      <div class="flex justify-center items-center text-gray-50 overflow-hidden md:h-[60vh] h-[40vh]">
        <div class="w-11/12 lg:w-1/3 overflow-hidden">
          <h1 class="text-4xl md:text-5xl font-bold mb-8">
            Quem somos
          </h1>
          <p class="w-3/5 lg:w-1/2">
            Lorem ipsum habitant ligula lobortis risus etiam, bibendum dictum nullam dolor sit rhoncus dolor, sociosqu curabitur arcu ornare turpis.
          </p>
        </div>
      </div>

      <div class="flex justify-center p-5 md:p-10 bg-base-100">
        <div class="lg:w-1/2 flex flex-col lg:flex-row justify-between mt-20 flex-wrap md:flex-nowrap">
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
              class="hidden md:block max-h-80 w-1/2"
          >
        </div>
      </div>

      <div class="w-full bg-base-200">
        <div class="w-1/2 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-3 justify-center py-5 my-10">
          <h2 class="sm:col-span-2 md:col-span-4 text-secondary text-3xl text-center my-5">
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
        <div class="w-1/2 mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 md:gap-3 pb-5 my-5 md:my-10 items-center content-center">
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
        <div class="card bg-base-300 w-11/12 md:w-1/3 mx-auto p-5 grid md:grid-cols-2 gap-4 mb-10">
          <div class="bg-base-100 flex justify-between items-center flex-wrap rounded-lg p-5">
            <span>Documento 1.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-4 sm:w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center flex-wrap rounded-lg p-5">
            <span>Documento 2.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-4 sm:w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center flex-wrap rounded-lg p-5">
            <span>Documento 3.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-4 sm:w-8"
            >
          </div>
          <div class="bg-base-100 flex justify-between items-center flex-wrap rounded-lg p-5">
            <span>Documento 4.pdf</span>
            <img
                src="~/assets/images/about/08.png"
                class="w-4 sm:w-8"
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
.background-md {
  background-color: #8d00ec;
  background-image: url("~/assets/images/about/02.png");
  background-size: 100%;
  background-attachment: fixed;
}

.background-sm {
  background-color: #380c56;
  //background-image: url("~/assets/images/background/home.png");
  background-image: url("~/assets/images/about/02.png");
  background-size: 120%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.bg-white-semitranparent {
  background-color: rgba(255, 255, 255, 0.94) !important;
}
</style>