<template>
    <li :class="number + ' expcard'">
        <i class="ion-ios-circle-filled"/>
        <div class="expcard__title">
            <p>{{title}}</p>
        </div>
        <div class="expcard__text">
            <p class="expcard__location">{{location}}</p>
            <p class="expcard__date">{{date}}</p>
            <p class="expcard__copy">{{text}}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "ExpCard",
    props: ["number", "title", "location", "date", "text"]
};
</script>

<style>
</style>