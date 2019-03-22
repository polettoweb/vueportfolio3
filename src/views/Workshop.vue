<template>
    <div class="workshop">
        <h1>Workshop</h1>
        <div class="workshop__container">
            <WorkshopItem
                v-for="item in items"
                :key="item.link"
                :text="item.text"
                :image="item.image"
                :tags="item.tags"
                :link="item.link"
                :linkTitle="item.linkTitle"
                :linkGit="item.linkGit"
                :linkGitTitle="item.linkGitTitle"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import WorkshopItem from "@/components/partials/WorkshopItem";
export default {
    computed: {
        items() {
            return this.$store.state.workshopItems;
        }
    },
    beforeCreate() {
        this.$store.state.workshopItems == null &&
            this.$store.dispatch("getWorkshop");
    },
    components: {
        WorkshopItem
    },
    metaInfo() {
        return {
            title: "Marco Poletto | Web Developer - Workshop/Side Projects",
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
                        "Marco Poletto Frontend Web Developer, Web Developer freelance, workshop, side projects"
                }
            ]
        };
    }
};
</script>
