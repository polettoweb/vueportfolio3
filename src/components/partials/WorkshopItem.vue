<template>
    <div class="workshop__box">
                <div class="workshop__img">
                    <a
                        :href="this.link"
                        :title="this.linkTitle"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="workshop__techImg"
                            :src="this.image"
                            :alt="this.linkTitle"
                        />
                    </a>
                </div>
                <div class="workshop__links">
                    <p class="workshop__links-text">{{this.text}}</p>
                    <div class="workshop__tags">
                        <i v-for="tag in tags" :key="tag">{{tag}}</i>
                    </div>
                        <a v-if="this.linkGit !== null"
                            href={this.linkGit}
                            title={this.linkGitTitle}
                            target="_blank"
                            class="workshop__links-git"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="GitHub Logo" />
                        </a>
                </div>
            </div>
</template>

<script>
import github from '../../images/GitHub.png'
export default {
    data() {
        return {}
    },
    props: ['image', 'text', 'link', 'linkTitle', 'linkGit', 'tags', 'linkGitTitle']
}
</script>

<style>

</style>