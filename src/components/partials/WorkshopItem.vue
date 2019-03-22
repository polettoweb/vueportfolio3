<template>
    <div class="workshop__box">
        <div class="workshop__img">
            <a :href="link" :title="linkTitle" target="_blank" rel="noopener noreferrer">
                <img class="workshop__techImg" :src="image" :alt="linkTitle">
            </a>
        </div>
        <div class="workshop__links">
            <p class="workshop__links-text">{{text}}</p>
            <div class="workshop__tags">
                <i v-for="tag in tags" :key="tag">{{tag}}</i>
            </div>
            <a
                v-if="linkGit !== null"
                :href="linkGit"
                :title="linkGitTitle"
                target="_blank"
                class="workshop__links-git"
                rel="noopener noreferrer"
            >
                <img :src="github" alt="GitHub Logo">
            </a>
        </div>
    </div>
</template>

<script>
import github from "@/assets/images/GitHub.png";
export default {
    data() {
        return {
            github
        };
    },
    props: [
        "image",
        "text",
        "link",
        "linkTitle",
        "linkGit",
        "tags",
        "linkGitTitle"
    ]
};
</script>