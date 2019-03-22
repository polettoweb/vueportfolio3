<template>
    <section v-if="expDetails !== null" class="resume__container">
        <section class="experience__container">
            <h1>Experience</h1>
            <p class="experience__intro">
                Web development has been a passion of mine since
                1997 that became my full-time job five years ago. I
                really enjoy the challenge that the web brings to
                developers and I like to keep improving and learn
                new technologies. I choose to specialise myself into
                front-end for being able to shape user interfaces
                based on the client needs and for being challenged
                by the constant amount of innovations that the
                front-end world is giving
            </p>
            <ul class="experience">
                <ExpCard
                    v-for="item in expDetails"
                    :key="item.title"
                    :number="item.number"
                    :location="item.location"
                    :title="item.title"
                    :date="item.date"
                    :text="item.text"
                />
            </ul>
        </section>
        <section class="skills__container">
            <h2>Skills</h2>
            <Skill v-for="topic in skillsTopics" :key="topic" :title="topic">
                <div class="skill__title">
                    <p v-for="item in skillsLines[topic]" :key="item.title">{{item.title}}</p>
                </div>
            </Skill>
        </section>
        <div class="resume__buttons">
            <a
                class="button"
                href="/marco-poletto-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >Download CV</a>
            <a class="button" href="mailto:marco@marcopoletto.eu">Contact Me</a>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import ExpCard from "@/components/partials/ExpCard.vue";
import Skill from "@/components/partials/Skill.vue";
export default {
    name: "Resume",
    computed: {
        expDetails() {
            return this.$store.state.expDetails;
        },
        skillsLines() {
            return this.$store.state.skillsLines;
        },
        skillsTopics() {
            return this.$store.state.skillsTopics;
        }
    },
    beforeCreate() {
        this.$store.state.expDetails === null &&
            this.$store.dispatch("getResume");
    },
    components: {
        ExpCard,
        Skill
    },
    metaInfo: {
        title: "Marco Poletto | Web Developer - Curriculum Vitae",
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
                    "Marco Poletto Frontend Web Developer, Web Designer freelance, curriculum vitae."
            }
        ]
    }
};
</script>
