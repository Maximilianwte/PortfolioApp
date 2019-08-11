<template>
  <div id="app" :class="theme" class="flex min-h-screen bg-bg_primary text-main_primary">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import Navigation from "./views/Navigation";
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
    created() {
      if (Store.state.fetch_images == false) {
        this.get_images()
        Store.commit("setFetchImages", true)
      }
    }
  }
</script>

<style src="./main.css" />