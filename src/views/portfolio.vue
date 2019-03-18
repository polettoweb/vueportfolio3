<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <div class="portfolio__container">
            <div v-for="item in portfolioItems" class="portfolio__img" :key="item.path">
                <router-link :to="{ path: `/portfolio/${item.path}`}">
                    <img :src="item.src" :alt="item.alt">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    computed: {
        portfolioItems() {
            return this.$store.state.portfolioItems;
        }
    },
    beforeCreate() {
        this.$store.state.portfolioItems === null &&
            this.$store.dispatch("getPortfolio");
    },
    metaInfo: {
        title: "Marco Poletto | Web Developer | Mentor",
        meta: [
            {
                name: "description",
                content:
                    "Marco Poletto Frontend Web Developer, Web Developer freelance, portfolio"
            }
        ]
    }
};
</script>

<style>
</style>
