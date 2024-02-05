<template>
<div class="flex flex-col">
  <div class="background-sm md:background-md absolute">
    <div class="w-full flex flex-col">
      <default-header />

      <div class="flex justify-center items-center text-gray-50 overflow-hidden md:h-[60vh] h-[40vh]">
        <div class="w-11/12 lg:w-1/3 overflow-hidden">
          <br>
          <h1 class="text-5xl md:text-5xl font-bold mb-9">
            Quem somos
          </h1>
          <p class="w-3/6 lg:w-1/2 text-secondary">
            En Goldfinch, impulsamos el éxito en los negocios. Conectamos a
            inversores con empresas prometedoras, potenciando el
            crecimiento a través de transacciones estratégicas de participación
            accionaria y compartiendo beneficios futuros. Nuestro enfoque es
            acelerar el desarrollo y maximizar la valorización. En Goldfinch,
            convertimos el potencial en resultados tangibles.
          </p>
        </div>
      </div>

      <div class="flex md:p-10 bg-base-100 justify-center justifier">
        <div class="lg:w-1/2 flex flex-col lg:flex-row align-items-center text flex-wrap md:flex-nowrap">
          <div class="pr-10">
            <h1 class="text-secondary text-3xl">
              Quiénes
              <span class="font-bold">
                somos
              </span>
            </h1>
            <p class="mt-3">
              Bienvenido a Goldfinch, un punto de convergencia donde 
              la visión, la innovación y el compromiso se entrelazan 
              para crear una narrativa única en el mundo de los negocios.
            </p>
            <h1 class="text-secondary mt-10 text-3xl">
              Misión
              <span class="font-bold">
                y Visión
              </span>
            </h1>
            <p class="mt-3">
              En la esencia de Goldfinch está el compromiso de conectar a buenas empresas con
              inversores visionarios, superando el problema del acceso limitado de las PYMES al
              financiamiento/crédito. Creemos firmemente en la transparencia y la eficiencia,
              buscando innovar y maximizar el potencial de nuestros socios en cada acción que
              emprendemos. En Goldfinch, estamos comprometidos en liderar una revolución en el
              mercado de acciones y en el flujo de inversiones, estableciéndonos como pioneros
              regionales y transformando la visión en realidad.
            </p>
            <h1 class="text-secondary mt-10 text-3xl">
              Lo Que
              <span class="font-bold">
                Nos Diferencia
              </span>
            </h1>
            <p class="mt-3">
              Lo que nos destaca es nuestra enfoque estratégico, funcional, eficiente e innovador, que
              se traduce en las mejores condiciones, tarifas más bajas y soluciones más amplias para el
              mercado de activos. Nuestro compromiso inquebrantable con la excelencia impulsa cada
              proyecto, y la satisfacción del cliente es la brújula que guía nuestros esfuerzos.
            </p>
            <h1 class="text-secondary mt-10 text-3xl">
              El
              <span class="font-bold">
                Futuro
              </span>
            </h1>
            <p class="mt-3">
              A medida que avanzamos, continuamos buscando nuevos horizontes y desafíos.
              Creemos que la clave del éxito está en la adaptabilidad y en la constante búsqueda de la
              excelencia.
            </p>
            <h1 class="text-secondary mt-10 text-3xl">
              Nuestro
              <span class="font-bold">
                Equipo
              </span>
            </h1>
            <p class="mt-3">
              Detrás de cada logro hay un equipo dedicado de profesionales apasionados. En
              Goldfinch, valoramos la diversidad, la innovación y la colaboración. Conozca al equipo
              que marca la diferencia.
            </p>
          </div>
          <!-- <img
              src="~/assets/images/about/01.png"
              alt="img"
              class="hidden md:block max-h-80 w-1/2"
          > -->
        </div>
      </div>
      
      <div class="w-full bg-base-200">
        <div class="w-1/2 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center py-5 my-10">
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
              Andrew McCartey
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
              Isabella Albuquerque
            </h2>
            <span>CLO</span>
          </div>
          <div class="text-center">
            <img
                src="~/assets/images/about/05.png"
                alt="img"
                class=""
            >
            <h2 class="text-xl text-secondary font-bold my-2">
              Diego Cristóbal
            </h2>
            <span>CFO</span>
          </div>
        </div>
      </div>

      <!-- <div class="w-full bg-base-100 pt-10">
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
      </div> -->
      <!-- <div class="w-full bg-base-100 pt-10">
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
      </div> -->
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
  background-image: url("~/assets/images/background/home.png");
  background-image: url("~/assets/images/about/02.png");
  background-size: 120%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.bg-white-semitranparent {
  background-color: rgba(255, 255, 255, 0.94) !important;
}

.justifier {
  text-align: justify
}
</style>