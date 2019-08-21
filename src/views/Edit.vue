<template>
    <div class="edit pt-16">
        <div class="images flex-col justify-center pt-16 sm:pt-0">
            <template v-for="(Image, index) in Images">
                <div v-bind:key="index"
                    class="image w-full pb-16 sm:pb-32 pl-8 pr-8 sm:pl-24 sm:pr-24 xl:pl-64 xl:pr-64">
                    <div :class="[bg-blue ? deleteId != Image.id : '']" class="delete-button absolute mt-2 ml-4 flex w-1/4 justify-between items-center">
                        <svg @click="delete_file(Image.Id)" class="grand-svg delete-button"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <circle cx="256" cy="256" r="256" />
                            <g fill="#fff">
                                <path d="M151.3 168.3l17-17 192.3 192.4-17 17z" />
                                <path d="M151.3 343.7l192.4-192.3 17 17-192.4 192.3z" />
                            </g>
                        </svg>
                        <h4 class="text-2xl pl-2">Really delete this image?</h4>
                    </div>
                    <div class="accept-button absolute mt-128 ml-64">
<svg class="grand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <circle cx="25" cy="25" r="25"/>
  <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M38 15L22 33l-10-8"/>
</svg>

                    </div>
                    <img v-bind:key="index" v-lazy='Image.Image_URL' :v-bind:alt="Image.Titel">
                    <div class="params flex w-full justify-between pt-2">
                        <div class="id w-1/6">
                            <label class="button text-main_primary text-2xl pr-4" for="">ID:</label>
                            <input class="button w-full text-bg_primary py-2 px-4 border rounded" id="id" type="number"
                                v-bind:value="Image.Id" max="9999">
                        </div>
                        <div class="title w-1/3">
                            <label class="button text-main_primary text-2xl pr-4" for="">Title:</label>
                            <input class="button w-full text-bg_primary py-2 px-4 border rounded" id="title" type="text"
                                v-bind:value="Image.Titel" maxlength="24" onchange="">
                        </div>
                        <div class="place w-1/3">
                            <label class="button text-main_primary text-2xl pr-4" for="">Place:</label>
                            <input class="button w-full text-bg_primary py-2 px-4 border rounded" id="place" type="text"
                                v-bind:value="Image.Aufnahmeort" maxlength="42">
                        </div>
                    </div>

                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import logic_functions from "../logic/logic_functions";
    import Store from "../store";
    export default {
        data() {
            return {
                Images: Store.state.images,
                deleteId: null
            }
        },
        methods: {
            get_images() {
                logic_functions.get_images();
            },
            eval_auth() {
                this.$router.push({
                    path: '/auth'
                }) ? Store.state.auth == false : ""
            },
            delete_file(id) {
                this.deleteId = id;
                logic_functions.delete_file(id);
            },
            update_meta(id, field, input) {
                logic_functions.update_meta(id, field, input);
            }
        },
        created() {
            //this.eval_auth();
            if (Store.state.fetch_images == false) {
                this.get_images()
                Store.commit("setFetchImages", true)
            }
            logic_functions.update_meta(1, "Titel", "Lightx")
        }
    }
</script>