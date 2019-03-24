<template>
    <nav>
        <div class="nav__container">
            <ul>
                <li v-for="link in links" :key="link.name" @click="closeMenu">
                    <router-link
                        :exact="link.path === '/'"
                        active-class="active"
                        :to="link.path"
                        :title="link.name"
                    >{{link.name}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            links: [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/portfolio",
                    name: "Portfolio"
                },
                {
                    path: "/workshop",
                    name: "Workshop"
                },
                {
                    path: "/resume",
                    name: "Resume"
                },
                {
                    path: "/blog",
                    name: "Blog"
                }
            ]
        };
    },
    methods: {
        ...mapMutations(["externalCloseMenu"]),
        closeMenu() {
            this.externalCloseMenu();
        }
    }
};
</script>
