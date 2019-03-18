<template>
    <div class="blog__container">
        <section>
            <h1>{{article.title}}</h1>
            <p>{{article.date}}</p>
            <div class="blog__image">
                <img :src="article.featuredImage" alt>
            </div>
            <div class="blog__post">
                <p>{{article.text}}</p>
            </div>
        </section>
        <div class="blog__back-container">
            <router-link to="/blog" class="blog__back">&lt; Back to blogs</router-link>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    computed: {
        article() {
            const res = this.$store.state.blog.filter(
                el => el.slug === this.$route.params.slug
            );
            return res[0];
        }
    },
    beforeCreate() {
        this.$store.state.blog === null && this.$store.dispatch("getBlog");
    },
    metaInfo() {
        return {
            title: `Marco Poletto Blog - ${
                this.article.title
            }- Frontend Web Developer | UI Engineer | Mentor`,
            meta: [
                {
                    name: "description",
                    content: `Marco Poletto Frontend Web Developer, Web Designer freelance, blog, ${
                        this.article.title
                    }`
                }
            ]
        };
    }
};
</script>
