<template>
    <footer>
        <div class="footer__copy" data-cy="footer__copy">
            <p>&copy; {{date}} Marco Poletto</p>
        </div>
        <Social :socials="socials"/>
    </footer>
</template>

<script>
import Social from "@/components/partials/Social";
export default {
    name: "Footer",
    data() {
        return {
            date: new Date().getFullYear(),
            socials: [
                {
                    type: "ion-social-github",
                    link: "https://github.com/polettoweb",
                    title: "GitHub Page"
                },
                {
                    type: "ion-social-codepen",
                    link: "https://codepen.io/polettoweb/",
                    title: "Codepen Page"
                },
                {
                    type: "ion-social-twitter",
                    link: "https://twitter.com/polettoweb",
                    title: "Twitter Page"
                },
                {
                    type: "ion-social-linkedin",
                    link: "https://www.linkedin.com/in/marco-poletto-96853774/",
                    title: "Linkedin Page"
                },
                {
                    type: "ion-social-youtube",
                    link: "https://www.youtube.com/channel/UC_ap7AXgonikRgAYqRhbibg",
                    title: "YouTube channel"
                },
                {
                    type: "ion-email",
                    link: "mailto:marco@marcopoletto.eu",
                    title: "Contact me via email"
                }
            ]
        };
    },
    components: {
        Social
    }
};
</script>