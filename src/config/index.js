const path = require('path')
const Config = require('vpm-config')
const config = module.exports = new Config({})
const conf = config.get()

config.set('dir.root', path.join(__dirname, '../..'))
config.set('dir.reps', path.join(conf.dir.root, 'reps'))

config.set('reps', {
    uri: conf.dir.reps,
    sid: 'lincoapp'
})
