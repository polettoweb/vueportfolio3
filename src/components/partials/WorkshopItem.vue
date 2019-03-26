<template>
    <div class="workshop__box">
        <div class="workshop__img">
            <img class="workshop__techImg" :src="image" :alt="linkTitle">
        </div>
        <div class="workshop__links">
            <p class="workshop__links-text">{{text}}</p>
            <div class="workshop__tags">
                <i v-for="tag in tags" :key="tag">{{tag}}</i>
            </div>
            <div class="workshop__links-content">
                <a
                    class="button workshop__links-www"
                    :href="link"
                    :title="linkTitle"
                    target="_blank"
                    rel="noopener noreferrer"
                >Visit Website</a>
                <a
                    v-if="linkGit !== null"
                    :href="linkGit"
                    :title="linkGitTitle"
                    target="_blank"
                    class="button workshop__links-git"
                    rel="noopener noreferrer"
                >Visit GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
import defaultImage from "@/assets/images/logo.svg";
export default {
    data() {
        return {
            defaultImage
        };
    },
    props: {
        image: {
            type: String,
            required: true,
            default: defaultImage
        },
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        linkTitle: {
            type: String,
            required: true
        },
        linkGit: {
            type: String,
            required: false
        },
        tags: {
            type: Array,
            required: true
        },
        linkGitTitle: {
            type: String,
            required: false
        }
    }
};
</script>