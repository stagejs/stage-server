// 仅供测试，正式使用需替换为npm包
const compiler = require('/Users/gavinning/lab/stagejs/vue-compiler')
const config = find('config').get('compiler')
const getCompilerConfigFiles = require('../../compile')

function compile(project) {
    let files = []
    let configFiles = []
    let commonFiles = getCompilerConfigFiles('common')

    project.mods.forEach(mod => {
        files = files.concat(mod.files)
    })

    // 合并可视化平台创建的文件列表
    files = files.concat(project.files)

    // 检查编译器配置
    if (project.compiler.config && project.compiler.config in config) {
        configFiles = getCompilerConfigFiles(project.compiler.config)
    }
    else {
        configFiles = getCompilerConfigFiles('default')
    }

    // 合并公共文件列表
    files = files.concat(commonFiles)
    // 合并默认配置文件列表
    files = files.concat(configFiles)

    console.log('commonFiles:', commonFiles)
    console.log('configFiles:', configFiles)

    // 执行编译
    return compiler(files, {extractCSS: false, commonsChunk: false})
}

module.exports = {
    compile
}