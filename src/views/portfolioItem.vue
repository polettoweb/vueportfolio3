<template>
    <p>CIAO</p>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            brand: null
        };
    },
    beforeCreate() {
        axios("https://www.marcopoletto.eu/api/v1/portfolio").then(
            res => console.log(res.data),
            console.log(this.$route.path)
        );
    },
    mounted() {}
};
</script>

<style>
</style>
