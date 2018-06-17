const path = require('path')
const conf = require('../config').get()

function find(src) {
    return require(path.join(conf.dir.root, 'src', src))
}

module.exports = find