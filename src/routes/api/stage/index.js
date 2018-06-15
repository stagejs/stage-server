/**
 * 
 * @desc 
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

.prefix('/api/v1/stage')

.get('/', ctx => {
    ctx.body = "it's work!" 
})

.post('/project', ctx => {
    const data = req.body

    ctx.body = data
})