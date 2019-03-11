<template>
    <div class="keywords__container">
        <div class="keywords__wrapper">
            <sequential-entrance tag="div" entranceFromTop :delay="700">
                <p
                    class="keywords__text"
                    v-for="(item, i) in keywords"
                    :key="i"
                    :id="item.name.toLowerCase()"
                >{{item.name}}</p>
            </sequential-entrance>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keywords: [
                {
                    name: "JavaScript",
                    opacity: "1"
                },
                {
                    name: "React",
                    opacity: "0.7"
                },
                {
                    name: "Vue",
                    opacity: "0.7"
                },
                {
                    name: "Accessibility",
                    opacity: "0.6"
                },
                {
                    name: "SSR",
                    opacity: "0.4"
                },
                {
                    name: "GraphQL",
                    opacity: "0.3"
                },
                {
                    name: "Sass",
                    opacity: "0.5"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.entranceFromRight {
    animation-name: entranceFromRight;
    animation-duration: 1s;
}

@keyframes entranceFromRight {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>