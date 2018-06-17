const fs = require('fs')
const path = require('path')
const glob = require('glob')
const conf = find('config').get()

class Repository {
    constructor() {
        this.baseURL = conf.dir.reps
        this.mods = getMods()
    }

    get() {

    }

    /**
     * 读取mods[].files文件内容
     * mods: {
            name: mod.$id,
            main: mod.main,
            uuid: mod.uuid,
            version: mod.version,
            sid: mod.sid,
            files: mod.files.slice(0),
            stage: {} // 组件可视化开发跟踪
        }[]
     */
    getMods(mods) {
        let fileMap = {} // 文件内容缓存
        let regPhoto = /jpg|png|gif|jpeg|webp/
        
        let ret = mods.map(mod => {
            mod.files = mod.files.map(uri => {
                // 构建最终编译url
                // url: 最终编译url
                // 什么是最终编译url？[eg:header-stage-bdcc17b6-ca80-40c5-93eb-2e866f2eca40/src/header.vue]
                // => 组件文件列表发送给编译器的时候，编译器需要一个url来生成实体文件，之后才可以进行编译
                // => 这个url被用在 1、webpack.require的路径 2、编译创建组件实体文件的路径
                // => url构成规则: path.join([mod.name, mod.uuid].join('-'), uri)
                // => Stage创建的页面模板 import 路径需要和这个url保持一致
                let url = path.join([mod.name, mod.uuid].join('-'), uri)
                // 文件真实绝对路径
                let filepath = path.join(conf.reps.uri, 'src', mod.name, mod.version, uri)
                // 读取文件内容 优先从缓存中读取
                let content = fileMap[filepath] || path.extname(uri).match(regPhoto) ?
                    fs.readFileSync(filepath) : fs.readFileSync(filepath, 'utf-8')

                // 缓存文件内容防止重复读取
                fileMap[filepath] = content

                // content encode
                content = encodeURIComponent(content)

                return {
                    url, content
                }
            })
            return mod
        })

        return ret

        /*
        ret = {
            name: String,
            main: String,
            uuid: String,
            version: String,
            sid: String,
            file: [{
                uri: String,
                url: String,
                content: String
            }]
        }
        */
    }
}

function getMods() {
    const urls = glob.sync('src/*/', { cwd: conf.dir.reps })
    const names = urls.map(src => path.basename(src))

    return names.map(name => {
        let dir = path.join(conf.dir.reps, 'src', name, 'last')
        let files = glob.sync('src/**.*', { cwd: dir })
        let sid = conf.reps.sid + name

        return {
            dir,
            sid,
            name,
            files
        }
    })
}

module.exports = new Repository