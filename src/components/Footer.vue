<template>
    <footer>
        <div class="footer__copy">
            <p>&copy; {{date}} Marco Poletto</p>
        </div>
        <Social/>
    </footer>
</template>

<script>
import Social from "@/components/partials/Social";
export default {
    data() {
        return {
            date: new Date().getFullYear()
        };
    },
    components: {
        Social
    }
};
</script>

<style>
</style>