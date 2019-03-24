<template>
    <div class="blog-cat__home">
        <h1>Blog</h1>
        <div class="blog-cat__container">
            <article v-for="(article, index) in articles" :key="index" class="blog-cat__post">
                <router-link :to="`/blog/${article.slug}`">
                    <div class="blog-cat__image">
                        <img
                            :src="article.featuredImage"
                            :alt="article.title"
                            class="blog-cat__image"
                        >
                    </div>
                    <div class="blog-cat__title">
                        <h3>{{article.title}}</h3>
                        <p>{{article.excerpt}}</p>
                    </div>
                </router-link>
            </article>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapState({
            articles: state => state.blog
        })
    },
    methods: {
        ...mapActions(["getBlog"])
    },
    created() {
        this.articles === null && this.getBlog();
    },
    metaInfo() {
        return {
            title:
                "Marco Poletto Blog - Frontend Web Developer | UI Engineer | Mentor",
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
                        "Marco Poletto Frontend Web Developer, Web Designer freelance, blog"
                }
            ]
        };
    }
};
</script>

