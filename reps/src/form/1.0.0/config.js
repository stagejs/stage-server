import types from '../../common/types'

const form = {
    // todo 能力注入待重写
    //ability: ['sortable', 'deleteable'],

    editor: [
        {
            /// 配置类型
            type: types.button,

            title: '新增字段',
    
            /// 描述
            desc: '点击新增字段',

            submit(vm) {
                vm.items.push({
                    type: 'text',
                    title: '新增字段',
                    key: 'field',
                    value:  '',
                    placeholder: 'placeholder'
                })
            }
        },
        {
            /// 配置类型
            type: types.group,

            title: '表单修改测试',
    
            /// 描述
            desc: '表单修改测试',

            uri: 'items',

            /// 是否允许删除
            deleteable: true,

            /// 这里group内的所有配置 是对一个组件可重复item单位的配置描述
            /// 当前例子是一个表单，表单内会有很多字段，每一个字段都应该是一个可重复的item
            /// 所以，表单内所有的字段都会应用group内的配置
            /// 并不是要在group内配置所有的字段，只需要配置一个通用的即可
            /// 配置中心对当前配置的解析是: 
            /// items.forEach(item => configure.build(item).by(group))
            /// item1 => group
            /// item2 => group
            /// itemN => group
            group: [
                {
                    type: types.text,
                    title: '字段名称',
                    uri: 'title'
                },
                {
                    type: types.text,
                    title: '字段Key',
                    uri: 'key'
                },
                {
                    type: types.text,
                    title: '修改placeholder',
                    uri: 'placeholder'
                }
            ]
        }
    ]
}

export default form
