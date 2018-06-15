<template lang="pug">
.lincoapp-form
    .form-item(v-for="item in items")
        label {{ item.title }}
        input(:type="item.type" v-model="item.value" :placeholder="item.placeholder")

    .form-control
        button(@click="submit") 提交
</template>
<script>
export default {
    
    data() {
        return {

            items: [
                {
                    type: 'text',
                    title: '用户名',
                    key: 'username',
                    value: '',
                    placeholder: '请输入用户名'
                },
                {
                    type: 'password',
                    title: '密码',
                    key: 'password',
                    value: '',
                    placeholder: '请输入密码'
                }
            ]
        }
    },

    computed: {
        form() {
            let arr = this.items.map(item => {
                return [item.key, item.value]
            })
            return this.arrayToMap(arr)
        }
    },

    methods: {
        submit() {
            console.log(this.form)
        },

        arrayToMap(arr) {
            let target = {}
            arr.forEach(item => {
                target[item[0]] = item[1]
            })
            return target
        }
    }
}
</script>
<style lang="stylus">
.lincoapp-form
    width 100%
    background #eee
    padding 20px 16px

    .form-item
        margin-bottom 10px

    input
        border 1px solid #ddd
        padding 10px 6px
        margin-top 4px
        display block
        width 100%
        outline none
        box-sizing border-box

    button
        border 1px solid #ddd
        width 100%
        height 36px
        border-radius 4px
        box-shadow 0 0 0.5 0 rgba(0,0,0,0.1)
        background-color #fff
        margin-top 20px
        outline none
</style>
