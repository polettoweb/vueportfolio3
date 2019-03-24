<template>
    <div id="app">
        <Header/>
        <div class="app__container">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/App.scss";

.app__container {
    @include centerContainer;
}
</style>
