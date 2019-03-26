<template>
    <div class="keywords__container">
        <div class="keywords__wrapper">
            <sequential-entrance tag="div" entranceFromTop :delay="700">
                <p
                    class="keywords__text"
                    v-for="(item, i) in words"
                    :key="i"
                    :id="item.toLowerCase()"
                >{{item}}</p>
            </sequential-entrance>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        words: {
            type: Array,
            required: true,
            validator: prop => prop.length > 0
        }
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