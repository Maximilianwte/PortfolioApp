<template>
    <div class="auth w-full text-center flex-column pt-32">
        <input class="text-bg_primary py-2 px-4 border rounded" id="userPassword" type="password" required>
        <input @click="get_auth" class="text-main_primary button py-2 bg-bg_primary px-4 border rounded" type="submit" value="Submit">
        <div class="message text-2xl pt-16">{{auth}}</div>
        <button @click="eval_auth">func</button>
    </div>
</template>
<script>
    import logic_functions from "../logic/logic_functions";
    import Store from "../store";

    export default {
        data() {
            return {
                auth: Store.state.auth,
                message: ""
            }
        },
        methods: {
            get_auth() {
                var input = document.getElementById("userPassword").value;
                logic_functions.auth(input)
                this.eval_message()
                logic_functions.set_authCookie() ? this.auth == true : ""
            },
            eval_message() {
                let int = parseInt(Math.random() * 1);
                if (this.auth == true) {
                    switch (int) {
                        case 0:
                            this.message = "Du bist erfolgreich eingeloggt."
                        case 1:
                            this.message = "Das war erfolgreich."
                    }
                }
                else {
                    switch (int) {
                        case 0:
                            this.message = "Das Passwort ist inkorrekt."
                        case 1:
                            this.message = "Versuch es noch einmal."
                    }
                }
            },
            eval_cookie() {
                Store.commit("setAuth", true) ? logic_functions.read_authCookie() : ""
            },
            eval_auth() {
                this.$router.push({ path: '/panel' }) ? Store.state.auth == true : ""
            }
        },
        created() {
            this.eval_cookie();
            this.eval_auth();
        }
    }
</script>