<template>
    <!-- <Helmet>
        <meta name="description" content={`Marco Poletto Frontend Web Developer, Web Designer freelance, ${this.props.title}`}/>
        <title>Marco Poletto | Web Developer - Portfolio - {this.props.title}</title>
        <body class="alternate" />
    </Helmet> -->
    <div v-if="brand !== null" class="portfolio-detail__content">
        <h1>{{brand.linkTitle}}</h1>
        <div class="portfolio-detail__image">
            <img :src="brand.srcDevices" :alt="brand.alt" />
        </div>
        <div class="portfolio-detail__description">
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
        <router-link to="/portfolio" class="portfolio__back">Back</router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "portfolioItem",
    data() {
        return {
            brand: null
        };
    },
    beforeCreate() {
        axios('https://www.marcopoletto.eu/api/v1/portfolio').then(res=> {
            return res.data.content.filter(el => el.path === this.$route.params.path)
        })
        .then(res => {
            this.brand = res[0];
        })
    },
    metaInfo() {
        return {
            title: `Marco Poletto | Web Developer - Portfolio - ${this.brand.linkTitle}`,
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
                        `Marco Poletto Frontend Web Developer, Web Developer freelance, portfolio, ${this.brand.linkTitle}`
                }
            ]
        }
    }
};
</script>

<style>
</style>
