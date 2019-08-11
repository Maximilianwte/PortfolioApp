<template>
    <nav class="nav flex w-64 h-8 justify-around text-main_primary fixed mt-2 ml-2 items-center">
        <router-link :to="{ name: 'home', params: {} }"> <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 430.2 430.2">
                <path
                    d="M217.9 159.7a43.9 43.9 0 1 0 0 87.7 43.9 43.9 0 0 0 0-87.7zm0 66.8a23 23 0 1 1 0-46 23 23 0 1 1 0 46z" />
                <path
                    d="M392.9 59.4L107.6 27a39.2 39.2 0 0 0-30.8 8.8A39.7 39.7 0 0 0 61.7 63L56.4 106H40.2c-23 0-40.2 20.3-40.2 43.3V363a39.7 39.7 0 0 0 40.2 40.8h286.9c23 0 43.9-17.8 43.9-40.8v-8.4a52.2 52.2 0 0 0 19.8-8.3A43.4 43.4 0 0 0 406 318l24-212.1c2.4-23-14.1-43.8-37.1-46.5zm-42.8 303.5c0 11.5-11.5 19.9-23 19.9H40.2A18.8 18.8 0 0 1 21 362.9v-38.7l81-59.5a25 25 0 0 1 32.4 1.5l57 50.2a49.1 49.1 0 0 0 30.8 11.5c8.8.1 17.5-2.2 25-6.8l103-59.6V363zm0-126l-114 66.4a26.6 26.6 0 0 1-30.8-2.6L148 250.1a46.5 46.5 0 0 0-58-2.1l-69 50.1V149.2c0-11.5 7.8-22.4 19.3-22.4h286.9a24 24 0 0 1 23 22.4V237zM409 103v.2l-24.6 212.2c0 5.5-2.4 10.7-6.8 14-2 2.2-6.7 3.2-6.7 4.2V149.2a45 45 0 0 0-44-43.3H77.4L82 65A24 24 0 0 1 90 51.5a24 24 0 0 1 15.6-4.2l284.8 33c11.5 1 19.9 11.2 18.8 22.7z" />
            </svg>
        </router-link>
        <router-link class="hover:text-main_secondary fast_transition" :to="{ name: 'about', params: {} }">About
        </router-link>
        <router-link class="hover:text-main_secondary fast_transition" :to="{ name: 'license', params: {} }">Get License
        </router-link>
        <button class="svg small" @click="toggleTheme"><svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 226 226">
                <circle cx="113" cy="113" r="113" />
            </svg>

        </button>


    </nav>
</template>

<script>
    import Store from "../store";
    import {
        constants
    } from 'crypto';
    export default {
        methods: {
            toggleTheme() {
                Store.commit("toggleTheme");
            }
        }

    }
</script>