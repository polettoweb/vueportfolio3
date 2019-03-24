<template>
    <div class="blog__container">
        <section>
            <h1>{{article.title}}</h1>
            <router-link to="/blog" class="button__back">Back</router-link>
            <p>{{article.date}}</p>
            <div class="blog__image">
                <img :src="article.featuredImage" alt>
            </div>
            <div class="blog__post">
                <p>{{article.text}}</p>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, macActions, mapActions } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapState({
            article: state => state.single
        })
    },
    methods: {
        ...mapActions(["getSingle"])
    },
    created() {
        this.article === null && this.getSingle(this.$route.params.slug);
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
