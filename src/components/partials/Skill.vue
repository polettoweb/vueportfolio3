<template>
    <div :class="'skill ' + title">
        <h4>{{title}}</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["title", "text", "children"]
};
</script>

<style>
</style>