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
            list: [
                {
                    name: 'lincoapp-header',
                    version: '1.0.0',
                    files: ['/Users/gavinning/lab/github/stage/src/list/header.vue']
                },
                {
                    name: 'lincoapp-form',
                    version: '1.0.0',
                    files: ['/Users/gavinning/lab/github/stage/src/list/form.vue']
                },
                {
                    name: 'lincoapp-footer',
                    version: '1.0.0',
                    files: ['/Users/gavinning/lab/github/stage/src/list/footer.vue']
                },
            ]
        }
    }
})

// mod > src > mod.vue