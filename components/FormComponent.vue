<template>
  <div class="flex justify-center bg-base-200 mt-10 sm:mt-5 mt:-mt-5 lg:-mt-10">
    <div class="card lg:w-1/2 bg-white -mt-7 mb-10 pb-10">
      <div class="flex flex-col md:flex-row items-center justify-between pr-16 px-5">
        <slot name="title"/>

        <div class="grid grid-cols-3 gap-4 md:pt-20">
          <div class="avatar">
            <div class="w-6 lg:w-12 rounded-full">
              <img src="~/assets/images/flags/Brazil.png" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-6 lg:w-12 rounded-full">
              <img src="~/assets/images/flags/Mexico.jpg" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-6 lg:w-12 rounded-full">
              <img src="~/assets/images/flags/US.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-body w-full">
        <div class="grid grid-cols-12 gap-4 w-full">
          <div class="col-span-12">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Nombre</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>


          <div class="col-span-12 md:col-span-8">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Correo electrónico</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-4 w-full">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Teléfono</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <div class="col-span-12 md:col-span-7">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Dirección</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-5">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Ciudad</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <div class="col-span-12">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">RFC</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <!-- <div class="col-span-12 md:col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">CPF/CNPJ</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">RG</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div> -->

          <div class="col-span-12 md:col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Categoría de negocio
                </span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Nombre de la empresa</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-12">
            <div class="form-control">
              <label class="flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                />
                <span class="label-text ml-2">Recuerda</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="form-control w-1/2 mx-auto py-2">
            <button
                class="btn btn-neutral text-white uppercase"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped>

</style>