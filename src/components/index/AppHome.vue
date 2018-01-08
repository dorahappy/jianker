<template>
    <div class="app-home">
        <app-header></app-header>
        <app-banner></app-banner>
        <app-listType></app-listType>
        <app-Content></app-Content>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppBanner from './AppBanner'
import AppListType from './AppListType'
import AppContent from './AppContent'
export default {
    name: 'app-home',
    components:{
        AppHeader,AppBanner,AppListType,AppContent
    }
}
</script>

<style>

</style>