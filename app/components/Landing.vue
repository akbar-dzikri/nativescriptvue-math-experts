<script>
import Home from './Home.vue'

export default {
    data() {
        return {
            message: 'Hello World!'
        }
    },
    methods: {
        toHome(){
            this.$navigateTo(Home)
        }
    }
}
</script>

<template>
    <Page>
        <StackLayout>
            <Image src='~/../App_Resources/Android/src/main/res/drawable-hdpi/landing.png' stretch="none" />
            <Button text="Mulai" @tap="toHome"/>
        </StackLayout>

    </Page>
</template>

<style lang="scss">
StackLayout{
    max-width: 100%;
    vertical-align: middle;
    horizontal-align: center;
    height: auto;
}
Button{
    max-width: 80%;
    border-radius: 25px;
}
</style>