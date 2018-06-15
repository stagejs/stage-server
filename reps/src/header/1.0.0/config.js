import types from '../../common/types'

const header = {

    editor: [
        {
            /// 字段配置类型
            type: types.text,
    
            /// 字段标题
            title: 'title',
    
            // 字段描述
            desc: '这里可以修改title',

            // 可配置字段的路径
            uri: 'test.text',
            
            // 可选配置
            data() {
                return {
                    title
                }
            }
        }
    ]
}

export default header
