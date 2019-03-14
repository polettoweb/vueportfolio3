<template>
    <div class="workshop">
        <Helmet>
            <meta charSet="UTF-8" />
            <meta
                name="description"
                content="Marco Poletto Frontend Web Developer, Web Designer freelance, workshop, side projects"
            />
            <meta
                name="author"
                content="Marco Poletto Web Developer"
            />
            <title>
                Marco Poletto | Web Developer - Workshop/Side Projects
            </title>
        </Helmet>
        <h1>Workshop</h1>
        <div class="workshop__container">
            {workshopItems.map(item => {
                return (
                    <WorkshopItem
                        :text={item.text}
                        image={item.image}
                        tags={item.tags}
                        link={item.link}
                        linkTitle={item.linkTitle}
                        linkGit={item.linkGit}
                        linkGitTitle={item.linkGitTitle}
                    />
                )
            })}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import WorkshopItem from '@/components/partials/WorkshopItem'
export default {
    data() {
        return {
            items: null
        }
    },
    beforeCreate() {
        axios('https://www.marcopoletto.eu/api/v1/workshop').then(res=> items = res.data)
    }
}
</script>

<style>

</style>
