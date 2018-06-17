/**
 * 
 * @desc Mods
 * @date 2018-06-15
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2018-06-15 by gavinning
 *
 */

const path = require('path')
const glob = require('glob')
const router = module.exports = require('koa-router')()
const reps = find('lib/reps')

router

.prefix('/api/v1/mods')

.get('/', ctx => {
    ctx.body = "it's work!"
})

.get('/all', ctx => {
    ctx.body = {
        code: 0,
        message: 'ok',
        data: {
            list: reps.mods
        }
    }
})

// mod > src > mod.vue