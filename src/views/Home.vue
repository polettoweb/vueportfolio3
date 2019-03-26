<template>
    <div class="home__container">
        <div class="home__intro">
            <div class="tilt">
                <img :src="marco" alt="Marco Poletto">
            </div>
            <h1>
                Hi, I'm Marco,
                <br>
                <span>
                    Frontend Developer,
                    <br>UI Engineer &amp; Mentor
                </span>
            </h1>
        </div>
        <Keywords :words="words"/>
        <div class="home__text">
            <p>
                My goal is to build clean, performant and accessible
                user interfaces where the right user experience is a
                focal point. My job is also my passion and,
                therefore, seeking out new technologies and stay
                up-to-date on industry trends and advancements is
                more a pleasure than a duty. This allows me to stay
                ahead of the curve and deliver exceptional work to
                all of my clients.
            </p>
        </div>
    </div>
</template>

<script>
import Keywords from "@/components/partials/Keywords";
import marco from "@/assets/images/marco.png";
export default {
    name: "home",
    data() {
        return {
            marco,
            words: [
                "JavaScript",
                "React",
                "Vue",
                "Accessibility",
                "SSR",
                "GraphQL",
                "Sass"
            ]
        };
    },
    components: {
        Keywords
    },
    metaInfo: {
        title: "Marco Poletto | Web Developer | Mentor",
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
                    "Marco Poletto Frontend Web Developer, UI Engineer, Web Designer freelance and mentor for Junior developers"
            }
        ]
    }
};
</script>
