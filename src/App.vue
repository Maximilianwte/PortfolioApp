<template>
  <div id="app" :class="theme" class="flex min-h-screen bg-bg_primary text-main_primary">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import Navigation from "./views/Navigation";
  import logic_functions from "./logic/logic_functions";
  import store from "./store";

  export default {
    components: {
      Navigation
    },
    computed: {
      theme() {
        return store.state.theme;
      }
    },    
    methods: {
      get_images() {
        logic_functions.get_images();
      },
    },
    created() {
      if (store.state.fetch_images == false) {
        this.get_images()
        store.commit("setFetchImages", true)
      }
    }
  }
</script>

<style src="./main.css" />