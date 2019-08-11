<template>
    <div class="image w-full pl-4 pr-4 xl:pl-64 xl:pr-64 flex-col justify-center pt-32">
        <div class="above flex justify-between">
            <h1 class="text-xl sm:text-3xl">{{title}}</h1>
            <h2 class="text-xl sm:text-3xl">{{place}}</h2>
        </div>
        <img class="pb-32" :src="url" alt="">
    </div>
</template>

<script>
    import store from "../store";

    export default {
        data() {
            return {
                id: 0,
                title: null,
                date: null,
                url: null,
                place: null
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.init(this.id);
        },
        methods: {
            init(id) {
                var data = store.getters.getImage(id);
                this.title = data.Titel
                this.date = data.Aufnahmedatum
                this.place = data.Aufnahmeort
                this.url = data.Image_URL
            }
        }
    }
</script>