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
import { mapState, mapMutations } from "vuex";
export default {
    name: "Navigation",
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
    computed: {
        ...mapState({
            isSideBarOpen: state => state.isSideBarOpen
        })
    },
    methods: {
        ...mapMutations(["externalCloseMenu"]),
        closeMenu() {
            this.isSideBarOpen === true && this.externalCloseMenu();
        }
    }
};
</script>
