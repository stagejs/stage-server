const compiler = require('/Users/gavinning/lab/test/vue/vue-compiler')

function parse(project, options, callback) {
    let files = []

    project.mods.forEach(mod => {
        files = files.concat(mod.files)
    })

    files = files.concat(project.files)
    compiler(files, options, callback)
}

module.exports = parse