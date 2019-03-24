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
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapState({
            portfolioItems: state => state.portfolioItems
        })
    },
    methods: {
        ...mapActions(["getPortfolio"])
    },
    created() {
        this.portfolioItems === null && this.getPortfolio();
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
