<template>
    <div v-if="brand !== null" class="portfolio-detail__content">
        <h1>{{brand.linkTitle}}</h1>
        <router-link to="/portfolio" class="button__back">Back</router-link>
        <div class="portfolio-detail__image" data-cy="portfolio-detail__image">
            <img :src="brand.srcDevices" :alt="brand.alt">
        </div>
        <div class="portfolio-detail__description" data-cy="portfolio-detail__description">
            <div class="portfolio-detail__websites">
                <span>Websites</span>
                <ul>
                    <li v-for="item in brand.websites" :key="item.title">
                        <a :href="item.link" :title="item.title">{{item.link}}</a>
                    </li>
                </ul>
                <span>Role</span>
                <p class="portfolio-detail__role">{{brand.role}}</p>
                <span>Techs used</span>
                <div class="portfolio-detail__techs-list">
                    <p v-for="tag in brand.tags" :key="tag">{{tag}}</p>
                </div>
            </div>
            <div class="portfolio-detail__text">
                <p>{{brand.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
    name: "portfolioItem",
    computed: {
        ...mapState({
            brand: state => state.portfolioItem
        })
    },
    methods: {
        ...mapActions(["getPortfolioItem"])
    },
    created() {
        this.getPortfolioItem(this.$route.params.path);
    },
    metaInfo() {
        return {
            title: `Marco Poletto | Web Developer - Portfolio`,
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                { name: "author", content: "Marco Poletto Web Developer" },
                {
                    name: "description",
                    content: `Marco Poletto Frontend Web Developer, Web Developer freelance, portfolio`
                }
            ]
        };
    }
};
</script>

<style>
</style>
