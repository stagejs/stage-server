// 默认配置 测试ing

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const cache = require('../src/lib/cache')

/**
 * 返回对应编译配置的文件列表
 * @param {String} name 编译配置名称
 * @return {Array<{uri: String, content: String}>}
 */
function getFiles(name) {
    let key = `compiler.${name}`
    // 尝试从缓存中读取
    let files = cache.get(key)
    // 配置文件目录
    let baseURL = path.resolve(__dirname, name)

    // 读取成功则直接返回
    if (files) {
        return files
    }

    // 缓存读取失败则重新读取文件
    let uris = glob.sync('**/**.*', {cwd: baseURL})

    files = uris.map(uri => {
        return {
            url: uri,
            content: encodeURIComponent(
                fs.readFileSync(path.join(baseURL, uri), 'utf-8')
            )
        }
    })

    // 更新到缓存
    cache.set(key, files)
    return files
}

module.exports = getFiles