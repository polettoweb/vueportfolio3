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
import { mapState, mapActions } from "vuex";
import WorkshopItem from "@/components/partials/WorkshopItem";
export default {
    computed: {
        ...mapState({
            items: state => state.workshopItems
        })
    },
    methods: {
        ...mapActions(["getWorkshop"])
    },
    created() {
        this.workshopItems == null && this.getWorkshop();
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
