<template>
    <div class="edit pt-16">
        <div class="images flex-col justify-center pt-16 sm:pt-0">
            <template v-for="(Image, index) in Images">
                <div v-bind:key="index"
                    class="image w-full pb-16 sm:pb-32 pl-8 pr-8 sm:pl-24 sm:pr-24 xl:pl-64 xl:pr-64">
                    <div class="delete-button absolute mt-2 ml-4">
                        <svg class="grand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <circle cx="256" cy="256" r="256" fill="#ff5e73" />
                            <g fill="#fff">
                                <path d="M151.3 168.3l17-17 192.3 192.4-17 17z" />
                                <path d="M151.3 343.7l192.4-192.3 17 17-192.4 192.3z" />
                            </g>
                        </svg>

                    </div>
                    <img v-bind:key="index" v-lazy='Image.Image_URL' :v-bind:alt="Image.Titel">
                    <div class="params flex w-full justify-between pt-2">
                        <div class="id w-1/4">
                            <label class="button text-main_primary text-2xl pr-4" for="">ID:</label>
                            <input class="button text-bg_primary py-2 px-4 border rounded" id="id" type="number">
                        </div>
                        <div class="title w-1/4">
                            <label class="button text-main_primary text-2xl pr-4" for="">Title:</label>
                            <input class="button text-bg_primary py-2 px-4 border rounded" id="title" type="text">
                        </div>
                        <div class="place w-1/4">
                            <label class="button text-main_primary text-2xl pr-4" for="">Place:</label>
                            <input class="button text-bg_primary py-2 px-4 border rounded" id="place" type="text">
                        </div>
                        <div class="button w-1/4">
                            <button
                                class="bg-transparent text-2xl hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Accept</button>
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