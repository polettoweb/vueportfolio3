<template>
    <div class="header__container">
        <div class="logo">
            <router-link to="/" title="Back to the Homepage">
                <img :src="logo" alt="logo">
            </router-link>
        </div>
        <Menu v-if="$mq === 'sm'" right :isOpen="false" noOverlay>
            <Navigation/>
        </Menu>
        <Navigation v-else/>
    </div>
</template>

<script>
import Menu from "@/components/partials/Menu.vue";
import Navigation from "@/components/Navigation.vue";
import logo from "@/assets/images/logo.svg";
export default {
    components: {
        Navigation,
        Menu
    },
    data() {
        return {
            logo
        };
    }
};
</script>

<style lang="scss">
.bm-menu-wrap {
    @media (max-width: 1023px) {
        width: 100% !important;
    }
}
.bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 15px !important;
    top: 15px;
    @media (max-width: 480px) {
        top: 8px;
        right: 8px;
    }
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
    background-color: #ffffff !important;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
    height: 45px !important;
    width: 45px !important;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        top: 12px !important;
        right: 24px !important;
        bottom: auto !important;
    }
}

/* Color/shape of close button cross */
.bm-cross {
    background-color: #ffffff !important;
    height: 25px !important;
}

/* General sidebar styles */
.bm-menu {
    background: #373a47;
    font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
    fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
}

/* Individual item */
.bm-item {
    display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
}
</style>
