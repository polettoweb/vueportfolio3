<template>
    <nav>
        <div class="nav__container">
            <ul>
                <li>
                    <router-link :exact="true" active-class="active" to="/" title="Home">Home</router-link>
                </li>
                <li>
                    <router-link to="/portfolio" active-class="active" title="Portfolio">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/workshop" active-class="active" title="Workshop">Workshop</router-link>
                </li>
                <li>
                    <router-link to="/resume" active-class="active" title="Resume">Resume</router-link>
                </li>
                <li>
                    <router-link to="/blog" active-class="active" title="Blog">Blog</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
