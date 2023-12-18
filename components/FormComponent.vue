<template>
  <div class="flex justify-center bg-base-200 -mt-10">
    <div class="card w-1/2 bg-white -mt-7 mb-10 pb-10">
      <div class="flex items-center justify-between pr-16 px-5">
        <slot name="title"/>

        <div class="grid grid-cols-3 gap-4 pt-20">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="~/assets/images/flags/Brazil.png" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="~/assets/images/flags/Mexico.jpg" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12 rounded-full">
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
                <span class="label-text">Nome</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>


          <div class="col-span-8">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-4 w-full">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <div class="col-span-7">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Endereço</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-5">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Cidade</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <div class="col-span-6">
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
          <div class="col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">RG</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>

          <div class="col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Categoria de negócio</span>
              </div>
              <input
                  type="text"
                  class="input bg-base-200 w-full"
              />
            </label>
          </div>
          <div class="col-span-6">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Nome da empre</span>
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
                <span class="label-text ml-2">Remember me</span>
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