<template lang="pug">
.lincoapp-header
    h1 {{ test.text }}
</template>
<script>
export default {
    data() {
        return {
            title: "注册",
            test: {
                text: "test"
            }
        }
    }
}
</script>

<style lang="stylus">
.lincoapp-header
    width 100%
    height 44px
    color #fff
    line-height 44px
    text-align center
    background #222
</style>
