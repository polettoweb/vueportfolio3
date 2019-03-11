<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <div class="portfolio__container">
            <div v-for="item in portfolioItems" class="portfolio__img" :key="item.path">
                <router-link
                    :to="'/portfolio/' + item.path"
                    :alt="item.alt"
                    :tags="item.tags"
                    :linkTitle="item.linkTitle"
                >
                    <img :src="item.src" :alt="item.alt">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            portfolioItems: []
        };
    },
    beforeCreate() {
        axios("https://www.marcopoletto.eu/api/v1/portfolio").then(
            res => (this.portfolioItems = res.data.content)
        );
    },
    metaInfo: {
        title: "Marco Poletto | Web Developer | Mentor",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { name: "author", content: "Marco Poletto Web Developer" },
            {
                name: "description",
                content:
                    "Marco Poletto Frontend Web Developer, Web Designer freelance, portfolio"
            }
        ]
    }
};
</script>

<style>
</style>
