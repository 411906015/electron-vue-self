<template>
    <div id="">
{{$route.params.id }}
        <input type="text" v-model="input">

    </div>
</template>

<script>

    export default {
        data() {
            return {
                input:1
            }
        },
    }
</script>
