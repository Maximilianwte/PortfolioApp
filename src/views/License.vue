<template>
    <div class="license text-center w-full pt-32">
        <h1 class="text-2xl">{{Message}}</h1>
    </div>
</template>

 <script>
 export default {
    data() {
        return {
            Message: ""
        }
    },
    created() {
        let int = parseInt(Math.random() * 3);
        switch (int) {
            case 0:
                this.Message = "Du brauchst doch eh keine."
                break;
            case 1:
                this.Message = "Nicht für dich."
                break;
            default:
                this.Message = "Denk nochmal drüber nach."
                break;
        }
    }
}
</script> */

