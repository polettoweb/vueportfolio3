<template>
    <footer>
        <div class="footer__copy">
            <p>&copy; {{date}} Marco Poletto</p>
        </div>
        <Social :socials="socials"/>
    </footer>
</template>

<script>
import Social from "@/components/partials/Social";
export default {
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