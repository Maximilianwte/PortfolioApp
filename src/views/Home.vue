<template>
  <div class="home text-center pt-32 sm:pt-16 w-full">
    <div class="header flex-column mt-12 items-center pb-16">
      <h1 class="text-4xl sm:text-6xl font-bold uppercase leading-none">Simon Helms</h1>
      <h3 class="text-2xl font-medium lowercase tracking-normal">Hamburg, Germany</h3>
    </div>
    <div class="images flex-col justify-center pt-16 sm:pt-0">
      <template v-for="(Image, index) in Images">
        <div v-bind:key="index" class="image w-full pb-16 sm:pb-32 pl-8 pr-8 sm:pl-24 sm:pr-24 xl:pl-64 xl:pr-64">
          <router-link v-bind:key="index" :to="{ name: 'image', params: {name: Image.Titel ,id: Image.Id } }">
            <img v-bind:key="index" v-lazy='Image.Image_URL' :v-bind:alt="Image.Titel">
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import logic_functions from "../logic/logic_functions";
  import Store from "../store";

  export default {
    name: 'home',
    data() {
      return {
        Images: Store.state.images
      }
    },
    methods: {
      get_images() {
        logic_functions.get_images();
      },
    },
    created() {
      if (Store.state.fetch_images == false) {
        this.get_images()
        Store.commit("setFetchImages", true)
      }
    }
  }
</script>