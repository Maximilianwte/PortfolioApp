<template>
    <div class="panel text-center pt-32 w-full justify-center flex-col">
        <div class="header w-full pb-16">
            <h4 class="text-3xl">{{Message}}</h4>
        </div>
        <div class="buttons w-full pl-64 pr-64 flex justify-around">
            <input type="file" @change="file_selected">
            <button @click="select_images" class="bg-transparent text-2xl hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Upload</button>
                    <router-link class="bg-transparent text-2xl hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" :to="{ name: 'edit', params: {} }">Edit
        </router-link>
        </div>
    </div>
</template>

<script>
    import logic_functions from "../logic/logic_functions";
    import Store from "../store";

    export default {
        name: 'panel',
        data() {
            return {
                Message: "",
                Images: null
            }
        },
        methods: {
            file_selected(event) {
                console.log(event.target.files[0])
                //logic_functions.upload_files(event.target.files[0]) 
            },
            select_images() {
                console.log(logic_functions.select_images())
            },
            eval_auth() {
                this.$router.push({ path: '/auth' }) ? Store.state.auth == false : ""
            }
        },
        created() {
            //this.eval_auth();
            let int = parseInt(Math.random() * 4);
            switch (int) {
                case 0:
                    this.Message = "Hallo, Simon."
                    break;
                case 1:
                    this.Message = "Konichiwa."
                    break;
                case 2:
                    this.Message = "Guten Morgen, Simon."
                    break;
                case 3:
                    this.Message = "Long time no see."
                    break;
                default:
                    this.Message = "Willkommen zurück, Simon."
                    break;
            }
        }
    }
</script>