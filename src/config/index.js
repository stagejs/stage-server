const path = require('path')
const Config = require('vpm-config')
const config = module.exports = new Config({})
const conf = config.get()


/// conf.dir
config.set('dir.root', path.join(__dirname, '../..'))
config.set('dir.reps', path.join(conf.dir.root, 'reps'))


/// conf.reps
config.set('reps', {
    uri: conf.dir.reps,
    sid: 'lincoapp'
})


/// conf.compiler
config.set('compiler', {
    common: path.resolve(__dirname, '../../compile/common'),
    default: path.resolve(__dirname, '../../compile/default'),
})